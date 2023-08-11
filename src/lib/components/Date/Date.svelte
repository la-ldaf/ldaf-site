<script lang="ts">
  import { shortMonths } from "$lib/constants/date";

  export let dateString: string;

  $: date = new Date(dateString);
  $: month = date.getMonth();
  $: monthName = shortMonths[month];
  $: day = date.getDate();
</script>

<div class="event-date">
  <div class="event-date-month">{monthName}</div>
  <div class="event-date-day">{day}</div>
</div>

<style>
  .event-date {
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 78px;
    height: calc(39px * 2 + 2px);
    font-size: 18px;
    border: 1px solid #757473;
    flex-shrink: 0;
  }

  .event-date-month,
  .event-date-day {
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 50%;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: space-around;
  }

  .event-date-month {
    background-color: #757473;
    color: #fff;
  }

  .event-date-day {
    color: #757473;
  }
</style>
