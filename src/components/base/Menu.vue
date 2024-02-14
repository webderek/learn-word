<template>
  <nav class="menu">
    <ul class="menu__group flex direction-column flexCenter">
      <li class="menu__group--el">New game</li>
      <li class="menu__group--el">Setting</li>
      <li class="menu__group--el">Exit</li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "baseMenu",
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.menu {
  position: fixed;
  inset: 0;
  z-index: var(--z-index-modal);
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(27.1828px);
  display: flex;
  justify-content: center;
  align-items: center;
  &__group {
    width: 100%;
    max-width: 320px;
    padding: 20px;
    background: radial-gradient(
      113.12% 113.12% at 50.52% 50.52%,
      #292929 0%,
      #000000 100%
    );
    border: 1px solid var(--color-eerie);
    border-radius: 12px;
    &--el {
      width: calc(100% - 100px);
      text-align: center;
      background: rgba(0, 158, 243, 0.35);
      padding: 10px;
      margin: 10px;
      border-radius: 12px;
    }
  }
}
</style>
