<template>
  <div class="flex select fullFlex direction-column align-center">
    <h1 class="select__title">Select the words you want to learn:</h1>
    <div class="select__search flex align-center">
      <p class="select__search--title">Search</p>
      <BaseInput />
    </div>
    <div class="select__wrapper__btn flex" ref="el">
      <slot></slot>
    </div>
    <BaseButton class="btn__accept" :text="'Accept'" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import BaseInput from "@/components/base/BaseInput.vue";
import BaseButton from "@/components/base/BaseButton.vue";
import { useInfiniteScroll } from "@vueuse/core";

export default defineComponent({
  components: { BaseButton, BaseInput },
  emits: ["bottomPage"],
  props: {
    isThisLastPage: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, context) {
    const el = ref<HTMLElement | null>(null);

    useInfiniteScroll(
      el,
      () => {
        context.emit("bottomPage");
      },
      {
        distance: 100,
        direction: "bottom",
        interval: 300,
        canLoadMore: () => !props.isThisLastPage,
      }
    );

    return { useInfiniteScroll, el };
  },
});
</script>

<style lang="scss" scoped>
.select {
  background-color: #2a2a2a;
  border-radius: 20px;
  height: calc(100vh - 60px);
  padding: 0 20px;
  &__search {
    padding-bottom: 20px;
    &--title {
      font-size: 20px;
      padding-right: 20px;
    }
  }
  &__title {
    font-size: 24px;
    padding: 40px 0;
  }
  &__wrapper__btn {
    width: 100%;
    flex-wrap: wrap;
    height: min-content;
    overflow: scroll;
    &::-webkit-scrollbar {
      width: 5px;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
      box-shadow: inset 0 0 5px #dddddd;
      border-top: 22px solid transparent;
      border-bottom: 2px solid transparent;
      border-radius: 2px;
    }

    &::-webkit-scrollbar-thumb {
      background: #9e9e9e;
      background: linear-gradient(
        89.99deg,
        #fcfff9 9.64%,
        #e9eef7 44.04%,
        #d5e7f0 61.4%,
        #c1d8ef 95.53%
      );
      border-radius: 2px;
    }
    ::v-deep(button) {
      flex: 1;
      @media screen and (min-width: 768px) {
        &:hover {
          background-color: #737373;
        }
      }
    }
  }

  .btn__accept {
    background-color: #151515;
    &:hover {
      background-color: #1e1e1e;
    }
  }
}
</style>
