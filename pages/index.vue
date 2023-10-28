<template>
  <ArticleList v-if="articlesInfo" :body="articlesInfo" />
</template>

<script setup lang="ts">
import ArticleList from "~/components/ArticleList.vue";
import type { ArticlesPreview, ArticlesPreviewInfo } from "~";
import {articlesPagePath} from "~/constants";
const articlesInfo = ref<ArticlesPreviewInfo[]>();

fetchArticles();

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
