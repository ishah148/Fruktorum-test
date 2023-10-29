<template lang="pug">
html
  body
    header
      div(class="logo__container")
        NuxtLink(to="/")
          logo(class="logo__icon", filled)
</template>
<script setup lang="ts">
import logo from "@/assets/icons/logo.svg";
</script>
<style lang="scss">
header {
  width: 100%;
  height: 85px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--primary-background);
  padding: 0 var(--primary-padding);
}
.logo__container {
  width: 133px;
  height: 32px;
  .logo__icon {
    width: 133px;
    height: 32px;
  }
}
</style>
