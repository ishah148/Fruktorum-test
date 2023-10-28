<template>
  <div class="article-card">
    <div style="position: relative">
      <img class="img" :src="props.image" alt="img" />
      <Loader v-if="isLoading" />
    </div>
    <p class="article-card__description">
      {{ props.title }}
    </p>
    <NuxtLink :to="props.link">
      <button class="btn-dark">Читать</button>
    </NuxtLink>
  </div>
</template>
<script setup lang="ts">
import { useImage } from "@vueuse/core";

import Loader from "~/components/ui/Loader.vue";

const props = defineProps<{ title: string; link: string; image: string }>();
const { isLoading } = useImage({ src: props.image });
</script>
<style lang="scss" scoped>
.article-card {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 476px;
  gap: 20px;

  .img {
    width: 100%;
    height: 320px;
    object-fit: cover;
  }

  .article-card__description {
    font-size: 22px;
    font-weight: 800;
    line-height: 30px;
    letter-spacing: 0em;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
}
</style>
