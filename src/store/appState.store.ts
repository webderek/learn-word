import { defineStore } from "pinia";
import { ref } from "vue";

export const useAppStateStore = defineStore("appState", () => {
  const isVisibleMenu = ref(false);
  const setIsVisibleMenu = (value: boolean) => (isVisibleMenu.value = value);

  const isMobile = ref(false);
  const setIsMobile = (value: boolean) => (isMobile.value = value);

  return {
    isVisibleMenu,
    isMobile,
    setIsMobile,
    setIsVisibleMenu,
  };
});
