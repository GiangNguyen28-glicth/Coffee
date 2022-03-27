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
          <img class="image__discount" :src="discount.url" />
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
        url: "https://firebasestorage.googleapis.com/v0/b/vuejs-bbe5d.appspot.com/o/discount9.png?alt=media&token=8976e56d-718f-4c21-843c-0fb2c7e827bf",
        address: "03 Thới Hòa, Bến Cát , Bình Dương ",
        title:
          "Order thả ga - Hoàn ngay nửa giá",
      },
      {
        name: "BitterSweet Coffee",
        url: "https://firebasestorage.googleapis.com/v0/b/vuejs-bbe5d.appspot.com/o/discount5.jpg?alt=media&token=fa19c8af-c400-4581-9f70-e15919ba95c8",
        address: "03 Thới Hòa, Bến Cát , Bình Dương ",
        title: "Mừng Khai Trương - Ưu đãi 20% toàn bộ menu",
      },
      {
        name: "Foglian Cafe - Tây Sơn",
        url: "https://firebasestorage.googleapis.com/v0/b/vuejs-bbe5d.appspot.com/o/discount3.jpg?alt=media&token=dacd67b1-64a9-4ee3-b276-e91ce45d60a4",
        address: "03 Thới Hòa, Bến Cát , Bình Dương ",
        title: "Giảm 20% tổng hóa đơn khi đặt trên các App Giao Hàng",
      },
      {
        name: "Highlands Coffee - PVI Tower",
        url: "https://firebasestorage.googleapis.com/v0/b/vuejs-bbe5d.appspot.com/o/discount6.jpg?alt=media&token=a2d7e9b0-e104-4177-a8e0-3609739ae506",
        address: "03 Thới Hòa, Bến Cát , Bình Dương ",
        title: "Ngồi nhà đặt trước, Lấy nước rinh quà",
      },
      {
        name: "The Pink House Coffee Lounge",
        url: "https://firebasestorage.googleapis.com/v0/b/vuejs-bbe5d.appspot.com/o/discount7.jpg?alt=media&token=f20a645d-5680-4793-85c5-f33e4ed1a221",
        address: "03 Thới Hòa, Bến Cát , Bình Dương ",
        title: "Deal khủng Cá Tháng Tư - Mua 3 tặng 1 đồ uống bất kỳ",
      },
      {
        name: "Artemis Pastry & Coffee Shop",
        url: "https://firebasestorage.googleapis.com/v0/b/vuejs-bbe5d.appspot.com/o/discount8.jpg?alt=media&token=3e5258c1-3bc3-419d-972d-2bb6135103b4",
        address: "03 Thới Hòa, Bến Cát , Bình Dương ",
        title: "Ưu đãi 20% toàn bộ đồ uống từ ngày 01/07 - 15/07",
      },
      {
        name: "The Pink House Coffee Lounge",
        url: "https://firebasestorage.googleapis.com/v0/b/vuejs-bbe5d.appspot.com/o/discount4.jpg?alt=media&token=04a60182-488d-4ecc-9217-d9df0f91fa84",
        address: "03 Thới Hòa, Bến Cát , Bình Dương ",
        title: "Mừng Khai Trương - Ưu đãi 30% toàn bộ menu",
      },
      {
        name: "Gather Wellness Complex",
        url: "https://firebasestorage.googleapis.com/v0/b/vuejs-bbe5d.appspot.com/o/discount1.jpg?alt=media&token=f8086b2f-9707-4fe0-82da-9be8fb1af559",
        address: "03 Thới Hòa, Bến Cát , Bình Dương ",
        title: "Combo rộn ràng - Ưu đãi ngập tràn",
      },
      {
        name: "NestCoffe ZVOER",
        url: "https://ik.imagekit.io/reviewcafe/promo/137543443_127473722541606_7012844933023691237_n_RH6NuRef8I_.png",
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
.image__item{
  height: 68%;
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
   max-height: 400px;
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
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.item__address p {
  padding: 0px 0px 6px 12px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>