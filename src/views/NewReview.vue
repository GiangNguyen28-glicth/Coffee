<template>
  <Header />
  <div class="container margin__header shadow boder__radius">
    <h1 class="sub__title">Viết Review</h1>
    <div class="line__title"></div>
    <div class="rate__content">
      <div class="rate__vote">
        <div class="form__rate">
          <h3 class="sub__content">Xếp hạng của bạn</h3>
          <div class="list__rate">
            <div
              class="item"
              v-for="(option, index) in listOption"
              :key="index"
            >
              <span class="item__option">{{ option }}</span>
              <div class="item__start">
                <i
                  class="uil uil-star icon__rate"
                  v-for="(data, index) in rate"
                  :key="index"
                ></i>
              </div>
              <div class="rate__status">
                <span class="rate__state-size">Tuyệt vời</span>
              </div>
            </div>
          </div>

          <!-- Rate title -->
          <div class="rate__title">
            <h3 class="sub__content">Đánh giá của bạn</h3>
            <div class="border__radius container__area">
              <textarea
                class="ant__input"
                name=""
                id=""
                placeholder="Nhập nội dung đánh giá"
              ></textarea>
            </div>
            <p class="sub__description">0 ký tự ( tối thiểu 10 ký tự )</p>
          </div>
        </div>

        <div class="upload__image">
          <div class="upload">
            <i class="uil uil-camera camera__icon"></i>
            <p>Thêm ảnh</p>
            <input type="file" style="display: none" accept="image/*" />
          </div>
        </div>

        <div class="review__anonymous">
          <h3>Đánh giá ẩn danh</h3>
          <div class="btn__anonymous">
            <div
              @click="switchBtn = !switchBtn"
              class="btn__anonymous-wrapper"
              :class="{ on: switchBtn, off: !switchBtn }"
            >
              <div class="circle"></div>
            </div>
          </div>
        </div>
        <p class="sub__anonymous">
          Tên của bạn sẽ hiển thị như h*****g và không hiển thị trên dòng thời
          gian của bạn
        </p>
        <button class="submit__review">Gửi đánh giá của bạn</button>
      </div>

      <!-- Column2 -->
      <div class="rate__address">
        <h3 class="sub__content">Địa điểm</h3>
        <div class="choose__address">
          <i class="uil uil-location-point location__icon"></i>
          <span class="sub__choose">Nhấn vào để chọn địa điểm</span>
        </div>
        <h3 class="sub__content">Đánh giá gần đây</h3>
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
  name: "NewReview",
  components: {
    Header,
    Footer,
  },
  setup() {
    const rate = ref(["Tệ", "Bình thường", "Khá", "Tốt", "Rất Tốt"]);
    const listOption = ref([
      "Vị trí",
      "Không gian",
      "Đồ uống",
      "Phục vụ",
      "Giá cả",
    ]);
    const switchBtn = ref(false);
    return {
      listOption,
      rate,
      switchBtn,
    };
  },
};
</script>

<style scoped>
.sub__title {
  text-align: center;
  padding: 12px;
}
.line__title {
  background: #ccc;
  margin: auto;
  height: 2px;
  width: 98%;
}
.sub__content {
  padding: 12px;
  font-weight: bold;
}
.rate__content {
  margin-top: 24px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}
.list__rate {
  /* grid-template-rows: repeat(5, 1fr); */
}
.item {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}
.item__option {
  grid-column: 1/2;
  padding: 12px 12px;
  font-size: 18px;
  font-weight: bold;
}
.item__start {
  grid-column: 2/4;
  justify-self: center;
  align-self: center;
}
.icon__rate {
  font-size: 32px;
  padding: 0px 4px;
}
.rate__status {
  grid-column: 4/5;
  position: relative;
}
.rate__state-size {
  position: absolute;
  padding: 6px 12px;
  background: red;
  text-align: center;
  top: 20%;
  color: white;
  border-radius: 12px;
}

.container__area {
  border: 1px solid;
  border-radius: 10px;
  margin-left: 12px;
  opacity: 0.5;
  transition: 0.2s;
}
.container__area:hover {
  opacity: 1;
}
.ant__input {
  height: 118px;
  width: 97%;
  max-height: 222px;
  overflow-y: hidden;
  resize: none;
  margin: 12px;
  outline: none;
  border: 0px;
  font-size: 16px;
}
.ant__input:hover {
  text-overflow: ellipsis;
}
.sub__description {
  padding: 6px 0px;
  text-align: right;
  font-style: italic;
}
.upload__image {
  margin-left: 12px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 6px;
}
.upload {
  display: flex;
  width: 104px;
  height: 104px;
  margin-right: 8px;
  margin-bottom: 8px;
  border: 1px solid;
  border-radius: 12px;
  cursor: pointer;
  text-align: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.camera__icon {
  font-size: 24px;
}
.review__anonymous {
  margin-left: 12px;
  margin-top: 12px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
.btn__anonymous {
  display: flex;
  align-items: right;
  justify-content: flex-end;
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
.sub__anonymous {
  margin-left: 12px;
}
.submit__review {
  margin:16px 0px 16px 12px;
  background: var(--main-color);
  color: #fff;
  border-radius: 10px;
  font-size: 14px;
  padding: 12px;
}
.submit__review:hover{
  cursor: pointer;
  opacity: 0.6;
}
.rate__address {
}
.choose__address {
  cursor: pointer;
  border-radius: 10px;
  border: 1px dashed #d9d9d9;
  margin:16px 30px 16px 0px;
  text-align: center;
  /* min-height: 80px; */
}
.location__icon{
  font-size:20px ;
  font-weight: 400;
}
.sub__choose{
  font-size: 18px;
  padding: 30px 0px;
  display: inline-block; 
}
</style>