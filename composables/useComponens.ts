import ArticleList from "~/components/ArticleList.vue";

export default function useComponent() {
  const componentList = {
    article_intro_block: "ArticleIntroBlock",
    article_list_block: ArticleList,
    cta_form_block: "CtaFormBlock",
    image_block: "ImageBlock",
    slider_block: "SliderBlock",
    subscribe_form_block: "SubscribeFormBlock",
    text_block: "TextBlock",
  };
  type cmpKeys = keyof typeof componentList;
  function getComponent(cmpName: cmpKeys | string) {
    if (!(cmpName in componentList)) {
      return null;
    }
    return componentList[cmpName as cmpKeys];
  }

  return {
    getComponent,
  };
}
