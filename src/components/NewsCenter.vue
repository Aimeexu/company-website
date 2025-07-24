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

      <!-- 主要内容区域 -->
      <div class="main-content">
        <!-- 左侧新闻列表 -->
        <div class="news-list-section">
          <div class="news-list">
            <div class="news-item" v-for="news in filteredNews" :key="news.id">
              <div class="news-image">
                <img :src="news.img" :alt="news.title" />
              </div>
              <div class="news-content">
                <div class="news-header">
                  <span class="category-badge">{{ news.category }}</span>
                  <span class="news-date">{{ news.date }}</span>
                </div>
                <h3 class="news-title">{{ news.title }}</h3>
                <p class="news-summary">{{ news.summary }}</p>
                <div class="news-footer">
                  <span class="views">{{ news.views }} 阅读</span>
                  <button class="read-btn">阅读全文</button>
                </div>
              </div>
            </div>
          </div>

          <!-- 分页 -->
          <div class="pagination">
            <button class="page-btn prev" :disabled="currentPage === 1" @click="currentPage--">
              ← 上一页
            </button>
            <div class="page-numbers">
              <span v-for="page in visiblePages" :key="page" 
                    :class="['page-num', { active: page === currentPage }]"
                    @click="currentPage = page">
                {{ page }}
              </span>
            </div>
            <button class="page-btn next" :disabled="currentPage === totalPages" @click="currentPage++">
              下一页 →
            </button>
          </div>
        </div>

        <!-- 右侧边栏 -->
        <div class="sidebar">
          <!-- 热门文章 -->
          <div class="sidebar-section">
            <h4 class="sidebar-title">热门文章</h4>
            <div class="hot-news-list">
              <div class="hot-news-item" v-for="(news, index) in hotNews" :key="news.id">
                <span class="hot-rank">{{ index + 1 }}</span>
                <div class="hot-content">
                  <h5 class="hot-title">{{ news.title }}</h5>
                  <div class="hot-meta">
                    <span class="hot-date">{{ news.date }}</span>
                    <span class="hot-views">{{ news.views }} 阅读</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 最新公告 -->
          <div class="sidebar-section">
            <h4 class="sidebar-title">最新公告</h4>
            <div class="announcement-list">
              <div class="announcement-item" v-for="announcement in announcements" :key="announcement.id">
                <div class="announcement-content">
                  <h5 class="announcement-title">{{ announcement.title }}</h5>
                  <span class="announcement-date">{{ announcement.date }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- 标签云 -->
          <div class="sidebar-section">
            <h4 class="sidebar-title">热门标签</h4>
            <div class="tag-cloud">
              <span v-for="tag in tags" :key="tag.name" 
                    :class="['tag-item', `tag-${tag.level}`]">
                {{ tag.name }}
              </span>
            </div>
          </div>
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
      announcements: [
        {
          id: 1,
          title: '关于2024年春节放假安排的通知',
          date: '2024-01-15'
        },
        {
          id: 2,
          title: '工业风帆官网升级维护公告',
          date: '2024-01-10'
        },
        {
          id: 3,
          title: '新产品发布会邀请函',
          date: '2024-01-05'
        }
      ],
      tags: [
        { name: '工业自动化', level: 'high' },
        { name: '智能制造', level: 'high' },
        { name: 'PLC控制', level: 'medium' },
        { name: '传感器', level: 'medium' },
        { name: '机器人', level: 'high' },
        { name: '数字化转型', level: 'low' },
        { name: '5G技术', level: 'medium' },
        { name: '人工智能', level: 'high' },
        { name: '物联网', level: 'low' },
        { name: '边缘计算', level: 'low' }
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
    },
    hotNews() {
      return this.newsList.slice(0, 5);
    },
    visiblePages() {
      const pages = [];
      for (let i = 1; i <= this.totalPages; i++) {
        pages.push(i);
      }
      return pages;
    }
  }
}
</script><style sc
oped>
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

/* 主要内容区域 */
.main-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 40px;
}

/* 左侧新闻列表 */
.news-list-section {
  background: white;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.news-list {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.news-item {
  display: flex;
  background: #f8f9fa;
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid #e9ecef;
}

.news-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.1);
}

