<template lang="pug">
html
  body
    ArticleList(v-if="articlesInfo", :data=`{
    body: articlesInfo,
  }`)
</template>

<script setup lang="ts">
import type { ArticlesPreview, ArticlesPreviewInfo } from "~/types";
import { articlesPagePath } from "~/constants";

const articlesInfo = ref<ArticlesPreviewInfo[]>();

await fetchArticles();

async function fetchArticles() {
  const response = await useFetch<ArticlesPreview>(`/api/${articlesPagePath}`);
  articlesInfo.value = response?.data?.value?.body?.[0].data.articles;
}
</script>

<style lang="scss">
@import "@/assets/scss/variables";
.hero__wrapper {
  max-width: $page-width;
  height: auto;
}
</style>
