<template>
  <div class="box__container shadow">
    <h3>Địa điểm nổi bật</h3>
    <hr />
    <div class="box__content">
      <div class="box__content-wrapper">
        <router-link :to="{ name: 'profile-router', param: {} }">
          <div class="content__wrapper">
            <div class="avatar">
              <img src="@/assets/images/location3.jpg" alt="" />
            </div>
          </div>
        </router-link>
      </div>
      <div class="title">
        <h4>Five O'Clock Tea</h4>
        <span>5B Tuệ Tĩnh, Hai Bà Trưng</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExploreBox",
  setup() {},
};
</script>

<style>
.box__container {
  padding: 12px;
  border-radius: 12px;
}
.box__container > h3 {
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  padding-bottom: 14px;
}
.box__content {
  display: flex;
  padding: 8px 0px;
  align-items: center;
}
.box__content-wrapper{
  width: 50px;
  height: 50px;
}
.box__content a {
  padding: 6px 0px;
}
.content__wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}
.avatar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.avatar img {
  width: 100%;
  height: 100%;
  display: block;
  background-position: 50%;
  object-fit: cover;
  border-radius: 6px;
}
.title {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left:8px ;
}
.title h4{
  font-size: 16px;
}
</style>