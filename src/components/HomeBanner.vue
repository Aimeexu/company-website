<template>
  <section class="home-banner">
    <div class="carousel">
      <div v-for="(image, index) in images" :key="index" class="carousel-item" :class="{ active: index === currentIndex }">
        <img :src="image" alt="banner image" />
      </div>
      <button class="prev" @click="prev">‹</button>
      <button class="next" @click="next">›</button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomeBanner',
  data() {
    return {
      images: [
        'https://picsum.photos/id/1018/1000/400',
        'https://picsum.photos/id/1015/1000/400',
        'https://picsum.photos/id/1019/1000/400'
      ],
      currentIndex: 0,
      timer: null
    }
  },
  mounted() {
    this.startAutoPlay();
  },
  beforeUnmount() {
    clearInterval(this.timer);
  },
  methods: {
    startAutoPlay() {
      this.timer = setInterval(() => {
        this.next();
      }, 3000);
    },
    next() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
    prev() {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    }
  }
}
</script>

<style scoped>
.home-banner {
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
}
.carousel {
  position: relative;
  width: 100%;
  height: 100%;
}
.carousel-item {
  position: absolute;
  top: 0;
  left: 100%;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: all 0.5s ease;
}
.carousel-item.active {
  left: 0;
  opacity: 1;
  z-index: 1;
}
.carousel-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.prev, .next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0,0,0,0.3);
  border: none;
  color: white;
  font-size: 2rem;
  padding: 0 12px;
  cursor: pointer;
  user-select: none;
}
.prev {
  left: 10px;
}
.next {
  right: 10px;
}
</style>