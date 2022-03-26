<template>
  <div class="mt__header grid">
    <div class="banner__img">
      <div class="text__desciption">
        <h3 class="auto__type"></h3>
      </div>
      <h3 class="sub__title">
        Mang đến cho bạn những sự lựa chọn tốt nhất cho điểm hẹn cafe
      </h3>
      <div class="search">
        <div class="search__witdh">
          <input class="search__input" type="text" placeholder="Tìm kiếm" />
        </div>
        <button class="enter__button">
          <i class="uil uil-search search__icon"></i>Tìm quán
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Typed from "typed.js";
import { onMounted } from "@vue/runtime-core";
export default {
  name: "Banner",
  setup() {
    var options = {
      strings: [
        "Khám phá và tìm những địa điểm thích hợp với bạn",
        "Cùng nhau chia sẻ những phút giây của bạn",
      ],
      typeSpeed: 40,
      //   backSpeed: 100,
      loop: true,
    };
    onMounted(() => {
      var typed = new Typed(".auto__type", options);
      return typed;
    });

    return {};
  },
};
</script>

<style scoped>
.mt__header {
  margin-top: 92px;
}
.grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
}
.banner__img {
  position: relative;
  /* height: 50%; */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 30%;
  object-fit: cover;
  background: url("~@/assets/images/banner2.jpg") top center / cover no-repeat;
}
.search {
  position: absolute;
  margin: auto;
  border-radius: 12px;
  top: 60%;
  background: transparent;
  align-items: center;
  width: 80%;
  margin-top: 24px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
}
.search__witdh {
  grid-column: 1/6;
}
.search__input {
  padding: 16px;
  outline: none;
  border: 0px solid;
  color: rgb(216, 143, 143);
  font-size: 24px;
  width: 100%;
  align-items: center;
  border-radius: 10px;
}
.search__icon {
  font-size: 24px;
  color: white;
  padding:0px 8px;
}
.search__enter {
  font-size: 24px;
  color: #fff;
}
.enter__button {
  border-radius: 12px;
  background: rgb(241, 12, 12);
  font-size: 24px;
  color: #fff;
  margin-right: 16px;
  grid-column:6/7 ;
  height: 100%;
  box-shadow: 0 0 10px rgb(0 0 0 / 30%);
}
.enter__button:hover {
  cursor: pointer;
  opacity: 0.6;
}
.text__desciption {
  position: absolute;
  align-items: center;
  top: 38%;
  width: 60%;
}
.auto__type {
  font-size: 36px;
  color: #fff;
  text-align: center;
}
.sub__title {
  position: absolute;
  top: 50%;
  color: #ccc;
  text-align: center;
}
</style>