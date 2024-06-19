<script lang="ts">
  import * as Tabs from "$lib/components/ui/tabs/index";
  import ErrorListTab from "./com/error_list_tab/error_list_tab.svelte";
  import OverviewTab from "./com/overview_tab/overview_tab.svelte";
</script>

<Tabs.Root value="overview">
  <Tabs.List class="grid w-full grid-cols-3">
    <Tabs.Trigger value="overview">概览</Tabs.Trigger>
    <Tabs.Trigger value="error_list">错误列表</Tabs.Trigger>
    <Tabs.Trigger value="wait_solve_error">待处理错误</Tabs.Trigger>
  </Tabs.List>
  <Tabs.Content value="overview">
    <OverviewTab></OverviewTab>
  </Tabs.Content>
  <Tabs.Content value="error_list">
    <ErrorListTab></ErrorListTab>
  </Tabs.Content>
  <Tabs.Content value="wait_solve_error">待处理错误</Tabs.Content>
</Tabs.Root>
