<template>
  <div class="posts__container shadow">
    <div class="posts__header">
      <div class="user__content">
        <router-link :to="{ name: 'profile-router', param: {} }">
          <div class="user__avatar">
            <img src="@/assets/images/user/user1.png" alt="" />
          </div>
        </router-link>
        <div class="author">
          <div class="author__name">
            <router-link :to="{ name: 'profile-router', param: {} }"
              >Giang Nguyen</router-link
            >
            <i class="uil uil-caret-right"></i>
            <router-link :to="{ name: 'place-router', param: {} }"
              >Harleys The Coffee</router-link
            >
          </div>
          <div class="rate__point">
            <i class="uil uil-star"></i>
            <i class="uil uil-star"></i>
            <i class="uil uil-star"></i>
            <i class="uil uil-star"></i>
            <i class="uil uil-star"></i>
            <span>9 ngày trước</span>
          </div>
        </div>
      </div>
      <div class="menu">
        <i class="uil uil-ellipsis-h"></i>
      </div>
    </div>
    <div class="posts__title">
      <p>
        Quán view cực đỉnh, vừa uống cafe vừa nghe nhạc, lại còn được ngắm tàu
        trên cao. Chắc chắn sẽ tới thường xuyên ạ 🥰
      </p>
    </div>
    <div class="list__image">
      <div class="image__one">
        <div class="img__wrapper">
          <div class="img__column-one">
            <img src="@/assets/images/explore/explore1.jpeg" alt="" />
          </div>
        </div>
        <div class="img__wrapper">
          <div class="img__column-one">
            <img src="@/assets/images/explore/explore2.jpeg" alt="" />
          </div>
        </div>
      </div>
      <div class="image__two">
        <div class="img__wrapper">
          <div class="img__column-one">
            <img src="@/assets/images/explore/explore3.jpeg" alt="" />
          </div>
        </div>
        <div class="img__wrapper">
          <div class="img__column-one">
            <img src="@/assets/images/explore/explore4.jpeg" alt="" />
          </div>
        </div>
        <div class="img__wrapper coat__backgroud">
          <div class="img__column-one">
            <span>+2</span>
            <img src="@/assets/images/explore/explore5.jpeg" alt="" />
          </div>
        </div>
      </div>
    </div>
    <hr />
    <div class="new__reaction">
      <div class="reaction">
        <i class="uil uil-heart"></i>
        <span>0 Thích</span>
      </div>
      <div class="comment">
        <i class="uil uil-comment-alt"></i>
        <span>Bình luận</span>
      </div>
    </div>
    <hr />
    <div class="new__reply">
      <div
        class="reply__avatar"
        :style="{ backgroundImage: 'url(' + avatarReply + ')' }"
      ></div>
      <div class="reply__text">
        <textarea name="" placeholder="Viết bình luận ..."></textarea>
      </div>
    </div>
    <div class="list__reply">
      <span>Xem thêm 7 bình luận</span>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
export default {
  name: "Posts",
  setup() {
    const avatarReply = ref(null);
    onMounted(() => {
      avatarReply.value =
        "https://lh3.googleusercontent.com/a-/AOh14GjGT2AcLzUXmavxl8jqQ-RsRblRKwuMw20IBYe8Qg=s96-c";
    });
    return {
      avatarReply,
    };
  },
};
</script>

<style scoped>
.posts__container {
  padding: 12px;
  border-radius: 12px;
}
.posts__header {
  display: flex;
  justify-content: space-between;
}
.user__content {
  display: flex;
  align-items: center;
  justify-items: center;
}
.user__avatar {
  width: 64px;
  height: 64px;
  border-radius: 64px;
}
.user__avatar img {
  width: 100%;
  height: 100%;
  display: block;
  border-radius: 64px;
}
.author__name {
  margin-bottom: 6px;
}
.author__name a {
  color: black;
  font-weight: bold;
  font-size: 16px;
  padding-left: 8px;
}
.rate__point {
  padding-left: 8px;
}
.rate__point span {
  display: inline-block;
  padding-left: 8px;
}
.menu {
  border-radius: 100%;
  background: #ccc;
  height: 24px;
  width: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
.posts__title {
  padding: 12px 0px;
}
.list__image {
  display: grid;
  grid-template-rows: repeat(7, 1fr);
  gap: 2px;
  height: 640px;
  margin-bottom: 10px;
}
.image__one {
  display: grid;
  grid-row: 1 / 5;
  gap: 2px;
  grid-template-columns: repeat(2, 1fr);
}
.image__two {
  display: grid;
  grid-row: 5/8;
  grid-template-columns: repeat(3, 1fr);
  gap: 2px;
}
.img__wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}
.coat__backgroud {
  position: relative;
}

.coat__backgroud::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  content: "";
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
}
.img__column-one span {
  position: absolute;
  top: 45%;
  left: 35%;
  font-size: 36px;
  z-index: 2;
  color: #fff;
}
.img__column-one img {
  display: block;
  width: 100%;
  height: 100%;
  background-position: 50%;
  object-fit: cover;
}
.img__column-one {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.new__reaction {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin: 4px 0px;
}
.reaction,
.comment {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px;
}
.reaction span,
.comment span {
  display: inline-block;
  padding-left: 6px;
}
.reaction:hover,
.comment:hover {
  background: rgb(249, 239, 239);
  border-radius: 6px;
  cursor: pointer;
}
.new__reply {
  margin-top: 10px;
  display: flex;
}
.reply__avatar {
  width: 38px;
  height: 38px;
  background-color: #eee;
  background-position: 50%;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 50%;
  border: none;
  overflow: hidden;
}
.reply__text {
  width: 98%;
}
.reply__text textarea {
  height: 38px;
  width: 100%;
  outline: none;
  resize: none;
  min-height: 36px;
  line-height: 36px;
  letter-spacing: 0.12px;
  margin-left: 6px;
  padding: 0 12px;
  border-radius: 18px;
  background-color: #f5f5f7;
  border: 1px solid transparent;
}
.list__reply{
  margin-top:10px ;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>