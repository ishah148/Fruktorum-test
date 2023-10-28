<template>
  <footer class="footer__wrapper">
    <div class="footer__content">
      <div class="blog-description__container">
        <div class="blog-description__logo logo__container">
          <logo class="logo__icon" filled />
        </div>
        <p class="blog-description__info">
          Cтатьи о дизайне и искусстве, которые исследуют творческие вдохновения
          и актуальные тенденции, раскрывая мир эстетики и креативности
        </p>
      </div>
      <div class="blog-contacts__container">
        <p class="blog-contacts__email">email</p>
        <p>testblogsupport@gmail.com</p>
        <div class="blog-contacts__logos-container">
          <facebook filled />
          <instagram filled />
          <telegram filled />
          <vk filled />
        </div>
      </div>
    </div>
    <div class="footer__description">
      <p class="description__text">Подпишись на рассылку</p>
      <div class="description__subscribe-container">
        <input
          class="description__input blog-input"
          type="email"
          placeholder="email"
        />
        <button class="description__btn btn">Подписаться</button>
      </div>
    </div>
  </footer>
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
  padding: 50px var(--primary-padding) 0;
  background: var(--primary-background);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-top: 1px solid var(--primary-black);
  min-height: 332px;
  gap: 10px;
}
.footer__content {
  display: flex;
  width: 100%;
  justify-content: space-between;

  @media (max-width: $tablet-size) {
    margin-right: 20px;
    flex-direction: column;
  }
}

.blog-description__container {
  width: 426px;
  height: 112px;
  .blog-description__logo {
    //
  }
  .blog-description__info {
    font-size: 14px;
    line-height: 20px;
    color: var(--text-gray);
    margin-top: 20px;
  }
}
.blog-contacts__container {
  width: 234px;
  margin-right: 78px;
  @media (max-width: $tablet-size) {
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

.footer__description {
  height: 100px;
  background: var(--primary-black);
  display: flex;
  justify-content: space-between;
  padding: 0 30px;
  @media (max-width: $tablet-size) {
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

    @media (max-width: $tablet-size) {
      // todo move to var
      justify-content: center;
    }

    .description__input {
      align-self: center;
      max-width: 223px;
      height: 46px;
      //margin-right: 37px;
      flex: 1;
    }
    .description__btn {
      font-size: 18px;
      flex: 1;
    }
  }
}
</style>
