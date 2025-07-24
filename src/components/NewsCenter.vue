<template>
  <section class="news-center">
    <div class="banner">
      <div class="banner-content">
        <h2>新闻中心</h2>
        <p>NEWS CENTER</p>
        <p class="subtitle">关注行业动态 · 了解最新资讯 · 把握发展趋势</p>
      </div>
    </div>
    
    <div class="container">
      <!-- 新闻分类标签 -->
      <div class="news-tabs">
        <button 
          v-for="category in categories" 
          :key="category.key"
          :class="['tab-btn', { active: activeCategory === category.key }]"
          @click="activeCategory = category.key"
        >
          {{ category.name }}
        </button>
      </div>

      <!-- 新闻列表 -->
      <div class="news-content">
        <!-- 热门新闻 -->
        <div class="featured-news" v-if="activeCategory === 'all'">
          <h3>热门资讯</h3>
          <div class="featured-item" v-for="news in featuredNews" :key="news.id">
            <div class="featured-image">
              <img :src="news.img" :alt="news.title" />
            </div>
            <div class="featured-content">
              <div class="news-meta">
                <span class="category">{{ news.category }}</span>
                <span class="date">{{ news.date }}</span>
              </div>
              <h4 class="news-title">{{ news.title }}</h4>
              <p class="news-summary">{{ news.summary }}</p>
              <button class="read-more">阅读全文 →</button>
            </div>
          </div>
        </div>

        <!-- 新闻列表 -->
        <div class="news-list">
          <h3 v-if="activeCategory !== 'all'">{{ getCategoryName(activeCategory) }}</h3>
          <div class="news-grid">
            <div class="news-item" v-for="news in filteredNews" :key="news.id">
              <div class="news-image">
                <img :src="news.img" :alt="news.title" />
                <div class="news-overlay">
                  <span class="category-tag">{{ news.category }}</span>
                </div>
              </div>
              <div class="news-content">
                <div class="news-meta">
                  <span class="date">{{ news.date }}</span>
                  <span class="views">{{ news.views }} 阅读</span>
                </div>
                <h4 class="news-title">{{ news.title }}</h4>
                <p class="news-summary">{{ news.summary }}</p>
                <button class="read-more">查看详情</button>
              </div>
            </div>
          </div>
        </div>

        <!-- 分页 -->
        <div class="pagination">
          <button class="page-btn" :disabled="currentPage === 1" @click="currentPage--">上一页</button>
          <span class="page-info">第 {{ currentPage }} 页 / 共 {{ totalPages }} 页</span>
          <button class="page-btn" :disabled="currentPage === totalPages" @click="currentPage++">下一页</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'NewsCenter',
  data() {
    return {
      activeCategory: 'all',
      currentPage: 1,
      totalPages: 3,
      categories: [
        { key: 'all', name: '全部' },
        { key: 'company', name: '公司新闻' },
        { key: 'industry', name: '行业动态' },
        { key: 'technology', name: '技术前沿' },
        { key: 'exhibition', name: '展会活动' }
      ],
      featuredNews: [
        {
          id: 1,
          img: 'https://p.ipic.vip/kgstao.png',
          title: '工业风帆荣获"2024年度工业自动化创新企业"奖项',
          category: '公司新闻',
          date: '2024-07-20',
          summary: '在刚刚结束的中国工业自动化大会上，工业风帆凭借在智能制造领域的突出贡献，荣获"2024年度工业自动化创新企业"殊荣。'
        },
        {
          id: 2,
          img: 'https://p.ipic.vip/lpzlsq.png',
          title: '5G+工业互联网：制造业数字化转型新引擎',
          category: '技术前沿',
          date: '2024-07-18',
          summary: '随着5G技术的成熟应用，工业互联网迎来了前所未有的发展机遇。本文深入分析5G技术如何推动制造业实现数字化转型。'
        }
      ],
      newsList: [
        {
          id: 3,
          img: 'https://p.ipic.vip/io81bd.png',
          title: '工业风帆与某知名汽车制造商达成战略合作',
          category: '公司新闻',
          categoryKey: 'company',
          date: '2024-07-15',
          views: '1,234',
          summary: '双方将在智能制造、自动化生产线等领域展开深度合作，共同推进汽车制造业的数字化转型升级。'
        },
        {
          id: 4,
          img: 'https://p.ipic.vip/e08fnh.png',
          title: '人工智能在工业质检中的应用与发展趋势',
          category: '技术前沿',
          categoryKey: 'technology',
          date: '2024-07-12',
          views: '2,156',
          summary: 'AI技术正在革命性地改变传统工业质检模式，大幅提升检测精度和效率，降低人工成本。'
        },
        {
          id: 5,
          img: 'https://p.ipic.vip/kgstao.png',
          title: '2024中国国际工业博览会即将开幕',
          category: '展会活动',
          categoryKey: 'exhibition',
          date: '2024-07-10',
          views: '3,421',
          summary: '工业风帆将携最新智能制造解决方案亮相展会，展示在工业自动化领域的最新成果。'
        },
        {
          id: 6,
          img: 'https://p.ipic.vip/lpzlsq.png',
          title: '制造业PMI连续三个月回升，行业复苏态势明显',
          category: '行业动态',
          categoryKey: 'industry',
          date: '2024-07-08',
          views: '1,876',
          summary: '最新数据显示，制造业采购经理指数持续回升，反映出制造业生产经营活动继续改善。'
        },
        {
          id: 7,
          img: 'https://p.ipic.vip/io81bd.png',
          title: '工业风帆研发中心正式投入使用',
          category: '公司新闻',
          categoryKey: 'company',
          date: '2024-07-05',
          views: '2,543',
          summary: '新研发中心配备了先进的实验设备和测试平台，将进一步提升公司的技术创新能力。'
        },
        {
          id: 8,
          img: 'https://p.ipic.vip/e08fnh.png',
          title: '边缘计算在智能工厂中的关键作用',
          category: '技术前沿',
          categoryKey: 'technology',
          date: '2024-07-03',
          views: '1,987',
          summary: '边缘计算技术能够实现数据的就近处理，大幅降低延迟，为智能工厂提供更加实时可靠的数据支持。'
        }
      ]
    }
  },
  computed: {
    filteredNews() {
      if (this.activeCategory === 'all') {
        return this.newsList;
      }
      return this.newsList.filter(news => news.categoryKey === this.activeCategory);
    }
  },
  methods: {
    getCategoryName(key) {
      const category = this.categories.find(cat => cat.key === key);
      return category ? category.name : '';
    }
  }
}
</script><style 
scoped>
.news-center {
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

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}

