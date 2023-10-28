<template>
  <div style="position: relative" :="$attrs">
    <img class="img" :src="props.src" alt="img" />
    <Loader v-if="isLoading" />
  </div>
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
