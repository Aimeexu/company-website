<template>
  <section class="case-showcase">
    <div class="banner">
      <div class="banner-content">
        <h2>案例展示</h2>
        <p>CASE STUDIES</p>
        <p class="subtitle">深耕工业自动化领域 · 为各行业提供专业解决方案</p>
      </div>
    </div>
    
    <div class="container">
      <!-- 行业分类标签 -->
      <div class="industry-tabs">
        <button 
          v-for="industry in industries" 
          :key="industry.key"
          :class="['tab-btn', { active: activeIndustry === industry.key }]"
          @click="activeIndustry = industry.key"
        >
          {{ industry.name }}
        </button>
      </div>

      <!-- 案例列表 -->
      <div class="case-grid">
        <div class="case-item" v-for="(caseItem, index) in filteredCases" :key="index">
          <div class="case-image">
            <img :src="caseItem.img" :alt="caseItem.title" />
            <div class="case-overlay">
              <div class="industry-tag">{{ caseItem.industry }}</div>
            </div>
          </div>
          <div class="case-content">
            <h3 class="case-title">{{ caseItem.title }}</h3>
            <div class="case-meta">
              <span class="location">{{ caseItem.location }}</span>
              <span class="date">{{ caseItem.date }}</span>
            </div>
            <p class="case-desc">{{ caseItem.description }}</p>
            <div class="case-tags">
              <span v-for="tag in caseItem.tags" :key="tag" class="tag">{{ tag }}</span>
            </div>
            <button class="btn-detail">查看详情</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CaseShowcase',
  data() {
    return {
      activeIndustry: 'all',
      industries: [
        { key: 'all', name: '全部' },
        { key: 'automotive', name: '汽车制造' },
        { key: 'machinery', name: '工程机械' },
        { key: 'electronics', name: '电子制造' },
        { key: 'energy', name: '新能源' },
        { key: 'logistics', name: '物流仓储' }
      ],
      cases: [
        {
          img: 'https://p.ipic.vip/kgstao.png',
          title: '某汽车制造厂自动化生产线改造',
          industry: '汽车制造',
          industryKey: 'automotive',
          location: '上海',
          date: '2024年3月',
          description: '通过部署智能传感器和PLC控制系统，实现了焊装、涂装生产线的全自动化控制，生产效率提升40%。',
          tags: ['PLC控制', '传感器', '自动化', '质量提升']
        },
        {
          img: 'https://p.ipic.vip/lpzlsq.png',
          title: '大型工程机械智能监控系统',
          industry: '工程机械',
          industryKey: 'machinery',
          location: '北京',
          date: '2024年1月',
          description: '为大型挖掘机和装载机配备智能监控系统，实时监测设备运行状态，预防性维护降低故障率60%。',
          tags: ['智能监控', '预防维护', '设备管理', '效率优化']
        },
        {
          img: 'https://p.ipic.vip/io81bd.png',
          title: '电子制造业精密装配解决方案',
          industry: '电子制造',
          industryKey: 'electronics',
          location: '深圳',
          date: '2023年12月',
          description: '采用高精度工业机器人和视觉检测系统，实现电子元器件的精密装配和质量检测，装配精度达到±0.01mm。',
          tags: ['精密装配', '视觉检测', '工业机器人', '质量控制']
        },
        {
          img: 'https://p.ipic.vip/e08fnh.png',
          title: '新能源电池生产线自动化',
          industry: '新能源',
          industryKey: 'energy',
          location: '宁德',
          date: '2024年2月',
          description: '为新能源电池制造企业提供全套自动化解决方案，包括电池组装、测试、包装全流程自动化，产能提升3倍。',
          tags: ['新能源', '电池制造', '全流程自动化', '产能提升']
        },
        {
          img: 'https://p.ipic.vip/kgstao.png',
          title: '智能物流仓储管理系统',
          industry: '物流仓储',
          industryKey: 'logistics',
          location: '杭州',
          date: '2023年11月',
          description: '部署RFID技术和自动化分拣系统，实现货物的智能识别、自动分拣和库存管理，仓储效率提升50%。',
          tags: ['RFID技术', '自动分拣', '库存管理', '智能仓储']
        }
      ]
    }
  },
  computed: {
    filteredCases() {
      if (this.activeIndustry === 'all') {
        return this.cases;
      }
      return this.cases.filter(item => item.industryKey === this.activeIndustry);
    }
  }
}
</script>

<style scoped>
.case-showcase {
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

.industry-tabs {
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

.case-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
}

.case-item {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.case-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.15);
}

.case-image {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.case-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.case-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, transparent, rgba(0,0,0,0.3));
  display: flex;
  align-items: flex-end;
  padding: 20px;
}

.industry-tag {
  background-color: #2a5db0;
  color: white;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
}

.case-content {
  padding: 24px;
}

.case-title {
  font-size: 18px;
  font-weight: bold;
  margin: 0 0 12px;
  color: #1a1a1a;
}

.case-meta {
  display: flex;
  gap: 16px;
  margin-bottom: 12px;
  font-size: 14px;
  color: #888;
}

.case-desc {
  font-size: 14px;
  color: #666;
  line-height: 1.6;
  margin-bottom: 16px;
}

.case-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
}

.tag {
  background-color: #f0f0f0;
  color: #666;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
}

.btn-detail {
  background-color: #2a5db0;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s ease;
}

.btn-detail:hover {
  background-color: #1f4580;
}
</style>