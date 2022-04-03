<template>
  <Header />
  <div class="container__search margin__header">
    <div class="container">
      <div class="container__grid">
        <div class="container__filter">
          <div class="map shadow"></div>
          <div class="filter shadow">
            <h3>Lọc kết quả</h3>
            <hr />
            <div class="time__working">
              <div class="time__title">
                <h3>Giờ mở cửa</h3>
                <i class="uil uil-angle-down icon__size24"></i>
              </div>
              <div class="radio__option">
                <div class="select">
                  <input type="radio" id="all" name="selected" />
                  <label for="all">Tất cả</label><br />
                </div>
                <div class="select">
                  <input type="radio" id="opening" name="selected" />
                  <label for="opening">Đang mở cửa</label><br />
                </div>
              </div>
            </div>
            <Filter />
            <Filter />
            <Filter />

          </div>
        </div>
        <div class="list__shop">
          <div class="information__filter">
            <div class="quantity__title">
              <h3>387<span>địa điểm</span></h3>
            </div>
            <div class="sort">
              <h3>Sắp xếp theo:</h3>
              <select name="" id="">
                <option value="" selected="selected">Mặc định</option>
                <option value="">Gần nhất</option>
                <option value="">Đánh giá tốt nhất</option>
              </select>
            </div>
          </div>
          <ShopCoffee />
          <ShopCoffee />
          <ShopCoffee />
          <ShopCoffee />
          <ShopCoffee />
          <ShopCoffee />
          <ShopCoffee />
          <ShopCoffee />
          <ShopCoffee />
          <ShopCoffee />
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import ShopCoffee from "@/components/Search/ShopCoffee.vue";
import Filter from "@/components/Search/Filter.vue";
export default {
  name: "Search",
  components: { Header, Footer, ShopCoffee,Filter },
  setup() {
    return {};
  },
};
</script>

<style scoped>
.container__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}
.container__filter {
  grid-column: 1/2;
}
.list__shop {
  grid-column: 2/5;
}
.information__filter {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
.quantity__title {
  display: flex;
}
.quantity__title h3 {
  font-weight: bold;
}
.quantity__title h3 span {
  font-size: 18px;
  font-weight: 500;
  padding: 0px 6px;
}
.sort {
  display: flex;
  justify-content: center;
  align-items: center;
}
.sort h3 {
  font-weight: bold;
  padding: 0px 6px;
}
.sort select {
  font-size: 14px;
  max-width: 150px;
  padding: 7px 40px 7px 15px;
  border: 1px solid #e5e5e5;
}
.sort select * {
  padding: 12px;
  border-radius: 6px;
}
.map {
  background: url("~@/assets/images/map.png") top center / cover no-repeat;
  position: relative;
  cursor: pointer;
  width: 100%;
  height: 200px;
  border-radius: 12px;
  margin-bottom: 20px;
}
.filter {
  border-radius: 12px;
  padding: 12px;
}
.filter h3 {
  font-weight: bold;
  font-size: 18px;
}
.time__working{
  padding: 12px;
}
.time__title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}
.time__title h3 {
  font-weight: bold;
  font-size: 16px;
}
.radio__option{
  padding: 8px;
}
.select {
  display: flex;
  align-items: center;
  margin-bottom:4px ;
  
}
.select label {
  padding-right: 8px;
  padding-left: 8px;
  font-size: 16px;
  color: black;
  cursor: pointer;
  
}
.select input{
  width: 16px;
  height: 16px;
  cursor: pointer;
}

</style>