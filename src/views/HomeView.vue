<template>
  <div class="home flex flex-grow-1 align-center">
    <SelectWords @bottomPage="onLoadWords" :isThisLastPage="isThisLastPage">
      <BaseButton
        @click="selectWords(+word.id)"
        :class="{ selected: selectedWords.includes(+word.id) }"
        v-for="word of words"
        :key="word.id"
        :text="word.word"
      >
      </BaseButton>
    </SelectWords>
  </div>
</template>

<script lang="ts">
import { vInfiniteScroll } from "@vueuse/components/index";
import { defineComponent, ref } from "vue";
import BaseButton from "@/components/base/BaseButton.vue";
import SelectWords from "@/components/base/SelectWords.vue";
import { getWord } from "@/service/api/api.instance";

export default defineComponent({
  name: "HomeView",
  components: { BaseButton, SelectWords },
  directives: { vInfiniteScroll },
  setup() {
    const selectedWords = ref<number[]>([]);
    const currentIndex = ref<number | null>(null);
    const words = ref<any>([]);
    const page = ref(1);
    const pageLength = ref(30);
    const isThisLastPage = ref(false);
    const selectWords = (id: number) => {
      const wordIdx = selectedWords.value.findIndex(
        (selectedId) => selectedId === id
      );

      if (wordIdx !== -1) {
        selectedWords.value.splice(wordIdx, 1);
        return;
      }

      selectedWords.value.push(id);
    };

    getWord(page.value, pageLength.value)
      .then((data) => {
        if (!data.words.length) {
          isThisLastPage.value = true;
        }
        const lastPage = data.meta.last_page;
        words.value.push(...data.words);
        isThisLastPage.value = page.value >= lastPage;
        page.value++;
      })
      .catch((e) => {
        console.log(e);
      });
    const onLoadWords = () => {
      getWord(page.value, pageLength.value)
        .then((data) => {
          const lastPage = data.meta.last_page;
          words.value.push(...data.words);
          isThisLastPage.value = page.value >= lastPage;
          page.value++;
        })
        .catch((e) => {
          console.log(e);
        });
    };

    return {
      words,
      selectedWords,
      currentIndex,
      isThisLastPage,
      selectWords,
      getWord,
      onLoadWords,
    };
  },
});
</script>

<style lang="scss" scoped>
.selected {
  background-color: #9e9e9e;
}
.home {
  padding: 5px;
  background-color: #212121;
  &__random {
    &--title {
      width: calc(100% - 20px);
      max-width: 320px;
      font-size: 20px;
      font-weight: bold;
      color: var(--color-white);
    }
    &--word {
      width: 100%;
    }
  }
}
</style>
