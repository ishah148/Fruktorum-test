<template>
  <div class="article__wrapper">
    <img class="article__image" :src="props.data.image" alt="" />
    <div class="article__description-container">
      <h1 class="short-description">{{ props.data.title }}</h1>
      <div class="info">
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
        Впечатляющий путь, где художническая креативность сливается с передовыми
        технологиями. Это искусство способно преобразить наше восприятие о том,
        что возможно в виртуальных мирах; как границы возможностей расширяются,
        и как велика сила человеческой фантазии, воплощенной в трехмерные
        шедевры
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
  @media (max-width: $tablet-size) {
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
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
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
