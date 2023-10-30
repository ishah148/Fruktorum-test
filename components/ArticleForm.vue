<template lang="pug">
div(class="article-form__wrapper")
  div(class="article-form__container")
    img(:src="photo", alt="img", class="article-form__image")
    div(class="article-form__form-container")
      h2(class="article-form__invite-text") Стань участником проекта
      input.blog-input(type="text", name="text", placeholder="Имя")
      input.blog-input(type="tel", name="tel", placeholder="Телефон")
      input.blog-input(type="email", name="email", placeholder="Email")
      button(class="article-form__submit-btn btn") Присоединится
</template>

<script setup lang="ts">
import photo from "assets/images/form-photo.png";
</script>

<style scoped lang="scss">
.article-form__wrapper {
  padding: 0 var(--primary-padding);
  margin-bottom: 100px;
}

.article-form__container {
  padding: calc(var(--primary-padding) + 10px);
  background: var(--primary-black);
  display: flex;
  gap: 60px;

  @media (max-width: $xl-size) {
    flex-direction: column;
  }

  .article-form__image {
  }

  .article-form__form-container {
    display: flex;
    flex-direction: column;
    gap: 25px;

    .blog-input {
      max-width: 353px;
    }
  }

  .article-form__invite-text {
    color: var(--light-font-color);
  }

  .article-form__submit-btn {
    margin-top: 50px;
  }
}
</style>
