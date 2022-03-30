<template>
  <div class="container">
    <div class="list__image">
      <div
        class="image__one"
        :style="{ backgroundImage: 'url(' + dataImage[0] + ')' }"
      ></div>
      <div
        class="image__two"
        :style="{ backgroundImage: 'url(' + dataImage[1] + ')' }"
      ></div>
      <div class="image__three">
        <div
          class="image__three-one"
          :style="{ backgroundImage: 'url(' + dataImage[2] + ')' }"
        ></div>
        <div
          class="image__three-two"
          :style="{ backgroundImage: 'url(' + dataImage[3] + ')' }"
        ></div>
        <div
          class="image__three-three"
          :style="{ backgroundImage: 'url(' + dataImage[5] + ')' }"
        >
          <span>+{{dataImage.length-4}} ảnh</span>
        </div>
      </div>
      <router-link class="view__image" :to="{ name: 'home-router', param: {} }">
        <i class="uil uil-image-search"></i>
        <span>Xem tất cả ảnh ({{ dataImage.length }})</span>
      </router-link>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "ListImage",
  setup() {
    const dataImage = ref([
      "https://firebasestorage.googleapis.com/v0/b/vuejs-bbe5d.appspot.com/o/skyline1.jpg?alt=media&token=f264daa8-7142-40d9-b410-a171e0f976ba",
      "https://firebasestorage.googleapis.com/v0/b/vuejs-bbe5d.appspot.com/o/skyline2.jpg?alt=media&token=5f27d84b-350f-4c46-a3a4-ef3498d7ae3e",
      "https://firebasestorage.googleapis.com/v0/b/vuejs-bbe5d.appspot.com/o/skyline3.jpg?alt=media&token=521abc72-a89f-474b-b473-8f96f125871e",
      "https://firebasestorage.googleapis.com/v0/b/vuejs-bbe5d.appspot.com/o/skyline4.jpg?alt=media&token=3b0f7c10-e96b-4131-9156-2de98cd09556",
      "https://firebasestorage.googleapis.com/v0/b/vuejs-bbe5d.appspot.com/o/skyline5.jpg?alt=media&token=acc288f8-b734-4db9-a41f-97e90d7c8711",
      "https://firebasestorage.googleapis.com/v0/b/vuejs-bbe5d.appspot.com/o/skyline6.jpg?alt=media&token=8aabb519-d9b6-4320-855b-86f94455610f",
    ]);
    return {
      dataImage,
    };
  },
};
</script>

<style scoped>
.list__image {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 10px;
  position: relative;
}
.image__one,
.image__two {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
  position: relative;
}
.image__one:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 1;
  transition: all 0.15s ease;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}
.image__two::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 1;
  transition: all 0.15s ease;
}
.image__one:hover::before,
.image__two:hover::before,
.image__three-one:hover::before,
.image__three-two:hover::before {
  background-color: rgba(0, 0, 0, 0.4);
  cursor: pointer;
}
.image__one {
  grid-row: 1/3;
  height: 360px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}
.image__two {
  grid-row: 1/3;
  max-height: 360px;
}
.image__three {
  display: grid;
  max-height: 360px;
  grid-row: 1/3;
  gap: 10px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
}
.image__three-one,
.image__three-two,
.image__three-three {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
  max-height: 200px;
  cursor: pointer;
}
.image__three-one {
  grid-column: 1/3;
  grid-row: 1/2;
  border-top-right-radius: 10px;
  position: relative;
}
.image__three-one::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 1;
  transition: all 0.15s ease;
  border-top-right-radius: 10px;
}
.image__three-two {
  position: relative;
}
.image__three-two::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 1;
  transition: all 0.15s ease;
}
.view__image {
  position: absolute;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6666666666666666);
  padding: 6px;
  margin: 12px;
  cursor: pointer;
  border-radius: 6px;
  z-index: 3;
}
.image__three-three {
  border-bottom-right-radius: 10px;
  position: relative;
}
.image__three-three::after {
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
.image__three-three span{
  position: absolute;
  top: 45%;
  left: 35%;
  font-size: 18px;
  z-index: 2;
  color: #fff;
}
.view__image i {
  color: #fff;
  padding-right: 6px;
}
.view__image span {
  color: #fff;
}
</style>