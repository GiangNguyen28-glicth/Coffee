<template>
  <Header />
  <div class="container margin__header">
    <div class="setting__container">
      <div class="profile__setting shadow">
        <div class="profile__avatar">
          <img
            src="https://lh3.googleusercontent.com/a-/AOh14GjGT2AcLzUXmavxl8jqQ-RsRblRKwuMw20IBYe8Qg=s200-c"
            alt=""
          />
          <div>
            <router-link :to="{ name: 'profile-router', param: {} }"
              ><h3>Giang Nguyen</h3></router-link
            >
            <span>User</span>
          </div>
        </div>
        <hr />
        <div class="profile__nav">
          <div class="profile__overview">
            <i class="uil uil-user-circle profile__icon"></i>
            <router-link class="nav__title" :to="{ name: 'profile-router' }"
              >Tổng quan</router-link
            >
          </div>
          <div class="profile__reward">
            <i class="uil uil-award-alt profile__icon"></i>
            <router-link class="nav__title" :to="{ name: 'profile-router' }"
              >Thành tựu</router-link
            >
          </div>
          <div class="profile__notification">
            <i class="uil uil-bell profile__icon"></i>
            <router-link class="nav__title" :to="{ name: 'profile-router' }"
              >Thông báo</router-link
            >
          </div>
          <hr />
          <div class="logout">
            <i class="uil uil-sign-out-alt profile__icon"></i>
            <router-link class="nav__title" :to="{ name: 'profile-router' }"
              >Đăng xuất</router-link
            >
          </div>
        </div>
      </div>
      <div class="profile__infomation shadow">
        <div class="user__show">
          <div class="information__content">
            <div class="user__title">
              <i class="uil uil-user-md profile__icon"></i>
              <h3>GiangNguyen</h3>
            </div>
            <div class="action">
              <i class="uil uil-pen" @click="isChangeUserName=!isChangeUserName"></i>
            </div>
          </div>
          <div class="user__description" v-if="isChangeUserName">
            <input type="text" name="" id="" value="GiangNguyen" />
            <button class="btn__update">Cập nhật</button>
            <button class="btn__update cancel" @click="isChangeUserName=!isChangeUserName" >Hủy</button>
          </div>
        </div>
        <hr />
        <div class="information__password">
          <div class="information__content">
            <div class="user__title">
              <i class="uil uil-lock profile__icon"></i>
              <h3>Mật khẩu</h3>
            </div>
            <div class="action">
              <i
                class="uil uil-pen"
                @click="isChangePassword = !isChangePassword"
              ></i>
            </div>
          </div>
          <div class="information__description" v-if="!isChangePassword">
            <span class="new">Thay đổi mật khẩu của bạn</span>
          </div>
          <div class="information__description" v-if="isChangePassword">
            <input type="password" placeholder="Nhập mật khẩu cũ" id="" />
            <input type="password" placeholder="Nhập mật khẩu mới" id="" />
            <button class="btn__update">Cập nhật</button>
            <button
              class="btn__update cancel cancel"
              @click="isChangePassword = !isChangePassword"
            >
              Hủy
            </button>
          </div>
        </div>
        <hr />
        <div class="information__email">
          <div class="information__content">
            <div class="user__title">
              <i class="uil uil-envelope-edit profile__icon"></i>
              <h3>Email</h3>
            </div>
            <div class="action">
              <i class="uil uil-pen"></i>
            </div>
          </div>
          <div class="email__description">
            <span>giangnguyen3246@gmail.com</span>
          </div>
        </div>
        <hr />
        <div class="information__phone">
          <div class="information__content">
            <div class="user__title">
              <i class="uil uil-mobile-android profile__icon"></i>
              <h3>Điện thoại</h3>
            </div>
            <div class="action">
              <i class="uil uil-pen"></i>
            </div>
          </div>
          <div class="phone__description">
            <i class="uil uil-plus-circle icon__description"></i>
            <span class="new">Thêm số điện thoại của bạn</span>
          </div>
        </div>
        <hr />
        <div class="information__social">
          <div class="information__content">
            <div class="user__title">
              <i class="uil uil-globe profile__icon"></i>
              <h3>Mạng xã hội</h3>
            </div>
            <div class="action">
              <i class="uil uil-pen"></i>
            </div>
          </div>
          <div class="social__description">
            <div style="display: flex; flex-direction: column">
              <div>
                <i class="uil uil-plus-circle icon__description"></i>
                <span class="new">Thêm facebook của bạn</span>
              </div>
              <div style="margin-top: 6px">
                <i class="uil uil-plus-circle icon__description"></i>
                <span class="new">Thêm instagram của bạn</span>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div class="information__private">
          <div class="information__content">
            <div class="user__title">
              <i class="uil uil-cloud-lock profile__icon"></i>
              <h3>Quyền riêng tư</h3>
            </div>
            <div class="action">
              <i class="uil uil-pen"></i>
            </div>
          </div>
          <div class="btn__anonymous">
            <div
              @click="switchBtn = !switchBtn"
              class="btn__anonymous-wrapper"
              :class="{ on: switchBtn, off: !switchBtn }"
            >
              <div class="circle"></div>
            </div>
            <p>Ẩn thông tin của bạn</p>
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
export default {
  name: "Edit",
  components: { Header, Footer },
  setup() {
    const isChangePassword = ref(false);
    const isChangeUserName = ref(false);
    const switchBtn = ref(false);
    return {
      switchBtn,
      isChangePassword,
      isChangeUserName
    };
  },
};
</script>

