<template>
  <div class="container overlow">
    <div class="container__child">
      <i
        ref="prev"
        @click="prevSlide"
        class="uil uil-angle-left-b pre__icon"
        :style="stylePrev"
      ></i>
      <i
        ref="next"
        @click="nextSlide"
        class="uil uil-angle-right-b next__icon"
      ></i>
      <h3 class="sub__title">Sở thích của bạn</h3>
      <div class="line"></div>
      <div class="list__item" ref="inner" :style="innerStyles">
        <div class="item" v-for="(item, index) in data" :key="index">
          <div class="item__body">
            <h3 class="item__description">{{ item.title }}</h3>
            <img class="item__image" :src="item.url" alt="" />
          </div>
        </div>
      </div>
    </div>

    <div class="list__circle">
      <div
        class="circle"
        v-for="(slide, index) in data"
        :key="index"
        :class="{ active: currentIndex === index }"
        @click="swipeSlide(index)"
      ></div>
    </div>
  </div>
</template>

<script>
import { onMounted, onUnmounted, ref } from "vue";
export default {
  name: "Slide2",
  setup() {
    const step = ref(0);
    const innerStyles = ref({});
    const inner = ref(null);
    const stylePrev = ref({});
    const transitioning = ref(false);
    const slideInterval = ref(null);
    const currentIndex = ref(0);
    const triggerInterval = ref(false);
    const prev = ref(null);
    const next = ref(null);
    const data = ref([
      {
        title: "Đọc sách",
        url: "https://firebasestorage.googleapis.com/v0/b/vuejs-bbe5d.appspot.com/o/book.jpg?alt=media&token=b6c7b3a0-9131-48e0-a05f-f1aba1c78f71",
      },
      {
        title: "Thư giãn",
        url: "https://firebasestorage.googleapis.com/v0/b/vuejs-bbe5d.appspot.com/o/chill.png?alt=media&token=75b99baf-52f2-4dc9-9c65-d4a9d2b75145",
      },
      {
        title: "Năng động",
        url: "https://firebasestorage.googleapis.com/v0/b/vuejs-bbe5d.appspot.com/o/party.png?alt=media&token=23687ac4-f158-4b5a-b8b1-86a69371672b",
      },
      {
        title: "Học tập",
        url: "https://firebasestorage.googleapis.com/v0/b/vuejs-bbe5d.appspot.com/o/study2.png?alt=media&token=d51339d3-b05b-474e-b186-dc3556580372",
      },
      {
        title: "Làm việc",
        url: "https://firebasestorage.googleapis.com/v0/b/vuejs-bbe5d.appspot.com/o/work.jpg?alt=media&token=02d33faf-0c3b-4980-bdc2-84f2855f75b6",
      },
    ]);
    const swipeSlide = (index) => {
      if (index > data.value.length - 1) return;
      if (currentIndex.value === index) return;
      const innerWidth = inner.value.scrollWidth;
      const totalCards = data.value.length;
      if (currentIndex.value > index) {
        let temp = (innerWidth / totalCards) * (currentIndex.value - index);
        temp = `${temp}px`;
        innerStyles.value = {
          transform: `translateX(${temp})
                    translateX(-${step.value})`,
        };
        afterTransition(() => {
          for (let i = 0; i < currentIndex.value - index; i++) {
            const item = data.value.pop();
            data.value.unshift(item);
          }
          resetTranslate();
          transitioning.value = false;
          currentIndex.value = index;
        });
      } else {
        let temp =
          (innerWidth / totalCards) * (index - currentIndex.value) * -1;
        temp = `${temp}px`;
        innerStyles.value = {
          transform: `translateX(${temp})
                    translateX(-${step.value})`,
        };
        afterTransition(() => {
          for (let j = currentIndex.value; j < index; j++) {
            const item = data.value.shift();
            data.value.push(item);
          }
          resetTranslate();
          transitioning.value = false;
          currentIndex.value = index;
        });
      }
    };
    const resetTranslate = () => {
      innerStyles.value = {
        transition: "none",
        transform: `translateX(-${step.value})`,
      };
    };
    const checkCurrentIndex = (setIndex) => {
      if (setIndex > data.value.length - 1) {
        setIndex = 0;
      }
      if (setIndex < 0) {
        setIndex = data.value.length - 1;
      }
      return setIndex;
    };
    const setSlideInterval = () => {
      clearInterval(slideInterval.value);
      slideInterval.value = setInterval(() => {
        currentIndex.value++;
        currentIndex.value = checkCurrentIndex(currentIndex.value);
        triggerInterval.value = true;
        nextSlide();
        triggerInterval.value = false;
      }, 5000);
    };
    onMounted(() => {
      const innerWidth = inner.value.scrollWidth;
      const totalCards = data.value.length;
      step.value = `${innerWidth / totalCards}`;
      step.value = `${step.value}px`;
    });
    onMounted(resetTranslate);
    onMounted(setSlideInterval);
    onUnmounted(() => {
      clearInterval(slideInterval.value);
    });
    const moveLeft = () => {
      innerStyles.value = {
        transform: `translateX(-${step.value})
                    translateX(-${step.value})`,
      };
    };
    const moveRight = () => {
      innerStyles.value = {
        transform: `translateX(${step.value})
                    translateX(-${step.value})`,
      };
    };
    const afterTransition = (callback) => {
      const listener = () => {
        callback();
        inner.value.removeEventListener("transitionend", listener);
      };
      inner.value.addEventListener("transitionend", listener);
    };
    const prevSlide = () => {
      if (transitioning.value) return;
      setSlideInterval();
      transitioning.value = true;
      currentIndex.value--;
      currentIndex.value = checkCurrentIndex(currentIndex.value);
      moveRight();
      afterTransition(() => {
        const item = data.value.pop();
        data.value.unshift(item);
        resetTranslate();
        transitioning.value = false;
      });
    };
    const nextSlide = () => {
      if (transitioning.value) return;
      setSlideInterval();
      transitioning.value = true;
      if (!triggerInterval.value) {
        currentIndex.value++;
        currentIndex.value = checkCurrentIndex(currentIndex.value);
      }
      moveLeft();
      afterTransition(() => {
        const item = data.value.shift();
        data.value.push(item);
        resetTranslate();
        transitioning.value = false;
      });
    };
    return {
      prevSlide,
      nextSlide,
      data,
      innerStyles,
      inner,
      stylePrev,
      currentIndex,
      swipeSlide,
      prev,
      next,
    };
  },
};
</script>

