<script lang="ts">
import { defineComponent } from "vue";
import { useAppStateStore } from "@/store/appState.store";
import { storeToRefs } from "pinia";
import { useRoute } from "vue-router";
import { ROUTES } from "@/constants/routes.constants";
import Menu from "@/components/base/Menu.vue";
import MenuBtn from "@/components/base/MenuBtn.vue";

export default defineComponent({
  name: "BaseLayout",
  components: { MenuBtn, Menu },
  setup() {
    const appStore = useAppStateStore();
    const { isMobile, isVisibleMenu } = storeToRefs(appStore);
    return {
      isMobile,
      isVisibleMenu,
      ROUTES,
    };
  },
});
</script>

<template>
  <div class="base--layout flex direction-column flex-grow-1">
    <Menu v-if="isVisibleMenu"></Menu>
    <MenuBtn></MenuBtn>
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.base--layout {
  position: relative;
}
</style>