.news-tabs {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 40px;
  flex-wrap: wrap;
}

.tab-btn {
  padding: 10px 24px;
  font-size: 14px;
  color: #666;
  background: white;
  border: 1px solid #ddd;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.tab-btn:hover {
  color: #2a5db0;
  border-color: #2a5db0;
}

.tab-btn.active {
  background-color: #2a5db0;
  color: white;
  border-color: #2a5db0;
}

.news-content h3 {
  font-size: 24px;
  color: #1a1a1a;
  margin-bottom: 30px;
  border-bottom: 2px solid #2a5db0;
  padding-bottom: 10px;
}

/* 热门新闻样式 */
.featured-news {
  margin-bottom: 50px;
}

.featured-item {
  display: flex;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  margin-bottom: 30px;
  transition: transform 0.3s ease;
}

.featured-item:hover {
  transform: translateY(-3px);
}

.featured-image {
  width: 300px;
  height: 200px;
  flex-shrink: 0;
}

.featured-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.featured-content {
  padding: 30px;
  flex: 1;
}

.news-meta {
  display: flex;
  gap: 15px;
  margin-bottom: 15px;
  font-size: 14px;
}

.category {
  background-color: #2a5db0;
  color: white;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
}

.date {
  color: #888;
}

.views {
  color: #888;
}

.news-title {
  font-size: 20px;
  font-weight: bold;
  margin: 0 0 15px;
  color: #1a1a1a;
  line-height: 1.4;
}

.news-summary {
  font-size: 14px;
  color: #666;
  line-height: 1.6;
  margin-bottom: 20px;
}

.read-more {
  background-color: #2a5db0;
  color: white;
  border: none;
  padding: 8px 20px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s ease;
}

.read-more:hover {
  background-color: #1f4580;
}

/* 新闻网格样式 */
.news-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
  margin-bottom: 40px;
}

.news-item {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.news-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.15);
}

.news-image {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.news-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.news-overlay {
  position: absolute;
  top: 15px;
  left: 15px;
}

.category-tag {
  background-color: #2a5db0;
  color: white;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
}

.news-content {
  padding: 24px;
}

.news-item .news-title {
  font-size: 16px;
  margin-bottom: 12px;
}

.news-item .news-summary {
  margin-bottom: 15px;
}

.news-item .read-more {
  padding: 6px 16px;
  font-size: 13px;
}

/* 分页样式 */
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 40px;
}

.page-btn {
  background-color: #2a5db0;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.page-btn:hover:not(:disabled) {
  background-color: #1f4580;
}

.page-btn:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.page-info {
  color: #666;
  font-size: 14px;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .featured-item {
    flex-direction: column;
  }
  
  .featured-image {
    width: 100%;
    height: 200px;
  }
  
  .news-grid {
    grid-template-columns: 1fr;
  }
  
  .banner-content h2 {
    font-size: 28px;
  }
  
  .pagination {
    flex-direction: column;
    gap: 15px;
  }
}
</style>