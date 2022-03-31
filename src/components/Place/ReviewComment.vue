<template>
  <div class="review__comment">
    <div class="review__item">
      <div class="review__left">
        <router-link :to="{ name: 'profile-router', param: {} }">
          <div class="review_avatar">
            <img src="@/assets/images/user/user1.png" alt="" />
          </div>
        </router-link>
      </div>
      <div class="comment__container">
        <div class="comment__header">
          <div class="comment__user">
            <h3>GiangNguyen</h3>
            <span>6 ngày trước</span>
          </div>
          <div class="rate__point">
            <span>4.6</span>
          </div>
        </div>
        <hr />
        <div class="comment__title">
          Vô tình được khai sáng quán này view xuất sắc cực mọi người ạ ☺️
          👉🏻Nhìn ở tầng 1 tưởng là quán cà phê thông thường thôi nhưng đi sâu
          vào mới thấy chất thật sự 😂
        </div>
        <div class="review__iamge">
          <div class="list__image-review">
            <div class="review__image-item">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/vuejs-bbe5d.appspot.com/o/skyline1.jpg?alt=media&token=f264daa8-7142-40d9-b410-a171e0f976ba"
                alt=""
              />
            </div>
            <div class="review__image-item">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/vuejs-bbe5d.appspot.com/o/skyline1.jpg?alt=media&token=f264daa8-7142-40d9-b410-a171e0f976ba"
                alt=""
              />
            </div>
            <div class="review__image-item">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/vuejs-bbe5d.appspot.com/o/skyline1.jpg?alt=media&token=f264daa8-7142-40d9-b410-a171e0f976ba"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReviewComment",
  setup() {
    return {};
  },
};
</script>
<style scoped>
.review__comment {
  margin-top: 12px;
}
.review__item {
  display: flex;
  flex-flow:row nowrap;
  min-width: 0;
}
.review_avatar {
  width: 64px;
  height: 64px;
  border-radius: 64px;
}
.review_avatar img {
  border-radius: 64px;
}
.review__left {
  padding-right: 20px;
}
.comment__container {
  background-color: #f5f5f7;
  padding: 5px 15px;
}
.comment__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
}
.rate__point {
  width: 32px;
  height: 32px;
  border-radius: 32px;
  display: flex;
  justify-content: center;
  background: var(--main-color);
  align-items: center;
}
.rate__point span {
  font-weight: bold;
  color: #fff;
  font-size: 12px;
}
.comment__title {
  margin-top: 6px;
  min-width: 0;
}
.review__iamge {
  margin-top: 6px;
}
.list__image-review {
  display: grid;
  cursor: pointer;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
}
.review__image-item {
  max-height: 116px;
  min-height: 100px;
  min-width: 100px;
  position: relative;
  border-radius: 10px;
}
.review__image-item::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 1;
  transition: all 0.15s ease;
  border-radius: 10px;
}
.review__image-item:hover:before {
  background-color: rgba(0, 0, 0, 0.4);
}
.review__image-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
}
</style>