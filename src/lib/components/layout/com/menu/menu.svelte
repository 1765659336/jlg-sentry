<script lang="ts">
  import * as Menubar from "$lib/components/ui/menubar";
  import LogoSvelte from "carbon-icons-svelte/lib/LogoSvelte.svelte";
  import IbmCloudBareMetalServer from "carbon-icons-svelte/lib/IbmCloudBareMetalServer.svelte";
  import WeatherStation from "carbon-icons-svelte/lib/WeatherStation.svelte";
  import Analytics from "carbon-icons-svelte/lib/Analytics.svelte";
  import PromptSession from "carbon-icons-svelte/lib/PromptSession.svelte";
  import { navigate } from "svelte-routing";

  const navigatorPage = (path: string) => {
    navigate(path);
  };
</script>

<Menubar.Root>
  <Menubar.Menu>
    <Menubar.Trigger on:click={() => navigatorPage("/home")}
      ><LogoSvelte></LogoSvelte></Menubar.Trigger
    >
  </Menubar.Menu>
  <Menubar.Menu>
    <Menubar.Trigger
      ><IbmCloudBareMetalServer></IbmCloudBareMetalServer>概览</Menubar.Trigger
    >
    <Menubar.Content>
      <Menubar.Item on:click={() => navigatorPage("/test")}>
        流量数据
        <Menubar.Shortcut>⌘T</Menubar.Shortcut>
      </Menubar.Item>
      <Menubar.Separator />
      <Menubar.Item on:click={() => navigatorPage("/test")}
        >健康状况</Menubar.Item
      >
      <Menubar.Separator />
      <Menubar.Item on:click={() => navigatorPage("/test")}
        >性能预览</Menubar.Item
      >
      <Menubar.Separator />
      <Menubar.Item on:click={() => navigatorPage("/test")}
        >地狱分析</Menubar.Item
      >
    </Menubar.Content>
  </Menubar.Menu>
  <Menubar.Menu>
    <Menubar.Trigger><WeatherStation></WeatherStation>错误</Menubar.Trigger>
    <Menubar.Content>
      <Menubar.Item on:click={() => navigatorPage("/test")}
        >代码错误</Menubar.Item
      >
      <Menubar.Separator />
      <Menubar.Item on:click={() => navigatorPage("/test")}
        >接口错误</Menubar.Item
      >
      <Menubar.Separator />
      <Menubar.Item on:click={() => navigatorPage("/test")}
        >静态资源错误</Menubar.Item
      >
      <Menubar.Separator />
    </Menubar.Content>
  </Menubar.Menu>
  <Menubar.Menu>
    <Menubar.Trigger><Analytics></Analytics>性能</Menubar.Trigger>
    <Menubar.Content>
      <Menubar.Item on:click={() => navigatorPage("/test")}
        >页面性能</Menubar.Item
      >
      <Menubar.Separator />
      <Menubar.Item on:click={() => navigatorPage("/test")}
        >接口性能</Menubar.Item
      >
    </Menubar.Content>
  </Menubar.Menu>
  <Menubar.Menu>
    <Menubar.Trigger><PromptSession></PromptSession>配置</Menubar.Trigger>
    <Menubar.Content>
      <Menubar.Item on:click={() => navigatorPage("/test")}
        >警报配置</Menubar.Item
      >
    </Menubar.Content>
  </Menubar.Menu>
</Menubar.Root>
