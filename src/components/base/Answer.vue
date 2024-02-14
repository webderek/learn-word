<template>
  <div class="answer flex">
    <div class="answer__el flex flexCenter">1</div>
    <div class="answer__el flex flexCenter">2</div>
    <div class="answer__el flex flexCenter">3</div>
    <div class="answer__el flex flexCenter">4</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AnswerComponent",
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.answer {
  width: 100%;
  height: 50%;
  flex-wrap: wrap;
  &__el {
    width: 50%;
    box-sizing: border-box;
    max-width: 50%;
  }
}
</style>
