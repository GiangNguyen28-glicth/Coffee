<template>
  <Header />
  <div class="container__banner">
    <div class="container mt-0">
      <div class="discount__banner">
        <div class="discount__title">
          <h1 class="sub__title">Cập nhật khuyến mãi dành cho bạn</h1>
          <h3 class="sub__description">
            Bạn đang cần tìm những quán coffee giá cả hợp lý ?
          </h3>
          <h3 class="sub__description">
            Tiết kiệm với những khuyến mãi của các quán coffee ở dưới đây . Nơi
            bạn có thể tận hưởng những ly coffee giá cả hợp lý
          </h3>
        </div>
        <div class="discount__image">
          <img
            class="discount__image-large"
            src="@/assets/images/discount.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="list__dicount">
      <div
        class="discount__item shadow"
        v-for="(discount, index) in dataDiscount"
        :key="index"
      >
        <div class="image__item">
          <img class="image__discount" src="@/assets/images/discount2.jpg" />
        </div>
        <div>
          <div class="sub__title-discount">
            {{ discount.title }}
          </div>
          <div class="item__address">
            <h3>{{ discount.name }}</h3>
            <p>{{ discount.address }}</p>
          </div>
        </div>
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
  name: "Discount",
  components: { Header, Footer },
  setup() {
    const dataDiscount = ref([
      {
        name: "MONO Coffee Lab",
        url: "",
        address: "03 Thới Hòa, Bến Cát , Bình Dương ",
        title:
          "Order thả ga - Hoàn ngay nửa giá",
      },
      {
        name: "MONO Coffee Lab",
        url: "",
        address: "03 Thới Hòa, Bến Cát , Bình Dương ",
        title: "Mừng Khai Trương - Ưu đãi 20% toàn bộ menu",
      },
      {
        name: "MONO Coffee Lab",
        url: "",
        address: "03 Thới Hòa, Bến Cát , Bình Dương ",
        title: "Giảm 20% tổng hóa đơn khi đặt trên các App Giao Hàng",
      },
      {
        name: "MONO Coffee Lab",
        url: "",
        address: "03 Thới Hòa, Bến Cát , Bình Dương ",
        title: "Ngồi nhà đặt trước, Lấy nước rinh quà",
      },
      {
        name: "MONO Coffee Lab",
        url: "",
        address: "03 Thới Hòa, Bến Cát , Bình Dương ",
        title: "Deal khủng Cá Tháng Tư - Mua 3 tặng 1 đồ uống bất kỳ",
      },
      {
        name: "MONO Coffee Lab",
        url: "",
        address: "03 Thới Hòa, Bến Cát , Bình Dương ",
        title: "Ưu đãi 20% toàn bộ đồ uống từ ngày 01/07 - 15/07",
      },
      {
        name: "MONO Coffee Lab",
        url: "",
        address: "03 Thới Hòa, Bến Cát , Bình Dương ",
        title: "Mừng Khai Trương - Ưu đãi 30% toàn bộ menu",
      },
      {
        name: "MONO Coffee Lab",
        url: "",
        address: "03 Thới Hòa, Bến Cát , Bình Dương ",
        title: "Combo rộn ràng - Ưu đãi ngập tràn",
      },
      {
        name: "MONO Coffee Lab",
        url: "",
        address: "03 Thới Hòa, Bến Cát , Bình Dương ",
        title: "Giảm 20% tổng hóa đơn khi đặt trên các App Giao Hàng",
      },
    ]);
    return {
      dataDiscount,
    };
  },
};
</script>

<style scoped>
.container__banner {
  width: 100%;
  margin-top: 97px;
  background: linear-gradient(180deg, #ffb8b8, #fbfbfb);
}
.discount__banner {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
}
.discount__title {
  grid-column: 1/7;
  align-self: center;
}
.sub__title {
  padding: 32px 0px 24px 0px;
}
.sub__description {
  padding: 6px 0px;
}
.discount__image {
  align-self: center;
  grid-column: 7/9;
}
.discount__image-large {
  display: block;
  width: 100%;
  height: 100%;
  padding: 32px 0px 24px 0px;
  object-fit: cover;
}
.list__dicount {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
.discount__item {
  border-radius: 10px;
  min-width: 0;
  cursor: pointer;
}
.image__discount {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.sub__title-discount {
  color: #e03;
  font-size: 16px;
  font-weight: 700;
  border-bottom: 1px solid #ebebeb;
  padding: 12px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.item__address h3 {
  font-weight: bold;
  padding: 12px;
}
.item__address p {
  padding: 0px 0px 6px 12px;
}
</style>