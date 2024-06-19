import { writable } from "svelte/store";

export declare interface I_systemStoreState {
  screenBlank: boolean;
}

export const systemStore = writable({
  screenBlank: localStorage.getItem("screenBlank")
    ? Boolean(localStorage.getItem("screenBlank"))
    : true,
});
