<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "App",
  components: {},
  computed: {
    ...mapGetters({})
  },
  created() {
    document.title = this.$t("title");
  },
  watch: {}
};
</script>

<style rel="stylesheet/scss" lang="scss">
@import url(https://fonts.googleapis.com/earlyaccess/notosanstc.css);
@import url(https://fonts.googleapis.com/css?family=Noto+Sans+SC&display=swap);
#app {
  font-family: "Noto Sans SC", "Noto Sans TC", "微軟正黑體", sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
