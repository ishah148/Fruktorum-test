<template>
  <div>
<!--    <ArticleIntro v-if="articleIntroData" :data="articleIntroData" />-->
<!--    <ArticleText :data="articleTextData" />-->
<!--    <ArticleImage-->
<!--        :data="{ src: 'https://devtwit8.ru/img/3.png', caption: '123' }"-->
<!--    />-->
<!--    <ArticleSlider-->
<!--        :data="[-->
<!--          'https://devtwit8.ru/img/1.png',-->
<!--          'https://devtwit8.ru/img/2.png',-->
<!--          'https://devtwit8.ru/img/3.png',-->
<!--          'https://devtwit8.ru/img/4.png',-->
<!--        ]"-->
<!--    />-->
<!--    <ArticleSubscribe />-->
<!--    <ArticleList-->
<!--        :data="{-->
<!--          title: '12377',-->
<!--          body: [-->
<!--            {-->
<!--              title: 'Есть над чем задуматься: небо темнеет',-->
<!--              link: '/article-2',-->
<!--              image: 'https://devtwit8.ru/img/p2.png',-->
<!--            },-->
<!--            {-->
<!--              title:-->
<!--                'Мелочь, а приятно: чистосердечное признание облегчает душу',-->
<!--              link: '/article-3',-->
<!--              image: 'https://devtwit8.ru/img/p3.png',-->
<!--            },-->
<!--            {-->
<!--              title:-->
<!--                'Очевидцы сообщают, что слышали старческий скрип Амстердама',-->
<!--              link: '/article-4',-->
<!--              image: 'https://devtwit8.ru/img/p4.png',-->
<!--            },-->
<!--          ],-->
<!--        }"-->
<!--    />-->
<!--    <ArticleForm />-->
    <template v-for="item in articlesTypesRef" :key="item.id">
      <Component :is="getComponent(item.type)" :data="item.data" />
    </template>
  </div>
</template>
<script setup lang="ts">
import type { Article, ArticleBody } from "~/types";
import useComponent from "~/composables/useComponens";

const route = useRoute();
const { id } = route.params;

const { getComponent } = useComponent();
const articlesTypesRef = ref<ArticleBody[]>();

await fetchArticle(id as string);

async function fetchArticle(id: string | undefined) {
  if (!id) return;
  const response = await useFetch<Article>(`/api/article-${id}`);
  if (!response) return;

  const articlesTypes = response?.data?.value?.body as ArticleBody[];

  articlesTypesRef.value = articlesTypes;

  console.log("articlesType", articlesTypes);
}
</script>

<style scoped lang="scss"></style>
