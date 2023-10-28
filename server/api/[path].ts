import { articlesPagePath, baseApiPath } from "~/constants";

export default defineEventHandler(async (event) => {
  const path = event.context?.params?.path;
  if (!path) return;
  const url = `${baseApiPath}${path === articlesPagePath ? "" : path}`;

  try {
    return await $fetch(url);
  } catch (e) {
    return null
  }
});
