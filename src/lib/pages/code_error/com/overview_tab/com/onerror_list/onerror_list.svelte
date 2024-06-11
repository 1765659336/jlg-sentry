<script lang="ts">
  import ScrollList from "$lib/components/scroll_list/scroll_list.svelte";
  import { Separator } from "$lib/components/ui/separator/index";
  const tags = Array.from({ length: 50 }).map(
    (_, i, a) => `v1.2.0-beta.${a.length - i}`
  );
</script>

<h4 class="mb-4 text-sm font-medium leading-none">最新错误</h4>

<ScrollList list={tags}>
  <div slot="default" let:item>{item}+默认插槽</div>
  <div slot="item_suffix">
    <div>suffix插槽</div>
    <Separator class="my-2" />
  </div>
</ScrollList>
