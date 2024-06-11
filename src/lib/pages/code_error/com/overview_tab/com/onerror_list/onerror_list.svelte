<script lang="ts">
  import { ScrollArea } from "$lib/components/ui/scroll-area/index";
  import { Separator } from "$lib/components/ui/separator/index";

  const tags = Array.from({ length: 50 }).map(
    (_, i, a) => `v1.2.0-beta.${a.length - i}`
  );
</script>

<h4 class="mb-4 text-sm font-medium leading-none">最新错误</h4>
<ScrollArea class="h-72 rounded-md border">
  <div class="p-4">
    {#each tags as tag}
      <div class="text-sm">
        {tag}
      </div>
      <Separator class="my-2" />
    {/each}
  </div>
</ScrollArea>
