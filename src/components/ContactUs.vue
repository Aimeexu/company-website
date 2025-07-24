<template>
  <section class="contact-us">
    <div class="banner">
      <div class="banner-content">
        <h2>联系我们</h2>
        <p>CONTACT US</p>
        <p class="subtitle">专业团队 · 贴心服务 · 共创未来</p>
      </div>
    </div>
    
    <div class="container">
      <div class="contact-content">
        <!-- 联系信息 -->
        <div class="contact-info">
          <h3>联系信息</h3>
          <div class="info-item">
            <div class="info-icon">📍</div>
            <div class="info-details">
              <h4>公司地址</h4>
              <p>上海市浦东新区张江高科技园区科苑路123号</p>
            </div>
          </div>
          
          <div class="info-item">
            <div class="info-icon">📞</div>
            <div class="info-details">
              <h4>联系电话</h4>
              <p>400-888-9999</p>
              <p>021-58888888</p>
            </div>
          </div>
          
          <div class="info-item">
            <div class="info-icon">✉️</div>
            <div class="info-details">
              <h4>邮箱地址</h4>
              <p>info@industrial-sail.com</p>
              <p>sales@industrial-sail.com</p>
            </div>
          </div>
          
          <div class="info-item">
            <div class="info-icon">🕒</div>
            <div class="info-details">
              <h4>工作时间</h4>
              <p>周一至周五：9:00 - 18:00</p>
              <p>周六：9:00 - 12:00</p>
            </div>
          </div>
        </div>
        
        <!-- 联系表单 -->
        <div class="contact-form">
          <h3>在线咨询</h3>
          <form @submit.prevent="submitForm">
            <div class="form-row">
              <div class="form-group">
                <label>姓名 *</label>
                <input type="text" v-model="form.name" required />
              </div>
              <div class="form-group">
                <label>公司名称</label>
                <input type="text" v-model="form.company" />
              </div>
            </div>
            
            <div class="form-row">
              <div class="form-group">
                <label>联系电话 *</label>
                <input type="tel" v-model="form.phone" required />
              </div>
              <div class="form-group">
                <label>邮箱地址 *</label>
                <input type="email" v-model="form.email" required />
              </div>
            </div>
            
            <div class="form-group">
              <label>咨询类型</label>
              <select v-model="form.type">
                <option value="">请选择咨询类型</option>
                <option value="product">产品咨询</option>
                <option value="solution">解决方案</option>
                <option value="service">售后服务</option>
                <option value="cooperation">合作洽谈</option>
                <option value="other">其他</option>
              </select>
            </div>
            
            <div class="form-group">
              <label>详细需求 *</label>
              <textarea v-model="form.message" rows="5" placeholder="请详细描述您的需求..." required></textarea>
            </div>
            
            <button type="submit" class="submit-btn">提交咨询</button>
          </form>
        </div>
      </div>
      
      <!-- 地图区域 -->
      <div class="map-section">
        <h3>公司位置</h3>
        <div class="map-placeholder">
          <p>📍 上海市浦东新区张江高科技园区</p>
          <p>地图加载中...</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactUs',
  data() {
    return {
      form: {
        name: '',
        company: '',
        phone: '',
        email: '',
        type: '',
        message: ''
      }
    }
  },
  methods: {
    submitForm() {
      // 这里可以添加表单提交逻辑
      alert('感谢您的咨询！我们会尽快与您联系。');
      // 重置表单
      this.form = {
        name: '',
        company: '',
        phone: '',
        email: '',
        type: '',
        message: ''
      };
    }
  }
}
</script>

<style scoped>
.contact-us {
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

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  margin-bottom: 60px;
}

.contact-info h3,
.contact-form h3 {
  font-size: 24px;
  color: #1a1a1a;
  margin-bottom: 30px;
  border-bottom: 2px solid #2a5db0;
  padding-bottom: 10px;
}

.info-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 30px;
}

.info-icon {
  font-size: 24px;
  margin-right: 15px;
  margin-top: 5px;
}

.info-details h4 {
  font-size: 16px;
  color: #2a5db0;
  margin: 0 0 8px;
}

.info-details p {
  margin: 4px 0;
  color: #666;
  line-height: 1.5;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: #333;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 14px;
  transition: border-color 0.3s ease;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #2a5db0;
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
}

.submit-btn {
  background-color: #2a5db0;
  color: white;
  border: none;
  padding: 15px 40px;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-btn:hover {
  background-color: #1f4580;
}

.map-section {
  margin-top: 40px;
}

.map-section h3 {
  font-size: 24px;
  color: #1a1a1a;
  margin-bottom: 20px;
  border-bottom: 2px solid #2a5db0;
  padding-bottom: 10px;
}

.map-placeholder {
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 60px 20px;
  text-align: center;
  color: #666;
}

.map-placeholder p {
  margin: 10px 0;
  font-size: 16px;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .contact-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  .form-row {
    grid-template-columns: 1fr;
  }
  
  .banner-content h2 {
    font-size: 28px;
  }
}
</style>