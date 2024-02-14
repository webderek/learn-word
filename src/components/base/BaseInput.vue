<template>
  <input class="input" />
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.input {
  background-color: #3d3d3d;
  color: var(--color-white);
  border-radius: 20px;
  padding: 10px 20px;
  border: none;
}
</style>
