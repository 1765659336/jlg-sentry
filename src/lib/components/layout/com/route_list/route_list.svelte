<script>
  import { Route } from "svelte-routing";
  import Home from "$lib/pages/home/home.svelte";
  import Test from "$lib/pages/test/test.svelte";
  import NotFound from "$lib/pages/not_found/not_found.svelte";
  import CodeError from "$lib/pages/code_error/code_error.svelte";
</script>

<Route path="/code_error" component={CodeError} />
<Route path="/test" component={Test} />
<Route path="/home" component={Home} />
<Route path="/"><Home /></Route>
<Route component={NotFound} />
