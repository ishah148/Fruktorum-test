<template lang="pug">
div(class="subscribe__wrapper")
  .subscribe
    p(class="description__text") Подпишись на рассылку
    div(class="description__subscribe-container")
      input(class="description__input blog-input", type="email", placeholder="email")
      button(class="description__btn btn") Подписаться
</template>
<script setup></script>
<style lang="scss">
.subscribe__wrapper {
  padding: 0 var(--primary-padding);
  margin-bottom: 100px;
}
</style>
