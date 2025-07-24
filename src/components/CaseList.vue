<template>
  <section class="case-section">
    <div class="container">
      <div class="section-header">
        <div class="header-content">
          <div class="title-area">
            <h2 class="section-title">案例展示</h2>
            <p class="section-subtitle">CASE STUDIES</p>
            <p class="section-desc">深耕工业自动化领域，为各行业提供专业解决方案</p>
          </div>
          <router-link to="/case-showcase" class="more-btn">查看更多 ></router-link>
        </div>
      </div>

      <!-- 案例列表 -->
      <div class="case-grid">
        <div class="case-item" v-for="(caseItem, index) in displayCases" :key="index">
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
  name: 'CaseList',
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
          description: '通过部署智能传感器和PLC控制系统，实现了焊装、涂装生产线的全自动化控制，生产效率提升40%，产品质量稳定性显著提高。',
          tags: ['PLC控制', '传感器', '自动化', '质量提升']
        },
        {
          img: 'https://p.ipic.vip/lpzlsq.png',
          title: '大型工程机械智能监控系统',
          industry: '工程机械',
          industryKey: 'machinery',
          location: '北京',
          date: '2024年1月',
          description: '为大型挖掘机和装载机配备智能监控系统，实时监测设备运行状态，预防性维护降低故障率60%，延长设备使用寿命。',
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
        },
        {
          img: 'https://p.ipic.vip/lpzlsq.png',
          title: '钢铁冶金行业安全监控',
          industry: '钢铁冶金',
          industryKey: 'machinery',
          location: '唐山',
          date: '2024年4月',
          description: '在高温、高危环境下部署耐高温传感器和安全防护系统，实现24小时无人值守监控，安全事故率降低90%。',
          tags: ['安全监控', '耐高温传感器', '无人值守', '风险防控']
        }
      ]
    }
  },
  computed: {
    displayCases() {
      // 首页只显示前3个案例
      return this.cases.slice(0, 3);
    }
  }
}
</script>

<style scoped>
.case-section {
  padding: 60px 0;
  background-color: #f8f9fa;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* 标题区域 */
.section-header {
  margin-bottom: 50px;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 1200px;
  margin: 0 auto;
}

.title-area {
  text-align: center;
  flex: 1;
}

.section-title {
  font-size: 36px;
  font-weight: bold;
  color: #1a1a1a;
  margin-bottom: 8px;
}

.section-subtitle {
  font-size: 16px;
  color: #2a5db0;
  font-weight: 500;
  margin-bottom: 16px;
  letter-spacing: 2px;
}

.section-desc {
  font-size: 16px;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
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
  margin-top: 10px;
  box-shadow: 0 2px 8px rgba(42, 93, 176, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.more-btn:hover {
  background: linear-gradient(135deg, #1f4580, #2a5db0);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(42, 93, 176, 0.4);
}

/* 案例网格 */
.case-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
  margin-bottom: 50px;
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
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
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
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s ease;
}

.btn-detail:hover {
  background-color: #1f4580;
}


</style>