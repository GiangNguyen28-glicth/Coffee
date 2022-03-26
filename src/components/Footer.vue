<template>
  <div class="footer">
    <div class="container grid">
      <div class="product">
        <h3 class="sub__title">PRODUCT</h3>
        <ul class="sub__list">
          <li>
            <router-link :to="{ name: 'home-router', params: {} }"
              >Red Hat Ansible Automation Platform</router-link
            >
          </li>
          <li>
            <router-link :to="{ name: 'home-router', params: {} }"
              >Enterprise Linux</router-link
            >
          </li>
          <li>
            <router-link :to="{ name: 'home-router', params: {} }"
              >OpenStack Platform</router-link
            >
          </li>
          <li>
            <router-link :to="{ name: 'home-router', params: {} }"
              >See all products</router-link
            >
          </li>
        </ul>
      </div>
      <div class="tools">
        <h3 class="sub__title">TOOLS</h3>
        <ul class="sub__list">
          <li>
            <router-link :to="{ name: 'home-router', params: {} }"
              >My account</router-link
            >
          </li>
          <li>
            <router-link :to="{ name: 'home-router', params: {} }"
              >Customer Support</router-link
            >
          </li>
          <li>
            <router-link :to="{ name: 'home-router', params: {} }"
              >Developer Resources</router-link
            >
          </li>
          <li>
            <router-link :to="{ name: 'home-router', params: {} }"
              >Learning community</router-link
            >
          </li>
          <li>
            <router-link :to="{ name: 'home-router', params: {} }"
              >Resource library</router-link
            >
          </li>
        </ul>
      </div>
      <div class="buy">
        <h3 class="sub__title">TRY,BUY,SELL</h3>
        <ul class="sub__list">
          <li>
            <router-link :to="{ name: 'home-router', params: {} }"
              >Product trial center</router-link
            >
          </li>
          <li>
            <router-link :to="{ name: 'home-router', params: {} }"
              >Contact Sales</router-link
            >
          </li>
          <li>
            <router-link :to="{ name: 'home-router', params: {} }"
              >Red Hat Marketplace</router-link
            >
          </li>
          <li>
            <router-link :to="{ name: 'home-router', params: {} }"
              >Contact sales</router-link
            >
          </li>
          <li>
            <router-link :to="{ name: 'home-router', params: {} }"
              >Contact training</router-link
            >
          </li>
          <li>
            <router-link :to="{ name: 'home-router', params: {} }"
              >Contact consulting</router-link
            >
          </li>
        </ul>
      </div>
      <div class="communicate">
        <h3 class="sub__title">COMMUNICATE</h3>
        <ul class="sub__list">
          <li>
            <router-link :to="{ name: 'home-router', params: {} }"
              >Contact us</router-link
            >
          </li>
          <li>
            <router-link :to="{ name: 'home-router', params: {} }"
              >Feedback</router-link
            >
          </li>
          <li>
            <router-link :to="{ name: 'home-router', params: {} }"
              >Social</router-link
            >
          </li>
          <li>
            <router-link :to="{ name: 'home-router', params: {} }"
              >Red Hat newsletter</router-link
            >
          </li>
        </ul>
      </div>
      <div class="about">
        <h3 class="sub__title">ABOUT</h3>
        <p class="about__description">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum ullam
          voluptatem saepe alias possimus reprehenderit, natus quasi. Tempora
          iste perspiciatis at vel, sint amet similique fuga, et, pariatur
          quaerat molestias.
        </p>
        <div class="about__list">
          <ul class="sub__list color__white">
            <li>
              <router-link :to="{ name: 'home-router', params: {} }"
                >Company information</router-link
              >
            </li>
            <li>
              <router-link :to="{ name: 'home-router', params: {} }"
                >Locations</router-link
              >
            </li>
            <li>
              <router-link :to="{ name: 'home-router', params: {} }"
                >Events</router-link
              >
            </li>
            <li>
              <router-link :to="{ name: 'home-router', params: {} }"
                >Blog</router-link
              >
            </li>
            <li>
              <router-link :to="{ name: 'home-router', params: {} }"
                >Diversity, equity, and inclusion</router-link
              >
            </li>
            <div class="list__icon">
                <i class="uil uil-facebook personal__icon"></i>
                <i class="uil uil-github personal__icon"></i>
                <i class="uil uil-twitter personal__icon"></i>
                <i class="uil uil-youtube personal__icon"></i>
            </div>
          </ul>
          <ul class="sub__list color__white">
            <li>
              <router-link :to="{ name: 'home-router', params: {} }"
                >Jobs</router-link
              >
            </li>
            <li>
              <router-link :to="{ name: 'home-router', params: {} }">
                Development model</router-link
              >
            </li>
            <li>
              <router-link :to="{ name: 'home-router', params: {} }">
                Newsroom</router-link
              >
            </li>
            <li>
              <router-link :to="{ name: 'home-router', params: {} }">
                Cool Stuff Store</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  bottom: 0;
  width: 100%;
  background-color: #252525;
}
.grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
}
.product {
  grid-column: 1 / 2;
}
.tools {
  grid-column: 2/3;
}
.buy {
  grid-column: 3/4;
}
.communicate {
  grid-column: 4/5;
}
.about {
  grid-column: 5/7;
  background-color: red;
}
.sub__title {
  color: #fff;
  padding: 12px;
}
.sub__list li a {
  color: #ccc;
  padding: 12px;
  display: inline-block;
  font-weight: 500;
}
.about__description {
  color: #fff;
  padding: 12px;
}
.color__white li a{
  color: #fff;
}
.about__list {
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(2, 1fr);
}
.list__icon{
    display: grid;
    grid-template-columns: repeat(4,1fr);
}
.personal__icon{
  padding:12px;
  font-size: 24px;
  color: white;
 
}
.personal__icon:hover{
   cursor: pointer;
   opacity: 0.6;
} 
</style>