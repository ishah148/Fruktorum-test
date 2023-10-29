<template>
  <div class="article-text__wrapper" v-html="props.data"></div>
</template>

<script setup lang="ts">
const props = defineProps<{
  data: string;
}>();
</script>

<style lang="scss">
.article-text__wrapper {
  padding:0 var(--primary-padding) 10px;
  margin: 0 auto 100px;
  max-width: 884px;

  h2 {
    margin-bottom: 50px;
  }

  p {
    margin-bottom: 20px;
  }

  ul {
    max-width: 700px;
    margin-inline: auto;
    padding-left: 1em;
    margin-bottom: 16px;

    list-style-type: none;
  }

  ul > li::before {
    content: "\25C6";
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }

  blockquote {
    position: relative;
    margin-left: 100px;
    margin-top: 40px;

    font-size: 18px;
    font-style: italic;
    font-weight: 300;
    line-height: 26px;

    &:before {
      content: "";
      position: absolute;
      left: -100px;
      display: inline-block;
      width: 100px;
      height: 100px;
      background-image: url(assets/icons/quoute.svg);
      background-repeat: no-repeat;
    }

    p {
      margin-bottom: 15px;
    }

    footer {
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
    }
  }
}
</style>
