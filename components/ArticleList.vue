<template>
  <div class="article-list">
    <ArticleCard
      v-for="article in body"
      :key="article.link"
      :image="article.image"
      :title="article.title"
      :link="article.link"
    />
  </div>
</template>

<script setup lang="ts">
import type { ArticlesPreviewInfo } from "~";

defineProps<{
  body: ArticlesPreviewInfo[];
}>();
</script>

<style scoped lang="scss">
.article-list {
  display: grid;
  grid-auto-flow: row dense;
  grid-template-columns: repeat(auto-fill, minmax(100px, 427px));
  justify-content: center;
  gap: 30px;
  margin-bottom: 40px;
}
</style>
