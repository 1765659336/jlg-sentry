<script lang="ts">
  import { Router } from "svelte-routing";
  import Menu from "$lib/components/layout/com/menu/menu.svelte";
  import Notification from "carbon-icons-svelte/lib/Notification.svelte";
  import * as Avatar from "$lib/components/ui/avatar";
  import { ModeWatcher } from "mode-watcher";
  import SearchPage from "$lib/components/layout/com/search_page/search_page.svelte";
  import ChangeTheme from "$lib/components/layout/com/change_theme/change_theme.svelte";
  import RouteList from "$lib/components/layout/com/route_list/route_list.svelte";
  import SystemSetting from "$lib/components/layout/com/system_setting/system_setting.svelte";

  import {
    systemStore,
    type I_systemStoreState,
  } from "$lib/stores/system_store";

  let screenBlank: boolean;

  systemStore.subscribe((value: I_systemStoreState) => {
    screenBlank = value.screenBlank;
  });

  export const url = "";
</script>

<Router {url}>
  <div class="px-3">
    <header class="flex justify-between items-center py-1">
      <div class="flex-1">
        <Menu></Menu>
      </div>
      <div class="flex justify-between items-center px-3">
        <SearchPage></SearchPage>
        <ChangeTheme></ChangeTheme>
        <SystemSetting></SystemSetting>
        <Notification class="mx-2 cursor-pointer" />
        <Avatar.Root class="mx-2">
          <Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
          <Avatar.Fallback>...</Avatar.Fallback>
        </Avatar.Root>
      </div>
    </header>
    <main
      class={`rounded-md shadow bg-gray-100 ${screenBlank ? "" : "max-w-4xl mx-auto"}`}
    >
      <RouteList></RouteList>
    </main>
  </div>
</Router>
<ModeWatcher />

<style lang="scss">
  main {
    min-height: calc(100vh - 48px);
  }
</style>
