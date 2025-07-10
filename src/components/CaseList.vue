<template>
  <section class="case-section">
    <div class="container">
      <h2 class="section-title">案例展示</h2>
      <div class="case-list">
        <div class="case-item">
          <img src="/case1.jpg" alt="案例1" />
          <p class="case-title">标题初题</p>
          <button class="btn">概况</button>
        </div>
        <div class="case-item">
          <img src="/case2.jpg" alt="案例2" />
          <p class="case-title">标题钮器</p>
          <button class="btn">概况</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CaseList'
}
</script>

<style scoped>
.case-section {
  padding: 60px 0;
  background-color: #f7f9fc;
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
.case-list {
  display: flex;
  justify-content: center;
  gap: 32px;
}
.case-item {
  background: white;
  padding: 16px;
  text-align: center;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  width: 280px;
}
.case-item img {
  width: 100%;
  height: 160px;
  object-fit: cover;
}
.case-title {
  font-size: 16px;
  margin: 12px 0;
}
.btn {
  padding: 8px 16px;
  background-color: #00aaff;
  border: none;
  color: white;
  cursor: pointer;
}
</style>