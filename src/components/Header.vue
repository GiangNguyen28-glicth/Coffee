<template>
  <div class="header">
    <img src="@/assets/images/logo.jpg" class="header__image" alt="" />
    <ul class="header__option">
      <li class="mr-16">
        <i class="uil uil-bright header__icons-size"> </i>
        <router-link class="nav__item" :to="{ name: 'discount-router', param: {} }"
          >Khám phá</router-link
        >
        <div class="thick"></div>
      </li>
      <li>
        <i class="uil uil-gift header__icons-size"></i>
        <router-link class="nav__item" :to="{ name: 'discount-router', param: {} }"
          >Khuyến mãi</router-link
        >
        <div class="thick"></div>
      </li>
    </ul>
    <ul class="header__login">
      <li>
        <i class="uil uil-pen header__icons"></i>
        <router-link :to="{ name: 'newreview-router', param: {} }"
          >Viết Review</router-link
        >
      </li>
      <li>
        <i class="uil uil-signin header__icons"></i>
        <h3>Đăng nhập</h3>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Header",
  setup() {
    return {};
  },
};
</script>

<style scoped>
.header {
  position: fixed;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  top: 0;
  left: 0;
  right: 0;
  box-shadow: 0 0 10px rgb(0 0 0 / 30%);
  z-index: 10;
  background-color: #fff;
}
.header__image {
  grid-column: 2;
  display: block;
  height: 100%;
  justify-self: center;
  align-self: center;
}
.header__option {
  display: inline-block;
  grid-column: 4/8;
  align-self: center;
  display: inline-block;
  justify-self: center;
}
.header__option > li {
  list-style-type: none;
  display: inline-block;
}
.header__option > li:hover {
  cursor: pointer;
  opacity: 0.6;
}
.header__option > li:hover .thick {
  background: red;
  animation: thick_loading 0.25s ease;
}
.header__option h3 {
  font-size: var(--h3-font-size);
  display: inline-block;
}
.header__icons-size {
  display: inline-block;
  font-size: 24px;
  margin: 0px 4px 0px;
}
.header__login {
  grid-column: 8/12;
  align-self: center;
  display: inline-block;
  justify-self: center;
}
.header__login li {
  list-style-type: none;
  display: inline-block;
  background-color: red;
  border-radius: 12px;
  margin: 0px 12px;
  padding: 6px 12px;
}
.header__login li:hover {
  cursor: pointer;
  opacity: 0.6;
}
.header__login h3 {
  font-size: var(--h3-font-size);
  display: inline-block;
  color: #fff;
}
.header__login a {
  font-size: var(--h3-font-size);
  display: inline-block;
  color: #fff;
}
.header__icons {
  display: inline-block;
  font-size: 24px;
  color: #fff;
  margin-right: 4px;
}
.nav__item{
  color: black;
  font-weight: 500;
  font-size: 16px;
}
.thick {
  background: transparent;
  height: 3px;
}
@keyframes thick_loading {
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
}
</style>