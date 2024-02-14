<template>
  <div class="base__card flex flexCenter">
    <div class="base__card--word flex flexCenter">Against</div>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "WordCard",
});
</script>

<style lang="scss" scoped>
.base__card {
  width: calc(100% - 20px);
  height: calc(100vh - 80px);
  background-color: #2a2a2a;
  border-radius: 20px;
  &--word {
    width: 100%;
    height: 50%;
    font-size: 25px;
    font-weight: bold;
  }
}
</style>
