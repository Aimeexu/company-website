<template>
  <section class="tech-section">
    <div class="container">
      <h2 class="section-title">技术技术</h2>
      <div class="tech-list">
        <div class="tech-item" v-for="(tech, index) in techs" :key="index">
          <img :src="tech.img" :alt="tech.title" />
          <p class="tech-title">{{ tech.title }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TechList',
  data() {
    return {
      techs: [
        { img: 'https://picsum.photos/id/1025/240/160', title: '远乔匠' },
        { img: 'https://picsum.photos/id/1026/240/160', title: '彻咸黯' },
        { img: 'https://picsum.photos/id/1027/240/160', title: '演愈控制器' }
      ]
    }
  }
}
</script>

<style scoped>
.tech-section {
  padding: 60px 0;
  background-color: #ffffff;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
}
.section-title {
  font-size: 28px;
  text-align: center;
  margin-bottom: 32px;
}
.tech-list {
  display: flex;
  justify-content: center;
  gap: 32px;
}
.tech-item {
  width: 240px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}
.tech-item:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(0,0,0,0.2);
}
.tech-item img {
  width: 100%;
  height: 160px;
  object-fit: cover;
}
.tech-title {
  font-size: 16px;
  margin-top: 12px;
}
</style>