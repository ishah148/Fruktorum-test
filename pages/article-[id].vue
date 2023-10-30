<template lang="pug">
div
  h3.error-message(v-if="store.errorMessage") {{ store.errorMessage }}
  template(v-for="item in store.articlesData", :key="item.id")
    Component(:is="getComponentByName(item.type)", :data="item.data")
</template>
<script setup lang="ts">
import useComponent from "~/composables/useComponens";
import { useArticleStore } from "~/store";


const route = useRoute();
const { id } = route.params;

const { getComponentByName } = useComponent();

const store = useArticleStore();
await store.fetchArticle(id as string);

</script>

<style scoped lang="scss">
.error-message {
  margin-top: 50px;
  text-align: center;
}
</style>
