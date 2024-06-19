<script>
  import * as Card from "$lib/components/ui/card/index";
  import OverviewEcharts from "./com/overview_echarts/overview_echarts.svelte";
  import OnerrorEcharts from "./com/onerror_echarts/onerror_echarts.svelte";
  import ClgErrorEcharts from "./com/clg_error_echarts/clg_error_echarts.svelte";
  import OnerrorList from "./com/onerror_list/onerror_list.svelte";
</script>

<Card.Root>
  <Card.Header>
    <Card.Title>时间范围</Card.Title>
    <Card.Description>30天</Card.Description>
  </Card.Header>
  <Card.Content>
    <OverviewEcharts></OverviewEcharts>
  </Card.Content>
</Card.Root>
<div class="flex mt-2">
  <div class="w-1/2">
    <Card.Root class="mr-1">
      <Card.Header>
        <Card.Title>JS错误</Card.Title>
        <Card.Description>onerror</Card.Description>
      </Card.Header>
      <Card.Content>
        <OnerrorEcharts></OnerrorEcharts>
        <OnerrorList></OnerrorList>
      </Card.Content>
    </Card.Root>
  </div>
  <div class="w-1/2">
    <Card.Root class="ml-1">
      <Card.Header>
        <Card.Title>自定义异常</Card.Title>
        <Card.Description>console.error</Card.Description>
      </Card.Header>
      <Card.Content>
        <ClgErrorEcharts></ClgErrorEcharts>
      </Card.Content>
    </Card.Root>
  </div>
</div>
