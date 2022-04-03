<template>
  <div class="container__filter-detail">
    <div class="filter__header">
      <h3>Địa điểm</h3>
      <i class="uil uil-angle-down icon__size24" @click="isRotate=!isRotate" :class="{onrotate:isRotate,offrotate:!isRotate}"></i>
    </div>
    <div class="pss">
      <div class="filter__content">
        <div class="content__item">
          <input type="checkbox" id="1" />
          <label for="1">Bình Dương</label>
        </div>
        <div class="content__item">
          <input type="checkbox" id="" />
          <label for="">Thủ Dầu Một</label>
        </div>
        <div class="content__item">
          <input type="checkbox" id="" />
          <label for="">Bến Cát</label>
        </div>
        <div class="content__item">
          <input type="checkbox" id="" />
          <label for="">Thủ Đức</label>
        </div>
        <div class="content__item">
          <input type="checkbox" id="" />
          <label for="">Quận 1</label>
        </div>
        <div class="content__item">
          <input type="checkbox" id="" />
          <label for="">Quận 2</label>
        </div>
        <div class="content__item">
          <input type="checkbox" id="" />
          <label for="">Quận 3</label>
        </div>
        <div class="content__item">
          <input type="checkbox" id="" />
          <label for="">Quận 4</label>
        </div>
        <div class="content__item">
          <input type="checkbox" id="" />
          <label for="">Quận 5</label>
        </div>
        <div class="content__item">
          <input type="checkbox" id="" />
          <label for="">Quận 6</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
export default {
  name: "Filter",
  setup() {
    const isRotate=ref(false);

    return {isRotate};
  },
};
</script>

<style>
.container__filter-detail {
  padding:6px 12px;
  margin-bottom:4px ;
}
.filter__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}
.filter__header h3 {
  font-weight: bold;
  font-size: 16px;
}
.filter__content {
  padding: 8px;
  display: grid;
  gap: 10px;
  max-height: 222px;
  overflow: hidden;
  overflow-y: scroll;
}
.content__item {
  display: flex;
  align-items: center;
}
.content__item input {
  width: 16px;
  height: 16px;
  cursor: pointer;
}
.content__item label {
  padding-left: 8px;
  font-size: 16px;
  color: black;
  cursor: pointer;
}
.filter__content::-webkit-scrollbar {
  width: 6px;
  height: 6px;
  margin-right: 12px;
}
.filter__content::-webkit-scrollbar-thumb {
  background: #ccc;
  border-radius: 100rem;
}
/* .filter__content::-webkit-scrollbar-track{
  background: rgb(230, 226, 226);
} */
.pss{
  padding-right:8px ;
}
.onrotate{
  animation: rotateon .25s forwards;
}
.offrotate{
   animation: rotateoff .25s forwards;
}
@keyframes rotateon {
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(-90deg);
  }
}
@keyframes rotateoff {
  from{
    transform: rotate(-90deg);
  }
  to{
    transform: rotate(0deg);
  }
}
.onshow{
  display: block;
}
.onhidden{
  display: none;
}
</style>