import { defineStore } from "pinia";
import type { ArticleBody , Article } from "~/types";
export const useArticleStore = defineStore({
  id: "article-store",
  state: () => {
    return {
      articlesData: [] as ArticleBody[],
      errorMessage: "" as string,
    };
  },
  actions: {
    async fetchArticle(id: string | undefined) {
      this.$reset();
      if (!id) {
        this.setErrorMessage();
        return;
      }

      const response = await useFetch<Article>(`/api/article-${id}`);
      if (!response?.data?.value?.body) {
        this.setErrorMessage();
        return;
      }
      this.articlesData = response.data.value.body;
    },
    setErrorMessage() {
      this.errorMessage = "Something was wrong :(";
    },
  },
});
