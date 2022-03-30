<template>
  <div class="container">
    <div class="detail__info">
      <div class="detail__rate shadow boder__radius">
        <h3 class="sub__title">Đánh giá</h3>
        <div class="rate__point">
          <b>0</b>
          <div>
            <h3>Chưa có đánh giá</h3>
            <span>/5 (0 đánh giá)</span>
          </div>
        </div>
        <div class="rate__content">
          <div
            class="progress__rate"
            v-for="(data, index) in dataRate"
            :key="index"
          >
            <div class="rate__title">
              <span class="title">{{ data.name }}</span>
              <div class="rate__bar">
                <span></span>
              </div>
              <span class="point">{{ data.point }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="detail__information shadow boder__radius">
        <h3 class="subtitle">Thông tin chi tiết</h3>
        <div class="list__info">
          <div
            class="info__title"
            v-for="(info, index) in dataDetail"
            :key="index"
            v-html="info.tag"
          ></div>
        </div>
      </div>
      <div class="detail__map shadow boder__radius"></div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  name: "PlaceInfo",
  setup() {
    const dataDetail = ref([
      {
        tag: '<i class="uil uil-usd-circle icon__size"></i><span class="description">35.000đ - 80.000đ</span>',
      },
      {
        tag: '<i class="uil uil-clock icon__size"></i><span class="open__door description">Đang mở cửa</span><span class="time">- 09:00 - 00:00</span>',
      },
      {
        tag: '<i class="uil uil-phone icon__size"></i><span class="description">098 890 264</span>',
      },
      {
        tag: '<i class="uil uil-facebook icon__size"></i><a class="description menu" href="https://www.facebook.com/profile.php?id=100079283983682">GiangNguyen</a>',
      },
      {
        tag: '<i class="uil uil-coffee icon__size"></i><span class="description menu">Xem menu</span>',
      },
    ]);
    const dataRate = ref([
      {
        name: "Vị trí",
        point: "4.0",
      },
      {
        name: "Không gian",
        point: "5.0",
      },
      {
        name: "Đồ uống",
        point: "4.0",
      },
      {
        name: "Phục vụ",
        point: "5.0",
      },
      {
        name: "Giá cả",
        point: "4.5",
      },
    ]);
    return {
      dataRate,
      dataDetail,
    };
  },
};
</script>

<style scoped>
.detail__info {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}
.detail__rate,
.detail__information,
.detail__map {
  padding: 12px;
}
.sub__title {
  font-weight: bold;
}
.rate__point {
  display: flex;
  align-items: center;
  justify-content: center;
}
.rate__point b {
  display: block;
  padding: 4px 8px;
  font-size: 28px;
  background: var(--main-color);
  color: white;
  border-radius: 10px;
  text-align: center;
  min-width: 50px;
  margin-right: 4px;
}
.rate__point h3 {
  font-weight: var(--font-semi-bold) !important;
  display: block;
}
.rate__content {
  display: grid;
  gap: 10px;
  margin-top: 6px;
}
.rate__title {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
}
.title {
  grid-column: 1/4;
}
.point {
  align-self: end;
  justify-self: end;
}
.rate__bar {
  width: 100%;
  background-color: var(--first-color-lighter);
  grid-column: 4/12;
  max-height: 8px;
  margin: auto;
  border-radius: 10px;
}
.rate__bar span {
  display: block;
  background-color: var(--main-color);
  width: 90%;
  height: 8px;
  border-radius: 0.25rem;
}
.list__info {
  margin-top: 12px;
  display: grid;
  gap: 10px;
}
.info__title >>> .icon__size {
  font-size: 20px;
  font-style: normal;
}
.info__title >>> .description {
  padding: 0px 12px;
  font-size: 20px;
}
.info__title >>> .open__door {
  color: #00b707;
}
.info__title >>> .time {
  font-size: 20px;
}
.info__title >>>.menu{
    color: blue;
}
</style>