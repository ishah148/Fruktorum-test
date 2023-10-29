<template>
  <div class="slider__wrapper">
    <Swiper
      navigation
      :modules="[SwiperNavigation, SwiperEffectCreative]"
      :slides-per-view="1"
      :loop="true"
      :effect="'creative'"
      :autoplay="{
        delay: 8000,
        disableOnInteraction: true,
      }"
      :creative-effect="{
        prev: {
          shadow: false,
          translate: ['-100%', 0, -1],
        },
        next: {
          translate: ['100%', 0, 0],
        },
      }"
    >
      <SwiperSlide v-for="(slide, id) in props.data" :key="id + Math.random()">
        <img :src="slide" alt="" />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  data: string[];
}>();
</script>

<style lang="scss">
.slider__wrapper {
  margin-bottom: 100px;
}

.swiper-cards .swiper-slide {
  border-radius: 6px;
  border: 1px solid black;
}

.swiper-button-prev,
.swiper-button-next {
  width: 60px;
  height: 60px;
  background: var(--primary-black);

  &:hover {
    background: var(--blue-font-color);
  }
  &::after {
    font-size: 12px;
    font-weight: 800;
    color: #d9d9d9;
  }
}

.swiper-wrapper {
  img {
    width: 100%;
    object-fit: cover;
    padding: 0 110px;
    @media (max-width: $md-size) {
      padding: 0;
    }
  }
}
</style>
