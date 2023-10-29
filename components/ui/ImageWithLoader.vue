<template lang="pug">
html
  body
    div(style="position: relative", :="$attrs")
      img.img(:src="props.src", alt="img")
      Loader(v-if="isLoading")
</template>

<script setup lang="ts">
import { useImage } from "@vueuse/core/index";
import Loader from "~/components/ui/Loader.vue";

const props = defineProps<{
  src: string;
}>();
const { isLoading } = useImage({ src: props.src });
</script>

<style scoped lang="scss">
.img {
  width: 100%;
  height: 320px;
  object-fit: cover;
}
</style>
