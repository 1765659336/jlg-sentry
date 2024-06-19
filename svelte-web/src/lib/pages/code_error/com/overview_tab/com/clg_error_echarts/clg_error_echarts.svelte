<script lang="ts">
  import echarts from "$lib/libs/echarts";
  import { onMount } from "svelte";

  let echartsRef: HTMLElement;

  onMount(() => {
    const myChart = echarts.init(echartsRef);

    const option = {
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [150, 230, 224, 218, 135, 147, 260],
          type: "line",
        },
      ],
    };

    myChart.setOption(option);
  });
</script>

<div bind:this={echartsRef} style="width: 100%;height:300px" />
