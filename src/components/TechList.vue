<template>
  <section class="tech-section">
    <div class="container">
      <h2 class="section-title">产品展示</h2>
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
        { img: 'https://www.controlway.cn/uploads/allimg/191202/1-191202101T4-53.jpg', title: '电感传感器' },
        { img: 'https://www.controlway.cn/uploads/allimg/191202/1-191202101T4-53.jpg', title: '电感传感器' },
        { img: 'https://www.controlway.cn/uploads/allimg/191202/1-191202101T4-53.jpg', title: '电感传感器' },
        { img: 'https://www.controlway.cn/uploads/allimg/191202/1-191202101T4-53.jpg', title: '电感传感器' },
        { img: 'https://www.controlway.cn/uploads/allimg/191202/1-191202101T4-53.jpg', title: '电感传感器' },
    
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
  background-color: rgb(245, 251, 251);
  /* border: 1px solid rgb(160, 154, 154); */
  border-radius: 10px;
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