<template scoped>
  <div class="container">
    <h1 class="sub__title">Địa điểm nổi bật</h1>
    <div class="line"></div>
    <div class="list__location">
      <div
        class="location__item"
        v-for="(location, index) in data"
        :key="index"
      >
        <div class="card__image">
          <img class="location__image" :src="location.url" alt="" />
        </div>
        <div class="location__card">
          <h3 class="location__name">{{ location.name }}</h3>
          <p class="location__address">{{ location.address }}</p>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="suggest__location">
      <img src="@/assets/images/location.png" alt="" class="suggest__image">
      <div class="suggest__content">
        <h3 class="sub__content">Chúng tôi đang có đang bỏ lỡ những địa điểm nào ?</h3>
        <router-link class="sugget__submit" :to="{name:'place-router',param:{}}">Đóng góp địa điểm</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  name: "Section",
  setup() {
    const data = ref([
      {
        name: "Le Petit Moment Caf",
        url: "https://firebasestorage.googleapis.com/v0/b/vuejs-bbe5d.appspot.com/o/location1.jpg?alt=media&token=aa3a8458-fa10-482f-b4b3-217cca567131",
        address: "Thủ Dầu Một , Bình Dương",
      },
      {
        name: "El Oasis Coffee & Louge",
        url: "https://firebasestorage.googleapis.com/v0/b/vuejs-bbe5d.appspot.com/o/location2.jpg?alt=media&token=b8b41790-589f-486d-a192-b59eae685bd1",
        address: "Tổ 4, Thới Hòa , Bến Cát",
      },
      {
        name: "Sip & Snack Coffee Shop",
        url: "https://firebasestorage.googleapis.com/v0/b/vuejs-bbe5d.appspot.com/o/location3.jpg?alt=media&token=3a6c78d7-222f-4f57-9192-228ff5b7201d",
        address: "Quận 11 , TP.HCM",
      },
      {
        name: "Sweet & Soul Kafe",
        url: "https://firebasestorage.googleapis.com/v0/b/vuejs-bbe5d.appspot.com/o/location4.jpg?alt=media&token=0527789c-18aa-49e6-9c75-272d72006cc8",
        address: "Quận 12 , Bình Dương",
      },
      {
        name: "M.O.A 98 Hàng Buồm",
        url: "https://firebasestorage.googleapis.com/v0/b/vuejs-bbe5d.appspot.com/o/location5.jpg?alt=media&token=452212d3-8b48-4e8e-a219-ab61057835ff",
        address: "Quận 8 , Bình Dương",
      },
      {
        name: "Cafe & Boardgame",
        url: "https://firebasestorage.googleapis.com/v0/b/vuejs-bbe5d.appspot.com/o/location8.png?alt=media&token=9414a167-7c32-4220-af4e-c8082eed6e1b",
        address: "Quận 9 , Bình Dương",
      },
      {
        name: "Lighthouse Sky Bar",
        url: "https://firebasestorage.googleapis.com/v0/b/vuejs-bbe5d.appspot.com/o/location7.jpeg?alt=media&token=3ff2c14b-0641-46b6-83ab-2970a9918fbf",
        address: "Lank Mark 81 , TP.HCM",
      },
      {
        name: "Tranquil. Books & Coffee",
        url: "https://firebasestorage.googleapis.com/v0/b/vuejs-bbe5d.appspot.com/o/location6.jpg?alt=media&token=a496495f-4f07-421a-ac2f-d594ddd79b37",
        address: "Home & Town , Bình Dương",
      },
    ]);
    return {
      data,
    };
  },
};
</script>
<style scoped>
.sub__title {
  text-align: center;
  font-size: 32px;
  font-weight: bold;
}
.list__location {
  margin-top: 24px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  grid-template-rows: auto;
}
.location__item {
  border-radius: 10px;
  height: auto;
  box-shadow: 0 0 10px rgb(0 0 0 / 60%);
  max-height: 332px;
}
.location__image {
  width: 100%;
  height: 100%;
  display: block;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  object-fit: cover;
  transform: scale(1);
  transition: 0.5s ease-in-out;
}
.card__image{
    width: 100%;
    height: 75%;
    overflow: hidden;
}
.location__card {
  background: white;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}
.location__name {
  padding: 6px 12px;
  font-size: 18px;
  font-weight: 700;
  overflow: hidden;
  transition: .2s;
}
.location__name:hover{
  cursor: pointer;
  opacity: 0.5;
}
.location__address {
  padding: 0px 12px;
  white-space: nowrap;
  overflow: hidden;
}
.suggest__location{
  display: grid;
  grid-template-columns: repeat(12,1fr);
}
.suggest__image{
  display: block;
  width: 100%;
  height: 100%;
  grid-column: 2/4;
}
.suggest__content{
  grid-column: 4/11;
  align-self: center;
  justify-self: center;
  text-align: center;
}
.sub__content{
  font-weight: 700;
  font-size: 24px;
}
.sugget__submit{
  padding: 12px 8px;
  display: inline-block;
  font-size: 16px;
  font-weight: 500;
  color: white;
  background: red;
  border-radius:10px ;
  margin-top:24px ;
}
.sugget__submit:hover{
  opacity: 0.5;
}
.location__image:hover{
  transform: scale(1.2);
  cursor: pointer;
}
</style>