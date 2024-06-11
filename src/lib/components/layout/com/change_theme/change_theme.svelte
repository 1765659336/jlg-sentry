<script>
  import WatsonHealthContourFinding from "carbon-icons-svelte/lib/WatsonHealthContourFinding.svelte";
  import MostlyCloudyNight from "carbon-icons-svelte/lib/MostlyCloudyNight.svelte";
  import { toggleMode } from "mode-watcher";
  import { Button } from "$lib/components/ui/button/index";
</script>

<Button on:click={toggleMode} variant="outline">
  <WatsonHealthContourFinding
    class="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
  />
  <MostlyCloudyNight
    class="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
  />
  <span class="sr-only">Toggle theme</span>
</Button>
