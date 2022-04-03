<template>
  <div class="container__shop">
    <div class="shop__image">
      <router-link target="_blank" :to="{ name: 'place-router', param: {} }">
        <div class="card__image">
          <div class="image__autosize">
            <img
              class="shop__avatar"
              src="@/assets/images/shop/shop2.jpg"
              alt=""
            />
          </div>
        </div>
      </router-link>
    </div>
    <div class="shop__content">
      <div class="shop__header">
        <div class="shop__name">
          <router-link
            target="_blank"
            :to="{ name: 'place-router', param: {} }"
          >
            <h4>MemoCoffee</h4>
          </router-link>
        </div>
        <div class="save__shop shadow">
          <i class="uil uil-bookmark-full"></i>
        </div>
      </div>
      <div class="rate__start">
        <span>
          <i class="uil uil-star"></i>
          <i class="uil uil-star"></i>
          <i class="uil uil-star"></i>
          <i class="uil uil-star"></i>
          <i class="uil uil-star"></i>
          - chưa có đánh giá
        </span>
      </div>
      <div class="price">
        <i class="uil uil-dollar-sign-alt"></i>
        <span>30.000đ - 80.000đ</span>
      </div>
      <div class="location">
        <i class="uil uil-map-marker"></i>
        <span>70 Trần Quang Diệu, Đống Đa 10000</span>
      </div>
      <div class="time__working">
        <i class="uil uil-clock-five"></i>
        <span class="on">Đang mở cửa</span>
        <span> - 07:00 - 23:00</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShopCoffee",
  setup() {
    return {};
  },
};
</script>

<style scoped>
.container__shop {
  box-shadow: 0 0 10px rgb(0 0 0 / 30%);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 20px;
  padding: 12px;
  border-radius: 12px;
}
.shop__image {
  grid-column: 1/2;
}
.card__image {
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
}
.image__autosize {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.shop__avatar {
  display: block;
  width: 100%;
  height: 100%;
  background-position: 50%;
  background-size: cover;
  object-fit: cover;
  transform: scale(1);
  transition: 1s ease-in-out;
  border-radius: 10px;
}
.shop__header {
  display: flex;
  justify-content: space-between;
}
.shop__name > a > h4 {
  font-size: 20px;
  font-weight: 700;
  padding: 6px 0 4px;
}
.shop__avatar:hover {
  transform: scale(1.2);
}
.save__shop {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  border-radius: 36px;
  cursor: pointer;
}
.save__shop i {
  font-size: 18px;
}
.shop__content {
  grid-column: 2/4;
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  gap: 2px;
}
.rate__start span,
.price span,
.location span,
.time__working span {
  font-size: 16px;
}
.rate__start > span > i,
.price > i,
.location > i,
.time__working i {
  padding-right: 4px;
  font-size: 18px;
}
.on{
    color:goldenrod;
}
.off{
    color: red;
}
</style>