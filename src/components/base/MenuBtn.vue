<template>
  <button class="menu__btn" @click="isVisibleMenu = !isVisibleMenu"></button>
  <!--  <div class="menu__btn"></div>-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useAppStateStore } from "@/store/appState.store";
import { storeToRefs } from "pinia";

export default defineComponent({
  name: "MenuBtn",
  setup() {
    const appStore = useAppStateStore();
    const { isVisibleMenu } = storeToRefs(appStore);
    return { isVisibleMenu };
  },
});
</script>

<style lang="scss" scoped>
.menu__btn {
  padding: 0;
  z-index: 500;
  position: absolute;
  width: 20px;
  height: 20px;
  right: 10px;
  top: 10px;
  background-color: #141414;
  border: none;
  border-radius: 100%;
}
</style>
