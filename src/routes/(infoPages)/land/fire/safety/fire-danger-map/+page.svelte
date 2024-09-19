<script lang="ts">
  import { onMount } from "svelte";
  import * as topojson from "topojson-client";
  import * as Plot from "@observablehq/plot";
  import { format } from "date-fns";
  import "./page.scss";

  export let data;
  $: ({ fireWeatherData, error = null } = data);
  $: console.log("firedata", fireWeatherData, "ERROR", error);
  $: parishGeodata = fireWeatherData?.topoJSON ?? [];
  $: fireData = fireWeatherData?.parishes ?? [];
  $: parishes =
    fireWeatherData &&
    parishGeodata &&
    // @ts-ignore eslint disable @typescript-eslint/ban-ts-comment
    topojson.feature(parishGeodata, parishGeodata.objects["parishes-fullsize"]).features;
  // TODO: parishGeodata is valid TopoJSON from this public data source:
  // https://github.com/TheLens/geographic-data/blob/master/exports/topojson/parishes/parishes-simplified.json
  // but topojson.feature is not recognizing it as such. Revisit this in the future, but acceptable to ignore
  // for the time being.

  $: formattedTime =
    fireWeatherData?.lastUpdated &&
    format(new Date(fireWeatherData.lastUpdated), "MMMM d, yyyy 'at' h:mm aaa");

  $: if (parishes) {
    parishes.forEach((parish: any) => {
      const name = parish.properties.parishname.replaceAll(".", "");
      const match = fireData.find((parish) => parish.ParishName === name);
      parish.properties.fireRisk = match?.DangerClassDay || 0;
    });
  }

  let div: HTMLElement;

  const fireRiskLevels = ["Low", "Medium", "High", "Very High", "Extreme"];
  // TODO: convert map colors to match site color palette?
  const colors = {
    // TODO: is 'missing' considered no risk or actually missing?
    missing: "#D0D0D0",
    low: "#75982E", // green
    medium: "#5597F7", // blue
    high: "#FBEF54", // yellow
    veryHigh: "#E89E3F", // orange
    extreme: "#DF352D", // red
  };
  const colorsMap = new Map([
    [0, colors.missing],
    [1, colors.low],
    [2, colors.medium],
    [3, colors.high],
    [4, colors.veryHigh],
    [5, colors.extreme],
  ]);

  onMount(() => {
    div?.firstChild?.remove(); // remove old chart, if any
    div?.append(
      Plot.plot({
        title: "Fire Danger Levels",
        color: {
          domain: fireRiskLevels,
          range: Object.values(colors).slice(1), // remove 'missing' color from the displayed range,
          type: "categorical",
          label: "Fire Danger (Low - Extreme)", // TODO: figure out how to have this display when type is 'categorical'
          legend: true,
        },
        axis: false,
        width: 800,
        height: 640,
        marks: [
          Plot.geo(parishes, {
            stroke: "black",
            strokeOpacity: 0.5,
            fill: (d) => colorsMap.get(Number(d.properties.fireRisk)),
          }),
          Plot.tip(
            parishes,
            Plot.pointer(
              Plot.geoCentroid({
                title: (d) => d.properties.parishname,
                fontSize: 12,
              }),
            ),
          ),
        ],
      }),
    );

    // The timestamp will render prematurely, i.e. before the map is rendered,
    // if we don't wrap all of this in onMount
    const timestamp = document.createElement("p");
    timestamp.innerHTML = `<b>Data last updated:</b> ${formattedTime}`;
    div?.append(timestamp);
  });
</script>

{#if !fireWeatherData && !error}
  <p>Loading...</p>
{:else if error}
  <p>{error}</p>
{:else}
  <div bind:this={div}></div>
{/if}
