<template>
  <div class="container">
    <div class="review__container">
      <div class="review__section shadow boder__radius">
        <div class="review__title">
          <h3>Đánh giá tự cộng đồng (0)</h3>
          <button>Viết đánh giá</button>
        </div>
        <div class="review__description">
          <div class="review__image">
            <img src="@/assets/images/review.png" alt="" />
          </div>
          <div class="review__solgant">
            <h2>Bạn đã từng đến đây ?</h2>
            <span
              >Hãy chia sẻ trải nghiệm và cảm nhận của bản thân cho mọi người
              cùng biết
            </span>
            <span
              >Những review chất lượng sẽ được xuất hiện ở bảng tin đấy!</span
            >
          </div>
        </div>
        <hr>
        <ReviewComment />
      </div>
    </div>
  </div>
</template>

<script>
import ReviewComment from "@/components/Place/ReviewComment.vue";
export default {
  name: "ReviewPlace",
  components:{ReviewComment},
  setup() {
    return {};
  },
};
</script>

<style scoped>
.review__container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  gap: 10px;
}
.review__section {
  grid-column: 1/3;
  padding: 12px;
}
.review__title {
  display: flex;
  justify-content: space-between;
}
.review__title h3 {
  font-size: 24px;
  font-weight: bold;
}
.review__title button {
  padding: 6px;
  border: 0px solid;
  outline: none;
  background: var(--main-color);
  color: #fff;
  cursor: pointer;
  border-radius: 6px;
}
.review__description {
  margin-top: 16px;
  border-radius: 12px;
  margin-bottom: 16px;
  display: flex;
  background: linear-gradient(90deg, #ffb8b8, #ffddd8);
}
.review__image {
  width: 30%;
}
.review__description image {
  width: 100%;
  max-height: 100%;
  
}
.review__solgant {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.review__solgant h2 {
  padding: 16px;
}
.review__solgant span {
  padding: 4px 16px;
}
</style>