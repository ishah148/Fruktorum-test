<template lang="pug">
div(class="article-image__wrapper")
  img(:src="props.data.src", :alt="props.data.caption")
  p(v-if="props.data.caption", class="article-image__capture font-body-2") {{ props.data.caption }}
</template>

<script setup lang="ts">
type Props = {
  src: string;
  caption: string;
};
const props = defineProps<{
  data: Props;
}>();
</script>

<style lang="scss">
@import "@/assets/scss/variables";
.article-image__wrapper {
  display: flex;
  flex-direction: column;
  padding: 0 var(--primary-padding);
  margin-bottom: 100px;
  img {
    width: 100%;
    height: 100%;
    border-top-right-radius: 200px;

    @media (max-width: $md-size) {
      border-top-right-radius: 0;
    }
  }
  .article-image__capture {
    width: 200px;
    align-self: self-end;
    margin-top: 15px;
    text-align: right;
  }
}
</style>
