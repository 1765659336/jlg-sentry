<script lang="ts">
  import * as Tabs from "$lib/components/ui/tabs/index";
  import { Button } from "$lib/components/ui/button/index";
  import { Input } from "$lib/components/ui/input/index";
</script>

<Tabs.Root value="overview">
  <Tabs.List class="grid w-full grid-cols-3">
    <Tabs.Trigger value="overview">概览</Tabs.Trigger>
    <Tabs.Trigger value="error_list">错误列表</Tabs.Trigger>
    <Tabs.Trigger value="wait-solve-error">待处理错误</Tabs.Trigger>
  </Tabs.List>
  <Tabs.Content value="overview">
    <Card.Root class="w-[350px]">
      <Card.Header>
        <Card.Title>Create project</Card.Title>
        <Card.Description
          >Deploy your new project in one-click.</Card.Description
        >
      </Card.Header>
      <Card.Content>
        <form>
          <div class="grid w-full items-center gap-4">
            <div class="flex flex-col space-y-1.5">
              <Label for="name">Name</Label>
              <Input id="name" placeholder="Name of your project" />
            </div>
            <div class="flex flex-col space-y-1.5">
              <Label for="framework">Framework</Label>
              <Select.Root>
                <Select.Trigger id="framework">
                  <Select.Value placeholder="Select" />
                </Select.Trigger>
                <Select.Content>
                  {#each frameworks as framework}
                    <Select.Item value={framework.value} label={framework.label}
                      >{framework.label}</Select.Item
                    >
                  {/each}
                </Select.Content>
              </Select.Root>
            </div>
          </div>
        </form>
      </Card.Content>
      <Card.Footer class="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </Card.Footer>
    </Card.Root>
  </Tabs.Content>
  <Tabs.Content value="error_list">错误列表</Tabs.Content>
  <Tabs.Content value="wait-solve-error">待处理错误</Tabs.Content>
</Tabs.Root>
