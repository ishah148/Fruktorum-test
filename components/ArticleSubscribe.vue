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
.subscribe {
  height: 100px;
  background: var(--primary-black);
  display: flex;
  justify-content: space-between;
  padding: 0 30px;
  @media (max-width: $md-size) {
    padding: 0 10px;
    flex-direction: column;
  }

  .description__text {
    color: var(--light-font-color);
    font-weight: 800;
    font-size: 22px;
    align-self: center;
    max-width: 320px;
    min-width: 156px;
  }

  .description__subscribe-container {
    align-self: center;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-grow: 1;
    gap: 37px;
    width: 100%;

    @media (max-width: $md-size) {
      justify-content: center;
    }

    .description__input {
      align-self: center;
      max-width: 223px;
      height: 46px;
      flex: 1;
    }

    .description__btn {
      flex: 1;
    }
  }
}
</style>
