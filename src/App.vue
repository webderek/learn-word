<template>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component v-if="layout" :is="layout">
        <component :is="Component" />
      </component>
      <component v-else :is="Component" />
    </transition>
  </router-view>
</template>

<script lang="ts">
import { Component, computed, defineComponent } from "vue";
import { useAppStateStore } from "@/store/appState.store";
import { useRoute } from "vue-router";
import BaseLayout from "@/layouts/BaseLayout.vue";

export default defineComponent({
  name: "App",
  components: {
    BaseLayout,
  },
  setup() {
    const appStateStore = useAppStateStore();
    const route = useRoute();

    const mediaQuery = window.matchMedia("(max-width: 768px)");
    appStateStore.setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener("change", (e: MediaQueryListEvent) =>
      appStateStore.setIsMobile(e.matches)
    );

    const layouts: Record<string, Component> = {
      base: BaseLayout,
    };
    const layout = computed<Component | null>(() =>
      route.meta.layout ? layouts[route.meta.layout] : null
    );
    return {
      layout,
      route,
    };
  },
});
</script>

<style lang="scss">
@import "assets/styles/main";
</style>
