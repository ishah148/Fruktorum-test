import { articlesPagePath, baseApiPath } from "~/constants";
import { useArticleStore } from "~/store";

export default defineEventHandler(async (event) => {
  const store = useArticleStore();
  const path = event.context?.params?.path;
  if (!path) {
    store.setErrorMessage();
    return;
  }
  const url = `${baseApiPath}${path === articlesPagePath ? "" : path}`;

  try {
    return await $fetch(url);
  } catch {
    store.setErrorMessage();
    return null;
  }
});
