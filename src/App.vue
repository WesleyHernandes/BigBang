<script lang="ts">
import Header from "./components/Header/index.vue";
import Content from "./components/Content/index.vue";

export default {
  name: "App",
  components: { Header, Content },
};
</script>

<template>
  <Header />
  <Content />
</template>

<style scoped></style>
