<template>
  <Header />
  <!-- <Login/> -->
  <Banner />
  <Slide />
  <Section />
  <Footer />
</template>

<script>
import Header from "@/components/Header.vue";
import Banner from "@/components/Banner.vue"
// import Login from "@/components/Login.vue";
import Footer from "@/components/Footer.vue";
import Slide from "@/components/Slide.vue";
import Section from "@/components/Section.vue";
import { ref } from 'vue';
export default {
  name:"Home",
  components:{
    Header,Banner,Footer,Slide,Section
  },
  setup(){
    const isLogin = ref(false);
    return{
      isLogin
    }
  }
}
</script>

<style>

</style>