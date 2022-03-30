<template>
  <Header />
  <div class="container margin__header">
    <div class="place__container shadow">
      <div class="place__info">
        <div class="place__name">
          <h3>LAB Coffee Roasters</h3>
          <i class="uil uil-bookmark-full"></i>
        </div>
        <p>
          LAB là viết tắt của Love All Beans, chúng tôi yêu thích việc tự rang
          và thử nếm các loại cà phê đặc sản các vùng miền. Các hạt cà phê được
          rang mới mỗi tuần, từ Ethiopia, panama, kenya, lâm đồng
        </p>
        <div class="place__address">
          <i class="uil uil-location-pin-alt"></i>
          <span>14 Phạm Huy Thông, Ba Đình</span>
          <span>-</span>
          <router-link :to="{name:'home-router'}">Xem đường đi</router-link>
        </div>
      </div>
      <ListImage />
      <PlaceInfo />
    </div>
  </div>
  <Footer />
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import ListImage from "@/components/Place/ListImage.vue";
import PlaceInfo from "@/components/Place/PlaceInfo.vue";
export default {
  name: "Place",
  components: { Header, Footer,ListImage,PlaceInfo },
  setup() {},
};
</script>

<style scoped>
.place__container {
  border-radius: 12px;
  padding: 16px;
}
.place__info {
  display: flex;
  flex-direction: column;
}
.place__name {
  display: flex;
  justify-content: space-between;
}
.place__name h3 {
  font-weight: bold;
  font-size: 24px;
}
.place__name i {
  font-size: 24px;
  color: var(--main-color);
}
.place__info p{
  margin-right:40px;
  padding: 6px 0px;
}
.place__address a{
  color: red;
  font-weight: bold;
}
.place__address i{
  padding-right:6px ;
}
</style>