<script lang="ts">
  import "./Date.scss";

  import { shortMonths } from "$lib/constants/date";

  export let dateString: string;
  export let variation: "big" | "small" = "big";

  $: date = new Date(dateString);
  $: month = date.getMonth();
  $: monthName = shortMonths[month];
  $: day = date.getDate();
</script>

<div class="event-date event-date--{variation}">
  <div class="event-date-month">{monthName}</div>
  <div class="event-date-day">{day}</div>
</div>
