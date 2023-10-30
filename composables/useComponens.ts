import ArticleList from "~/components/ArticleList.vue";
import ArticleIntro from "~/components/ArticleIntro.vue";
import ArticleForm from "~/components/ArticleForm.vue";
import ArticleImage from "~/components/ArticleImage.vue";
import ArticleSlider from "~/components/ArticleSlider.vue";
import ArticleText from "~/components/ArticleText.vue";
import ArticleSubscribe from "~/components/ArticleSubscribe.vue";

export default function useComponent() {
  const componentList = {
    article_intro_block: ArticleIntro,
    article_list_block: ArticleList,
    cta_form_block: ArticleForm,
    image_block: ArticleImage,
    slider_block: ArticleSlider,
    subscribe_form_block: ArticleSubscribe,
    text_block: ArticleText,
  };
  type cmpKeys = keyof typeof componentList;

  function getComponentByName(cmpName: cmpKeys | string) {
    if (!(cmpName in componentList)) {
      return null;
    }
    return componentList[cmpName as cmpKeys];
  }

  return {
    getComponentByName,
  };
}
