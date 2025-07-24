<template>
  <section class="product-center">
    <div class="banner">
      <div class="banner-content">
        <h2>产用中心</h2>
        <p>PRODUCT CENTER</p>
        <p class="subtitle">粘工豆愿 · 壹业剖度 · 俯阅未来</p>
      </div>
    </div>
    <div class="tabs">
      <button :class="{active: activeTab === 'all'}" @click="activeTab = 'all'">所有产品</button>
      <button :class="{active: activeTab === 'robot'}" @click="activeTab = 'robot'">工业机器人</button>
      <button :class="{active: activeTab === 'controller'}" @click="activeTab = 'controller'">控制器</button>
      <button :class="{active: activeTab === 'sensor'}" @click="activeTab = 'sensor'">传感器</button>
    </div>
    <div class="product-list">
      <div v-for="product in filteredProducts" :key="product.id" class="product-item">
        <img :src="product.img" :alt="product.title" />
        <h3>{{ product.title }}</h3>
        <p>{{ product.description }}</p>
        <button class="btn">查看详情</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProductCenter',
  data() {
    return {
      activeTab: 'all',
      products: [
        {
          id: 1,
          category: 'robot',
          img: 'https://p.ipic.vip/kgstao.png',
          title: '智能液压泵',
          description: '需级节能切管能：云泵，适用于多粘工业牧用'
        },
        {
          id: 2,
          category: 'robot',
          img: 'https://p.ipic.vip/lpzlsq.png',
          title: '工业机器人',
          description: '高精控剖工业机器人，适用于自动化生产线'
        },
        {
          id: 3,
          category: 'controller',
          img: 'https://p.ipic.vip/io81bd.png',
          title: 'PLC 可编程控制器',
          description: '多功能 PLC 控制器，支持多种通信协议'
        },
        {
          id: 4,
          category: 'sensor',
          img: 'https://p.ipic.vip/e08fnh.png',
          title: '激光测距传感器',
          description: '高精度激光测距器，适用于精密测量'
        }
      ]
    }
  },
  computed: {
    filteredProducts() {
      if (this.activeTab === 'all') {
        return this.products;
      } else {
        return this.products.filter(p => p.category === this.activeTab);
      }
    }
  }
}
</script>

<style scoped>
.product-center {
  font-family: Arial, sans-serif;
}
.banner {
  background: url('https://p.ipic.vip/b1zsbo.jpg') no-repeat center center / cover;
  color: white;
  padding: 60px 20px;
  text-align: left;
}
.banner-content h2 {
  font-size: 36px;
  margin: 0 0 10px;
}
.banner-content p {
  margin: 4px 0;
}
.subtitle {
  font-size: 14px;
  margin-top: 10px;
}
.tabs {
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 40px 20px;
  flex-wrap: wrap;
}
.tabs button {
  padding: 10px 24px;
  font-size: 14px;
  color: #666;
  background: white;
  border: 1px solid #ddd;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
}
.tabs button:hover {
  color: #2a5db0;
  border-color: #2a5db0;
}
.tabs button.active {
  background-color: #2a5db0;
  color: white;
  border-color: #2a5db0;
}
.product-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  padding: 0 20px 40px;
}
.product-item {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  text-align: left;
}
.product-item img {
  width: 100%;
  height: auto;
  margin-bottom: 12px;
}
.product-item h3 {
  margin: 0 0 8px;
  font-size: 18px;
}
.product-item p {
  font-size: 14px;
  color: #666;
  margin-bottom: 12px;
}
.btn {
  background-color: #2a5db0;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
}
.btn:hover {
  background-color: #1f4580;
}
</style>