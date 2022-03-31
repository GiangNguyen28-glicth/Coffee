<template>
  <div class="container">
    <div class="list__benefit shadow boder__radius">
      <div class="benefit__item" :style="{ 'flex-basis':flexBasis }" v-for="(benefit,index) in dataBenefit" :key="index" v-html="benefit.html">
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import { onMounted } from '@vue/runtime-core';
export default {
  name: "PlaceBenefit",
  setup() {
    const dataBenefit =ref([
        {
            html:'<i class="uil uil-cloud-sun icon__benefit"></i><span class="benefit__title">Bàn ngoài trời</span>',
        },
        {
            html:'<i class="uil uil-wifi icon__benefit"></i><span class="benefit__title">Wifi</span>'
        },
        {
            html:'<i class="uil uil-credit-card icon__benefit"></i><span class="benefit__title">Thanh toán bằng thẻ</span>'
        },
        {
            html:'<i class="uil uil-airplay icon__benefit"></i><span class="benefit__title">Máy lạnh</span>'
        },
        {
            html:'<i class="uil uil-headphones icon__benefit"></i><span class="benefit__title">Nhạc</span>'
        },
        {
            html:'<i class="uil uil-book icon__benefit"></i><span class="benefit__title">Đọc sách</span>'
        }
    ]);
    const flexBasis=ref(null);
    onMounted(()=>{
        flexBasis.value = (1 / dataBenefit.value.length)*100;
        flexBasis.value =`${flexBasis.value}%`;
    })
    return {
        dataBenefit,
        flexBasis
    };
  },
};
</script>

<style scoped>
.list__benefit {
  display: flex;
}
.benefit__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 6px 0px;
}
.benefit__item>>>.icon__benefit{
    font-size: 32px;
    color: var(--main-color);
}
.benefit__item>>>.benefit__title{
    font-size: 16px;
    font-weight: 500;
}
</style>