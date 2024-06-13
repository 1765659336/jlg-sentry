<script lang="ts">
  import * as Table from "$lib/components/ui/table/index";
  import lottie from "lottie-web";
  import { tick } from "svelte";
  import earth_rotates_loading from "$lib/assets/lotties/earth_rotates_loading.json";
  import Pagination from "$lib/components/pagination/pagination.svelte";
  import Button from "$lib/components/ui/button/button.svelte";
  import promise_error from "$lib/assets/lotties/promise_error.json";
  import * as Alert from "$lib/components/ui/alert";
  import WarningAlt from "carbon-icons-svelte/lib/WarningAlt.svelte";
  import Reset from "carbon-icons-svelte/lib/Reset.svelte";
  import axios from "axios";

  let loading: Promise<
    {
      invoice: string;
      paymentStatus: string;
      totalAmount: string;
      paymentMethod: string;
    }[]
  >;

  const lottie_loading_animation = () => {
    lottie.loadAnimation({
      container: lottie_loading_container,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: earth_rotates_loading,
    });
  };

  const lottie_error_animation = () => {
    lottie.loadAnimation({
      container: lottie_error_container,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: promise_error,
    });
  };

  const init_data = async () => {
    axios
      .get(
        "https://silkroad.csdn.net/api/v2/assemble/list/channel/search_hot_word?new_hot_flag=1&channel_name=pc_hot_word&size=20&platform=pc&imei=10_36625067890-1718181865999-826356"
      )
      .then((res) => {
        console.log(res);
      });
    loading = new Promise((resolve, reject) => {
      setTimeout(async () => {
        reject("接口请求失败");
        // resolve([
        //   {
        //     invoice: "INV001",
        //     paymentStatus: "Paid",
        //     totalAmount: "$250.00",
        //     paymentMethod: "Credit Card",
        //   },
        //   {
        //     invoice: "INV002",
        //     paymentStatus: "Pending",
        //     totalAmount: "$150.00",
        //     paymentMethod: "PayPal",
        //   },
        //   {
        //     invoice: "INV003",
        //     paymentStatus: "Unpaid",
        //     totalAmount: "$350.00",
        //     paymentMethod: "Bank Transfer",
        //   },
        //   {
        //     invoice: "INV004",
        //     paymentStatus: "Paid",
        //     totalAmount: "$450.00",
        //     paymentMethod: "Credit Card",
        //   },
        //   {
        //     invoice: "INV005",
        //     paymentStatus: "Paid",
        //     totalAmount: "$550.00",
        //     paymentMethod: "PayPal",
        //   },
        //   {
        //     invoice: "INV006",
        //     paymentStatus: "Pending",
        //     totalAmount: "$200.00",
        //     paymentMethod: "Bank Transfer",
        //   },
        //   {
        //     invoice: "INV007",
        //     paymentStatus: "Unpaid",
        //     totalAmount: "$300.00",
        //     paymentMethod: "Credit Card",
        //   },
        // ]);
        await tick();
        lottie_error_animation();
      }, 5000);
    });
    await tick();
    lottie_loading_animation();
  };

  init_data();

  let lottie_loading_container: HTMLElement;

  let lottie_error_container: HTMLElement;
</script>

{#await loading}
  <div class="h-[500px]" bind:this={lottie_loading_container}></div>
{:then value}
  <Table.Root>
    <Table.Header>
      <Table.Row>
        <Table.Head class="w-[100px]">Invoice</Table.Head>
        <Table.Head>Status</Table.Head>
        <Table.Head>Method</Table.Head>
        <Table.Head class="text-right">Amount</Table.Head>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {#each [...value, ...value] as invoice, i (i)}
        <Table.Row>
          <Table.Cell class="font-medium">{invoice.invoice}</Table.Cell>
          <Table.Cell>{invoice.paymentStatus}</Table.Cell>
          <Table.Cell>{invoice.paymentMethod}</Table.Cell>
          <Table.Cell class="text-right">{invoice.totalAmount}</Table.Cell>
        </Table.Row>
      {/each}
    </Table.Body>
    <Table.Footer></Table.Footer>
  </Table.Root>
  <Pagination></Pagination>
{:catch error}
  <Alert.Root variant="destructive">
    <WarningAlt class="h-4 w-4" />
    <Alert.Title>Error</Alert.Title>
    <Alert.Description>{error}</Alert.Description>
    <Button on:click={init_data} variant="ghost"><Reset></Reset>Refresh</Button>
  </Alert.Root>
  <div class="h-[500px]" bind:this={lottie_error_container}></div>
{/await}
