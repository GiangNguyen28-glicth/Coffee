<template>
  <Header />
  <div class="container margin__header">
    <div class="explore__container">
      <div class="posts__container">
        <Posts />
      </div>
      <div class="explore__menu">
        <ExploreBox />
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Posts from "@/components/Explore/Posts.vue";
import ExploreBox from "@/components/Explore/ExploreBox.vue";
export default {
  name: "Explore",
  components: { Posts, Footer, Header,ExploreBox },
  setup() {
    return {};
  },
};
</script>

<style scoped>
.explore__container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
.posts__container {
  grid-column: 1/3;
}
.explore__menu {
  grid-column: 3/4;
}
</style>