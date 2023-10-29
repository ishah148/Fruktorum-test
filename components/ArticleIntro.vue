<template>
  <div class="article__wrapper">
    <img class="article__image" :src="props.data?.image" alt="" />
    <div class="article__description-container">
      <h1 class="short-description">{{ props.data.title }}</h1>
      <div class="info font-body-2">
        <div class="info__count-container">
          <TimeIcon filled />
          {{ props.data.views_count }} прочитали статью
        </div>
        <div class="info__time-container">
          <WatchIcon filled />
          {{ props.data.reading_time }} мин время чтения
        </div>
      </div>
      <div class="description">
        {{ props.data.short_description }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ArticleIntroData } from "~/types";
import WatchIcon from "assets/icons/watch-icon.svg";
import TimeIcon from "assets/icons/time-icon.svg";
const props = defineProps<{ data: ArticleIntroData }>();
</script>

<style lang="scss">
@import "assets/scss/variables";

.article__wrapper {
  padding: 0 var(--primary-padding);
  display: flex;
  gap: 30px;
  margin-bottom: 100px;

  @media (max-width: $xl-size) {
    flex-direction: column;
  }
}

.article__image {
  width: 100%;
  height: 100%;
  border-top-right-radius: 200px;
}

.short-description {
  margin-bottom: 30px;
}

.info {
  letter-spacing: 0em;
  margin-bottom: 50px;

  .info__time-container {
  }
}

.description {
  font-size: 18px;
  line-height: 26px;
}
</style>
