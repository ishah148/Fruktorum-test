<template lang="pug">
html
  body
    div
      h3.error-message(v-if="store.errorMessage") {{ store.errorMessage }}
      template(v-for="item in articlesData", :key="item.id")
        Component(:is="getComponent(item.type)", :data="item.data")
</template>
<script setup lang="ts">
import useComponent from "~/composables/useComponens";
import { useArticleStore } from "~/store";

const route = useRoute();
const { id } = route.params;

const { getComponent } = useComponent();

const store = useArticleStore();
await store.fetchArticle(id as string);
const articlesData = store.articlesData;
</script>

<style scoped lang="scss">
.error-message {
  margin-top: 50px;
  text-align: center;
}
</style>
