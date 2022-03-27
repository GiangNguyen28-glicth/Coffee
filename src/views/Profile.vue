<template>
  <Header />
  <div class="margin__top">
    <div class="container__profile">
      <div class="container__user">
        <div class="profile__user">
          <div class="container__image">
            <div class="profile__image-wrap">
              <div
                class="profile__image"
                :style="{ backgroundImage: 'url(' + dataImage + ')' }"
              ></div>
              <div class="camera" @click="openFile">
                <input type="file" ref="chooseImage" />
                <i class="uil uil-camera camera__icon"></i>
              </div>
            </div>
            <h1>Giang Nguyen</h1>
          </div>
        </div>
      </div>
    </div>
    <div class="nav">
      <div class="container mt-0">
        <div class="profile__nav">
          <ul>
            <li>
              <router-link
                class="nav__item"
                :to="{ name: 'home-router', param: {} }"
                >Đánh giá</router-link
              >
            </li>
            <li>
              <router-link
                class="nav__item"
                :to="{ name: 'home-router', param: {} }"
                >Đã lưu</router-link
              >
            </li>
            <li>
              <router-link
                class="nav__item"
                :to="{ name: 'home-router', param: {} }"
                >Người theo giõi</router-link
              >
            </li>
            <li>
              <router-link
                class="nav__item"
                :to="{ name: 'home-router', param: {} }"
                >Đang theo dõi</router-link
              >
            </li>
          </ul>
          <ul>
            <li>
              <button><i class="uil uil-pen edit__icon"></i>Chỉnh sửa</button>
            </li>
            <li>
              <router-link
                class="social__icon facebook"
                :to="{ name: 'home-router', param: {} }"
                ><i class="uil uil-facebook-f"></i
              ></router-link>
            </li>
            <li>
              <router-link
                class="social__icon github"
                :to="{ name: 'home-router', param: {} }"
                ><i class="uil uil-github"></i
              ></router-link>
            </li>
            <li>
              <router-link
                class="social__icon mr option"
                :to="{ name: 'home-router', param: {} }"
                >...</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="profile__section">
        <div class="profile__title shadow">
          <h3>[ Bảng chiến tích ]</h3>
          <div class="title__item">
            <span class="sub__title"
              ><i class="uil uil-edit icon__title"></i>Đánh giá</span
            >
            <span class="title__item-quantity">0</span>
          </div>
          <div class="title__item">
            <span class="sub__title"
              ><i class="uil uil-discord icon__title"></i>Thảo luận</span
            >
            <span class="title__item-quantity">0</span>
          </div>
          <div class="title__item">
            <span class="sub__title"
              ><i class="uil uil-heart icon__title"></i>Được thích</span
            >
            <span class="title__item-quantity">0</span>
          </div>
          <div class="title__item">
            <span class="sub__title"
              ><i class="uil uil-rss icon__title"></i>Người theo giõi</span
            >
            <span class="title__item-quantity">0</span>
          </div>
          <div class="title__item">
            <span class="sub__title"
              ><i class="uil uil-calendar-alt icon__title"></i>Ngày tham
              gia</span
            >
            <span class="title__item-quantity">0</span>
          </div>
        </div>
        <div class="list__rate-title">
          <div class="rate__empty">
            <img class="empty" src="@/assets/images/empty.png" alt="" />
            <span>Opps, chưa có bài đánh giá nào!</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <Footer />
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
export default {
  name: "Profile",
  components: { Header, Footer },
  setup() {
    const dataImage = ref(null);
    const chooseImage = ref(null);
    const openFile = () => {
      chooseImage.value.click();
    };
    onMounted(() => {
      dataImage.value =
        "https://lh3.googleusercontent.com/a-/AOh14GjGT2AcLzUXmavxl8jqQ-RsRblRKwuMw20IBYe8Qg=s200-c";
    });
    return {
      chooseImage,
      openFile,
      dataImage,
    };
  },
};
</script>

<style scoped>
.margin__top {
  margin-top: 96px;
}
.container__profile {
  margin-top: 96px;
  background-color: #fff;
  max-width: 1330px;
  margin: auto;
}
.container__user {
  position: relative;
  padding-bottom: 100px;
}
.profile__user {
  height: 250px;
  width: 100%;
  position: relative;
  display: flex;
  padding: 20px 40px;
  justify-content: center;
  align-items: center;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  background: linear-gradient(180deg, #ffb8b8, #fafafa);
}
.container__image {
  display: flex;
  flex-direction: column;
  flex-direction: column;
  position: absolute;
  top: 34%;
}
.profile__image-wrap {
  position: relative;
  width: 200px;
  height: 200px;
  padding: 6px;
  border-radius: 50%;
  background: #fff;
}
.profile__image {
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #fff;
  border: none;
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.container__image h1 {
  font-size: 32px;
  font-weight: 700;
  text-align: center;
}
.camera {
  position: absolute;
  top: auto;
  right: 20px;
  bottom: 10px;
  left: auto;
  cursor: pointer;
  width: 38px;
  height: 38px;
  font-size: 20px;
  line-height: 38px;
  text-align: center;
  border-radius: 50%;
  color: #404040;
  background: #efefef;
}
.camera input {
  display: none;
}
.camera__icon {
  font-size: 28px;
}
.nav {
  /* padding-bottom: 12px; */
  box-shadow: 0 2px 2px 0 rgb(189 171 171 / 20%);
}
.profile__nav {
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
}
.profile__nav ul li {
  list-style-type: none;
  display: inline-block;
}
.nav__item {
  display: block;
  font-weight: bold;
  padding: 10px 14px;
  color: #000;
  font-size: 18px;
}
.nav__item:hover {
  color: red;
}
.profile__nav ul li button {
  margin-left: 6px;
  margin-top: 6px;
  font-weight: bold;
  color: rgb(0, 0, 0);
  padding: 6px 18px;
  border-radius: 6px;
  transition: all 0.15s ease 0s;
  background: rgb(239, 239, 239);
  outline: none;
  border: 0px;
  font-size: 18px;
}
.profile__nav ul li button:hover {
  background: rgb(224, 222, 222);
  cursor: pointer;
}
.edit__icon {
  font-size: 18px;
  padding-right: 4px;
}
.social__icon {
  margin-left: 6px;
  margin-top: 6px;
  padding: 6px 18px;
  border-radius: 6px;
  transition: all 0.15s ease 0s;
  background: rgb(239, 239, 239);
  font-size: 16px;
}
.mr {
  margin-right: 14px;
}
.facebook:hover {
  background: blue;
  color: #fff;
}
.github:hover {
  background: red;
  color: #fff;
}
.option:hover {
  background: rgb(224, 222, 222);
}
.profile__section {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

.profile__title {
  grid-column: 1/2;
  border-radius: 10px;
  display: flex;
  padding: 16px;
  flex-direction: column;
}
.profile__title h3 {
  text-align: center;
}
.title__item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 6px;
}
.title__item-quantity {
  padding: 0 10px;
  border-radius: 6px;
  background: #efefef;
}
.sub__title {
  font-size: 16px;
  font-weight: bold;
}
.icon__title {
  font-size: 18px;
  margin-right: 6px;
}
.list__rate-title {
  grid-column: 2/4;
}
.list__rate-title div {
  max-height: 232px;
}
.rate__empty {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.empty {
  height: 180px;
  margin-bottom: 20px;
}
.list__rate-title span {
  font-weight: bold;
  font-size: 24px;
}
</style>