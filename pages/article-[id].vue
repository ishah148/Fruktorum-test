<template>
  <ArticleIntro :data="articleIntroData" />
  <ArticleText :data="articleIntroData" />
</template>
<script setup lang="ts">
import { FetchError } from "ofetch";
import type { Component } from "@nuxt/schema";
import type { Article, ArticleBody } from "~/types";

const route = useRoute();
const { id } = route.params;

const articleIntroData = ref<any>();

fetchArticle(id as string);
const article = ref<Article | FetchError | null>();
const cmpKeys = ref<Component[]>([]);

async function fetchArticle(id: string | undefined) {
  if (!id) return;
  const response = await useFetch<Article>(`/api/article-${id}`);
  if (!response) return;

  const components = (response.data?.value as Article)?.body;
  const articlesType = response?.data?.value?.body?.[0].type;
  const articlesTypes = response?.data?.value?.body as ArticleBody[];

  articleIntroData.value = articlesTypes[0].data;
  console.log("articlesType", articlesTypes);
}
</script>

<style scoped lang="scss"></style>
