<script lang="ts">
  import echarts from "$lib/libs/echarts";
  import { onMount } from "svelte";

  let echartsRef: HTMLElement;

  onMount(() => {
    const myChart = echarts.init(echartsRef);

    const option = {
      title: {
        text: "ECharts 入门示例",
      },
      tooltip: {},
      legend: {
        data: ["销量"],
      },
      xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
      },
      yAxis: {},
      series: [
        {
          name: "销量",
          type: "bar",
          data: [5, 20, 36, 10, 10, 20],
        },
      ],
    };

    myChart.setOption(option);
  });
</script>

<div bind:this={echartsRef} style="width: 100%;height:300px" />
