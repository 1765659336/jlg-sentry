<script lang="ts">
  import { ScrollArea } from "$lib/components/ui/scroll-area/index";
  import { Separator } from "$lib/components/ui/separator/index";

  export let list;
</script>

<ScrollArea class="h-72 rounded-md border">
  <div class="p-4">
    {#each list as item}
      <slot {item}>
        {item}
      </slot>
      <slot name="item_suffix">
        <Separator class="my-2" />
      </slot>
    {/each}
  </div>
</ScrollArea>
