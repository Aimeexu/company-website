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
            <button class="btn">详情 ></button>
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
          title: '工程机械',
          description: '近些年来，许多大型的工程建设项目相继上马，市场对工程机械的需求呈猛增势态。而项目的按期完工，离不开这些车辆设备持续稳定的运行。'
        },
        {
          img: 'https://picsum.photos/id/1012/280/160',
          title: '汽车装配',
          description: '现代化汽车生产对设备的性能提出了更加苛刻的要求。科瑞针对性的产品，可应对汽车生产中的各种需求。全金属封装传感器、耐高温传感器、安全防护产品、RFID等，在焊装、涂装及整个生产流水线上实现自动控制，有效提高生产效率。'
        }
      ]
    }
  }
}
</script>

<style scoped>
.case-section {
  padding: 0;
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
  background-color: #f7f9fc;
  display: flex;
  align-items: center;
  padding: 16px;
  /* box-shadow: 0 2px 6px rgba(0,0,0,0.1); */
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
  height: 180px;
  object-fit: cover;
  border-radius: 6px;
}
.case-info {
  margin-left: 24px;
  flex: 1;
}
.case-title {
  font-size: 20px;
  margin-bottom: 8px;
  color: #333;
  text-align: left;
}
.case-desc {
  font-size: 14px;
  color: #666;
  margin-bottom: 16px;
  line-height: 1.5;
  text-align: left;
  display: -webkit-box; /* 启用弹性盒模型 */
  -webkit-box-orient: vertical; /* 垂直排列子元素 */
  line-clamp: 2;
  -webkit-line-clamp: 4; /* 限制最多显示 2 行 */
  overflow: hidden; /* 隐藏超出内容 */
  text-overflow: ellipsis; /* 超出部分用省略号表示 */
}
.btn {
  padding: 8px 20px;
  border: none;
  color: #00aaff;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease;
  display: block;        /* 让按钮独占一行 */
  margin-left: 0;        /* 确保没有左边距 */
  margin-right: auto;    /* 可选：防止右边距撑开 */
}
.btn:hover {
  background-color: #7a7d7f;
  color: white;
}
</style>