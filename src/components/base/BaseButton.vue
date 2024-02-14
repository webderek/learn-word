<template>
  <button class="btn">{{ text }}</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    text: {
      type: String,
    },
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.btn {
  padding: 15px 0;
  background-color: #3d3d3d;
  outline: none;
  border: none;
  border-radius: 10px;
  color: var(--color-white);
  width: max-content;
  margin: 20px;
  min-width: 200px;
}
</style>
