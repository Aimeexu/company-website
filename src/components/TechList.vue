<template>
  <section class="tech-section">
    <div class="container">
      <h2 class="section-title">技术技术</h2>
      <div class="tech-list">
        <div class="tech-item">
          <img src="/tech1.jpg" alt="技术1" />
          <p class="tech-title">远乔匠</p>
        </div>
        <div class="tech-item">
          <img src="/tech2.jpg" alt="技术2" />
          <p class="tech-title">彻咸黯</p>
        </div>
        <div class="tech-item">
          <img src="/tech3.jpg" alt="技术3" />
          <p class="tech-title">演愈控制器</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TechList'
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