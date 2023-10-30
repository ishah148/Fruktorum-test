<template lang="pug">
div(class="article-list__wrapper")
  h2(v-if="data?.title") {{ data.title }}
  div(class="article-list__container")
    ArticleCard(v-for="article in body", :key="article.title", :image="article.image", :title="article.title", :link="article.link")
</template>

<script setup lang="ts">
import type { ArticlesPreviewInfo } from "~/types";

const props = defineProps<{
  data: {
    body?: ArticlesPreviewInfo[];
    articles?: ArticlesPreviewInfo[];
    title?: string;
  };
}>();
const body = computed(() => props.data?.articles || props.data?.body);
</script>

<style lang="scss">
.article-list__wrapper {
  h2 {
    margin-bottom: 50px;
    margin-left: 50px;
  }
  .article-list__container {
    display: grid;
    grid-auto-flow: row dense;
    grid-template-columns: repeat(auto-fill, minmax(100px, 427px));
    justify-content: center;
    gap: 30px;
    margin-bottom: 100px;
  }
}
</style>