<style scoped>
.sub__title {
  text-align: center;
  font-size: 32px;
  font-weight: bold;
}

.overlow {
  overflow: hidden;
}
.list__item {
  transition: transform 0.2s;
  white-space: nowrap;
  margin: 12px 0px;
}
.item {
  width: 32.8%;
  margin-right: 10px;
  display: inline-flex;
  /* optional */
  height: 100%;
  background-color: #39b1bd;
  color: white;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
}
.pre__icon {
  position: absolute;
  font-size: 64px;
  color: white;
  z-index: 2;
  left: 0px;
  top: 50%;
}
.next__icon {
  position: absolute;
  font-size: 64px;
  color: white;
  z-index: 2;
  right: 0;
  top: 50%;
}
.pre__icon:hover {
  cursor: pointer;
  opacity: 0.6;
  transition: 0.5s;
}
.next__icon:hover {
  cursor: pointer;
  opacity: 0.6;
  transition: 0.5s;
}
.item__body {
  width: 100%;
  height: 100%;
  position: relative;
  align-items: center;
  z-index: 1;
}
.item__image {
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  object-fit: cover;
}
.item__description {
  position: absolute;
  top: 80%;
  left: 30%;
  text-align: center;
  color: white;
  font-size: 32px;
  font-weight: bold;
}
.item__image:hover {
  cursor: pointer;
  opacity: 0.5;
  transition: 0.5s;
}
.list__circle {
  display: flex;
  justify-content: center;
  align-items: center;
}
.circle {
  border-radius: 100rem;
  background-color: #ccc;
  width: 12px;
  height: 12px;
  margin: 0px 6px;
  cursor: pointer;
}
.active {
  background: blue;
}
.container__child {
  width: 100%;
  position: relative;
  align-items: center;
}
</style>