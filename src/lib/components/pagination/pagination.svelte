<script lang="ts">
  import ChevronLeft from "carbon-icons-svelte/lib/ChevronLeft.svelte";
  import ChevronRight from "carbon-icons-svelte/lib/ChevronRight.svelte";
  import * as Pagination from "$lib/components/ui/pagination/index.js";
  import Button from "$lib/components/ui/button/button.svelte";
  import Renew from "carbon-icons-svelte/lib/Renew.svelte";
  let count = 20;
</script>

<Pagination.Root
  {count}
  perPage={10}
  siblingCount={1}
  let:pages
  let:currentPage
>
  <Pagination.Content>
    <Pagination.Item>
      <Pagination.PrevButton>
        <ChevronLeft class="h-4 w-4" />
        <span class="hidden sm:block">Previous</span>
      </Pagination.PrevButton>
    </Pagination.Item>
    {#each pages as page (page.key)}
      {#if page.type === "ellipsis"}
        <Pagination.Item>
          <Pagination.Ellipsis />
        </Pagination.Item>
      {:else}
        <Pagination.Item>
          <Pagination.Link {page} isActive={currentPage === page.value}>
            {page.value}
          </Pagination.Link>
        </Pagination.Item>
      {/if}
    {/each}
    <Pagination.Item>
      <Pagination.NextButton>
        <span class="hidden sm:block">Next</span>
        <ChevronRight class="h-4 w-4" />
      </Pagination.NextButton>
    </Pagination.Item>
    <Button variant="outline" size="icon">
      <Renew class="h-4 w-4" />
    </Button>
  </Pagination.Content>
</Pagination.Root>
