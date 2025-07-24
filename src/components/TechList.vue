<template>
  <section class="tech-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">产品展示</h2>
        <router-link to="/product-center" class="more-btn">查看更多 ></router-link>
      </div>
      <div class="tech-list">
        <div class="tech-item" v-for="(tech, index) in techs" :key="index">
          <img class="tech-img" :src="tech.img" :alt="tech.title" />
          <p class="tech-title">{{ tech.title }}</p>
          <p class="tech-content">{{ tech.content }}</p>
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
        { img: 'https://www.controlway.cn/uploads/allimg/191202/1-191202101T4-53.jpg', title: '电感传感器', content: '传统的电感式传感器的工作原理是：由电感式传感器的传统电路 —— 线圈振荡器产生高频磁场，并通过感应面向外发送。' },
        { img: 'https://www.controlway.cn/uploads/allimg/191202/1-191202101T4-53.jpg', title: '电感传感器', content: '传统的电感式传感器的工作原理是：由电感式传感器的传统电路 —— 线圈振荡器产生高频磁场，并通过感应面向外发送。' },
        { img: 'https://www.controlway.cn/uploads/allimg/191202/1-191202101T4-53.jpg', title: '电感传感器', content: '传统的电感式传感器的工作原理是：由电感式传感器的传统电路 —— 线圈振荡器产生高频磁场，并通过感应面向外发送。' },
        { img: 'https://www.controlway.cn/uploads/allimg/191202/1-191202101T4-53.jpg', title: '电感传感器', content: '传统的电感式传感器的工作原理是：由电感式传感器的传统电路 —— 线圈振荡器产生高频磁场，并通过感应面向外发送。' },
        { img: 'https://www.controlway.cn/uploads/allimg/191202/1-191202101T4-53.jpg', title: '电感传感器', content: '传统的电感式传感器的工作原理是：由电感式传感器的传统电路 —— 线圈振荡器产生高频磁场，并通过感应面向外发送。' },
    
      ]
    }
  }
}
</script>

<style scoped>
.tech-section {
  padding: 20px 0;
  background-color: #ffffff;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
}
.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
}

.section-title {
  font-size: 28px;
  text-align: center;
  flex: 1;
  margin: 0;
}

.more-btn {
  background: linear-gradient(135deg, #2a5db0, #1f4580);
  color: white;
  text-decoration: none;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 500;
  transition: all 0.3s ease;
  white-space: nowrap;
  box-shadow: 0 2px 8px rgba(42, 93, 176, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.more-btn:hover {
  background: linear-gradient(135deg, #1f4580, #2a5db0);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(42, 93, 176, 0.4);
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
  /* border: 1px solid rgb(160, 154, 154); */
}
.tech-item:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(0,0,0,0.2);
  border-radius: 6px;
}
.tech-item img {
  width: 100%;
  height: 160px;
  object-fit: cover;
}
.tech-img {
  border-radius: 6px;
  border: 1px solid #f6f2f2; /* 边框颜色和宽度 */
}
.tech-title {
  font-size: 16px;
  font-weight: bold;
  margin-top: 12px;
  margin-left: 6px;
  color: #333;
  text-align: left;
}
.tech-content {
  font-size: 12px;
  margin-left: 6px;
  text-align: left;
  display: -webkit-box; /* 启用弹性盒模型 */
  -webkit-box-orient: vertical; /* 垂直排列子元素 */
  line-clamp: 2;
  -webkit-line-clamp: 2; /* 限制最多显示 2 行 */
  overflow: hidden; /* 隐藏超出内容 */
  text-overflow: ellipsis; /* 超出部分用省略号表示 */
}
</style>