<style scoped>
.setting__container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 20px;
}
.profile__setting {
  grid-column: 1/2;
  padding: 16px;
  border-radius: 12px;
  max-height: 260px;
}
.profile__avatar {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-bottom: 6px;
}
.profile__setting img {
  display: block;
  width: 60px;
  height: 60px;
  border-radius: 60px;
}
.profile__avatar div {
  padding-left: 16px;
}
.profile__overview {
  margin-top: 6px;
}
hr {
  background-color: #ddd;
  height: 1px;
  border: 0;
}
.profile__overview,
.profile__reward,
.profile__notification,
.logout {
  padding: 6px;
  cursor: pointer;
}
.nav__title {
  font-size: 18px;
  padding-left: 6px;
  color: black;
}
.profile__icon {
  font-size: 20px;
  padding-right: 6px;
}
.profile__infomation {
  grid-column: 2/4;
  grid-row: 1/3;
  padding: 16px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
}
.user__show,
.information__password,
.information__email,
.information__phone,
.information__social,
.information__private {
  padding: 12px;
}
.user__show:hover,
.information__password:hover,
.information__email:hover,
.information__phone:hover,
.information__social:hover,
.information__private:hover {
  background: #f6f6f6;
  cursor: pointer;
  border-radius: 6px;
}
.user__title h3 {
  display: inline-block;
  font-weight: bold;
}
.information__content {
  display: flex;
  justify-content: space-between;
}
.action {
  cursor: pointer;
  font-size: 18px;
  width: 36px;
  height: 36px;
  line-height: 36px;
  text-align: center;
  background-color: #eee;
  border-radius: 50%;
}
.information__description,
.email__description,
.phone__description,
.social__description,
.btn__anonymous,
.user__description {
  margin-left: 28px;
}
.icon__description {
  margin-right: 4px;
  color: blue;
}
.new {
  font-size: 16px;
  color: blue;
  cursor: pointer;
}
.btn__anonymous {
  display: flex;
}
.btn__anonymous-wrapper {
  display: flex;
  width: 44px;
  min-height: 22px;
  align-items: center;
  cursor: pointer;
  padding: 2px;
  border-radius: 22px;
  transition: 0.5s ease-in-out;
}
.on {
  background: var(--main-color);
  justify-content: flex-end;
}
.off {
  background: #ccc;
  justify-content: flex-start;
}
.circle {
  background: #fff;
  width: 18px;
  height: 18px;
  border-radius: 18px;
}
.btn__anonymous p {
  padding-left: 12px;
  color: black;
  font-size: 16px;
  font-weight: 500;
}
.information__description input {
  padding: 6px;
  display: block;
  border-radius: 6px;
  border: 1px solid #ccc;
  margin: 6px 0px;
}
.btn__update {
  padding: 6px;
  margin-right: 4px;
  border-radius: 6px;
  border: 0px solid;
  background: red;
  color: #fff;
  cursor: pointer;
}
.cancel {
  background: #ccc !important;
  color: black !important;
}
.information__description button:hover {
  opacity: 0.7;
}
.user__description input {
  display: block;
  padding: 6px;
  border: 1px solid #ccc;
  margin: 6px 0px;
  border-radius: 6px;
}
</style>