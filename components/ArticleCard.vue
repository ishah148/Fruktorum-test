<template lang="pug">
.article-card
  div(style="position: relative")
    img.img(:src="props.image", alt="img")
  p(class="article-card__description") {{ props.title }}
  nuxt-link(:to="props.link")
    button.btn-dark Читать
</template>

<script setup lang="ts">
const props = defineProps<{ title: string; link: string; image: string }>();
</script>

<style lang="scss">
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