.news-image {
  width: 200px;
  height: 150px;
  flex-shrink: 0;
}

.news-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.news-content {
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.news-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.category-badge {
  background: linear-gradient(135deg, #2a5db0, #1f4580);
  color: white;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 500;
}

.news-date {
  color: #888;
  font-size: 14px;
}

.news-title {
  font-size: 18px;
  font-weight: bold;
  color: #1a1a1a;
  margin: 0 0 12px;
  line-height: 1.4;
}

.news-summary {
  font-size: 14px;
  color: #666;
  line-height: 1.6;
  margin-bottom: 15px;
  flex: 1;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.news-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.views {
  color: #888;
  font-size: 13px;
}

.read-btn {
  background: linear-gradient(135deg, #2a5db0, #1f4580);
  color: white;
  border: none;
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.read-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(42, 93, 176, 0.3);
}

/* 分页样式 */
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin-top: 30px;
  padding-top: 30px;
  border-top: 1px solid #e9ecef;
}

.page-btn {
  background-color: #2a5db0;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s ease;
}

.page-btn:hover:not(:disabled) {
  background-color: #1f4580;
  transform: translateY(-1px);
}

.page-btn:disabled {
  background-color: #ccc;
  cursor: not-allowed;
  transform: none;
}

.page-numbers {
  display: flex;
  gap: 8px;
}

.page-num {
  padding: 8px 12px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s ease;
  color: #666;
  background: #f8f9fa;
}

.page-num:hover {
  background-color: #e9ecef;
  color: #2a5db0;
}

.page-num.active {
  background-color: #2a5db0;
  color: white;
}

/* 右侧边栏 */
.sidebar {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.sidebar-section {
  background: white;
  border-radius: 12px;
  padding: 25px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.sidebar-title {
  font-size: 18px;
  font-weight: bold;
  color: #1a1a1a;
  margin: 0 0 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid #2a5db0;
}

/* 热门文章 */
.hot-news-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.hot-news-item {
  display: flex;
  gap: 12px;
  padding: 12px;
  border-radius: 8px;
  transition: background-color 0.3s ease;
}

.hot-news-item:hover {
  background-color: #f8f9fa;
}

.hot-rank {
  width: 24px;
  height: 24px;
  background: linear-gradient(135deg, #2a5db0, #1f4580);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
  flex-shrink: 0;
}

.hot-content {
  flex: 1;
}

.hot-title {
  font-size: 14px;
  font-weight: 500;
  color: #1a1a1a;
  margin: 0 0 8px;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.hot-meta {
  display: flex;
  gap: 12px;
  font-size: 12px;
  color: #888;
}

/* 最新公告 */
.announcement-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.announcement-item {
  padding: 15px;
  background: #f8f9fa;
  border-radius: 8px;
  border-left: 4px solid #2a5db0;
  transition: all 0.3s ease;
}

.announcement-item:hover {
  background: #e9ecef;
  transform: translateX(2px);
}

.announcement-title {
  font-size: 14px;
  font-weight: 500;
  color: #1a1a1a;
  margin: 0 0 8px;
  line-height: 1.4;
}

.announcement-date {
  font-size: 12px;
  color: #888;
}

/* 标签云 */
.tag-cloud {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag-item {
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid #e9ecef;
}

.tag-high {
  background: linear-gradient(135deg, #2a5db0, #1f4580);
  color: white;
  border-color: #2a5db0;
}

.tag-medium {
  background: #e3f2fd;
  color: #2a5db0;
  border-color: #2a5db0;
}

.tag-low {
  background: #f8f9fa;
  color: #666;
}

.tag-item:hover {
  transform: translateY(-1px);
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .main-content {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .sidebar {
    order: -1;
  }
}

@media (max-width: 768px) {
  .news-item {
    flex-direction: column;
  }
  
  .news-image {
    width: 100%;
    height: 200px;
  }
  
  .banner-content h2 {
    font-size: 28px;
  }
  
  .pagination {
    flex-wrap: wrap;
    gap: 10px;
  }
  
  .page-numbers {
    order: -1;
  }
}
</style>