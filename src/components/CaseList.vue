<template>
  <section class="case-section">
    <div class="container">
      <h2 class="section-title">案例展示</h2>
      <div class="case-list">
        <div class="case-item" v-for="(caseItem, index) in cases" :key="index">
          <div class="case-image">
            <img :src="caseItem.img" :alt="caseItem.title" />
          </div>
          <div class="case-info">
            <h3 class="case-title">{{ caseItem.title }}</h3>
            <p class="case-desc">{{ caseItem.description }}</p>
            <button class="btn">概况</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CaseList',
  data() {
    return {
      cases: [
        {
          img: 'https://picsum.photos/id/1011/280/160',
          title: '驱动器',
          description: '驱动器是控制机械运动的关键部件，提供精准的速度和位置控制。'
        },
        {
          img: 'https://picsum.photos/id/1012/280/160',
          title: '控制器',
          description: '控制器负责系统的逻辑运算和指令执行，确保设备稳定运行。'
        }
      ]
    }
  }
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
  gap: 48px;
}
.case-item {
  background: white;
  display: flex;
  align-items: center;
  padding: 16px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  width: 600px;
  border-radius: 8px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}
.case-item:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(0,0,0,0.2);
}
.case-image img {
  width: 280px;
  height: 160px;
  object-fit: cover;
  border-radius: 8px;
}
.case-info {
  margin-left: 24px;
  flex: 1;
}
.case-title {
  font-size: 20px;
  margin-bottom: 8px;
  color: #333;
}
.case-desc {
  font-size: 14px;
  color: #666;
  margin-bottom: 16px;
  line-height: 1.5;
}
.btn {
  padding: 8px 20px;
  background-color: #00aaff;
  border: none;
  color: white;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}
.btn:hover {
  background-color: #0088cc;
}
</style>