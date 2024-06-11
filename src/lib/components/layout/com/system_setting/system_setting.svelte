<script lang="ts">
  import SettingsCheck from "carbon-icons-svelte/lib/SettingsCheck.svelte";
  import * as Sheet from "$lib/components/ui/sheet/index";
  import { Button } from "$lib/components/ui/button/index";
  import { Toggle } from "$lib/components/ui/toggle/index";
  import PanHorizontal from "carbon-icons-svelte/lib/PanHorizontal.svelte";
  import ContainerImagePushPull from "carbon-icons-svelte/lib/ContainerImagePushPull.svelte";
  import {
    systemStore,
    type I_systemStoreState,
  } from "$lib/stores/system_store";
  import ChangeTheme from "$lib/components/layout/com/change_theme/change_theme.svelte";

  let screenBlank: boolean;

  systemStore.subscribe((value: I_systemStoreState) => {
    screenBlank = value.screenBlank;
  });

  const stretchClick = () =>
    systemStore.update((value: I_systemStoreState) => {
      value.screenBlank = !value.screenBlank;
      return value;
    });
</script>

<div class="mx-2">
  <Sheet.Root>
    <Sheet.Trigger asChild let:builder>
      <Button builders={[builder]} variant="outline" size="icon">
        <SettingsCheck />
      </Button>
    </Sheet.Trigger>
    <Sheet.Content side="right">
      <Sheet.Header>
        <Sheet.Title>Edit System Setting</Sheet.Title>
        <Sheet.Description>
          Modify some global configurations of the system
        </Sheet.Description>
      </Sheet.Header>
      <div class="grid gap-4 py-4">
        <h2>Stretch</h2>
        <Button variant="outline" on:click={stretchClick}>
          {#if screenBlank}
            <PanHorizontal class="h-4 w-4" />
          {:else}
            <ContainerImagePushPull />
          {/if}
        </Button>
        <h2>Theme</h2>
        <ChangeTheme></ChangeTheme>
      </div>
      <Sheet.Footer>
        <Sheet.Close asChild let:builder>
          <Button builders={[builder]} type="submit">Close</Button>
        </Sheet.Close>
      </Sheet.Footer>
    </Sheet.Content>
  </Sheet.Root>
</div>

<style lang="scss">
  .stretchSelect {
    background-color: red;
  }
</style>
