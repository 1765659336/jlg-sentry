<script>
  import { Route } from "svelte-routing";
  import Home from "$lib/pages/home/home.svelte";
  import Test from "$lib/pages/test/test.svelte";
  import NotFound from "$lib/pages/not_found/not_found.svelte";
</script>

<Route path="/test" component={Test} />
<Route path="/home" component={Home} />
<Route path="/"><Home /></Route>
<Route component={NotFound} />
