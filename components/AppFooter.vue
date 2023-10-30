<template lang="pug">
footer(class="footer__wrapper")
  div(class="footer__container")
    div(class="footer__content")
      .blog-description
        div(class="blog-description__logo logo__container")
          logo(class="logo__icon", filled)
        p(class="blog-description__info font-body-2") Cтатьи о дизайне и искусстве, которые исследуют творческие вдохновения и актуальные тенденции, раскрывая мир эстетики и креативности
      div(class="blog-contacts__container")
        p(class="blog-contacts__email") email
        p testblogsupport@gmail.com
        div(class="blog-contacts__logos-container")
          facebook(filled)
          instagram(filled)
          telegram(filled)
          vk(filled)
    .subscribe
      p(class="description__text") Подпишись на рассылку
      div(class="description__subscribe-container")
        input(class="description__input blog-input", type="email", placeholder="email")
        button(class="description__btn btn") Подписаться
</template>

<script setup lang="ts">
import logo from "@/assets/icons/logo.svg";
import facebook from "@/assets/icons/facebook.svg";
import instagram from "assets/icons/instagram.svg";
import telegram from "assets/icons/telegram.svg";
import vk from "@/assets/icons/vk.svg";
</script>

<style lang="scss">
@import "assets/scss/variables";

.footer__wrapper {
  width: 100vw;
  max-width: 100%;
  border-top: 1px solid var(--primary-black);
  margin-top: 200px;

  .footer__container {
    max-width: $page-width;
    margin: 0 auto 0;
    padding: 50px var(--primary-padding) 0;
    background: var(--primary-background);
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 332px;
    gap: 10px;
  }
}

.footer__content {
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 20px;
  @media (max-width: $md-size) {
    margin-right: 20px;
    flex-direction: column;
  }
}

.blog-description {
  max-width: 426px;
  height: 112px;

  .blog-description__info {
    color: var(--text-gray);
    margin-top: 20px;
  }
}

.blog-contacts__container {
  width: 234px;
  margin-right: 78px;
  @media (max-width: $md-size) {
    margin-right: 20px;
  }

  .blog-contacts__email {
    color: var(--text-gray);
  }

  .blog-contacts__logos-container {
    width: 180px;
    display: flex;
    gap: 20px;
    margin-top: 24px;

    svg {
      width: 30px;
      height: 30px;
    }

  }
}
</style>
