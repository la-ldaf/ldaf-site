<script lang="ts">
  import * as topojson from "topojson-client";
  import * as Plot from "@observablehq/plot";

  export let data;
  $: ({ fireWeatherData } = data);
  $: parishGeodata = fireWeatherData?.topoJSON ?? [];
  $: fireData = fireWeatherData?.parishes ?? [];
  $: parishes = topojson.feature(
    parishGeodata,
    parishGeodata.objects["parishes-fullsize"],
  ).features;

  $: if (parishes) {
    parishes.forEach((parish: any) => {
      const name = parish.properties.parishname.replaceAll(".", "");
      const match = fireData.find((parish: any) => parish.ParishName === name);
      parish.properties.fireRisk = match?.DangerClassDay || 0;
    });
  }

  // TODO: understand difference between topojson.feature vs topojson.mesh
  // const louisiana = topojson.mesh(parishData,parishData.objects['parishes-fullsize']);

  let div: HTMLElement;

  const fireRiskLevels = ["Low", "Medium", "High", "Very High", "Extreme"];
  const colors = [
    // "#D0D0D0", Omitted here because we don't want the 'null' value to be included in the legend
    "#75982E",
    "#5597F7",
    "#FBEF54",
    "#E89E3F",
    "#DF352D",
  ];
  const colorsMap = new Map([
    [0, "#D0D0D0"],
    [1, "#75982E"],
    [2, "#5597F7"],
    [3, "#FBEF54"],
    [4, "#E89E3F"],
    [5, "#DF352D"],
  ]);

  $: {
    div?.firstChild?.remove(); // remove old chart, if any
    div?.append(
      Plot.plot({
        title: "Fire Danger Levels",
        // projection: 'albers-usa',
        color: {
          type: "categorical",
          domain: fireRiskLevels,
          range: colors,
          label: "Fire Danger (Low - Extreme)", // TODO: how to get this to show up when type is 'categorical'
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
  }
</script>

<div bind:this={div}></div>
