<template>
  <footer class="app-footer">
    <div class="container">
      <div class="footer-content">
        <!-- 公司信息 -->
        <div class="company-info">
          <div class="logo-section">
            <h3 class="footer-logo">工业风帆</h3>
            <p class="company-desc">专注工业自动化解决方案，为制造业数字化转型提供专业技术支持与服务。</p>
          </div>
          <div class="contact-info">
            <div class="contact-item">
              <span class="icon">📍</span>
              <span>上海市浦东新区张江高科技园区科苑路123号</span>
            </div>
            <div class="contact-item">
              <span class="icon">📞</span>
              <span>400-888-9999</span>
            </div>
            <div class="contact-item">
              <span class="icon">✉️</span>
              <span>info@industrial-sail.com</span>
            </div>
          </div>
        </div>

        <!-- 快速链接 -->
        <div class="footer-columns">
          <div class="footer-col">
            <h4>产品服务</h4>
            <ul class="footer-links">
              <li><router-link to="/product-center">工业机器人</router-link></li>
              <li><router-link to="/product-center">PLC控制器</router-link></li>
              <li><router-link to="/product-center">传感器设备</router-link></li>
              <li><router-link to="/product-center">自动化系统</router-link></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>解决方案</h4>
            <ul class="footer-links">
              <li><router-link to="/case-showcase">汽车制造</router-link></li>
              <li><router-link to="/case-showcase">电子制造</router-link></li>
              <li><router-link to="/case-showcase">新能源</router-link></li>
              <li><router-link to="/case-showcase">物流仓储</router-link></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>服务支持</h4>
            <ul class="footer-links">
              <li><router-link to="/contact">技术支持</router-link></li>
              <li><router-link to="/contact">售后服务</router-link></li>
              <li><router-link to="/news-center">下载中心</router-link></li>
              <li><router-link to="/news-center">培训服务</router-link></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>关注我们</h4>
            <div class="qr-codes">
              <div class="qr-item">
                <img src="https://via.placeholder.com/80x80?text=微信" alt="微信公众号" />
                <span>微信公众号</span>
              </div>
              <div class="qr-item">
                <img src="https://via.placeholder.com/80x80?text=小程序" alt="微信小程序" />
                <span>微信小程序</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 底部版权信息 -->
      <div class="footer-bottom">
        <div class="copyright-info">
          <p>&copy; 2024 工业风帆科技有限公司 版权所有</p>
          <p>沪ICP备2024000001号-1 | 沪公网安备31011502000001号</p>
        </div>
        <div class="footer-links-bottom">
          <router-link to="/contact">隐私政策</router-link>
          <span class="separator">|</span>
          <router-link to="/contact">使用条款</router-link>
          <span class="separator">|</span>
          <router-link to="/contact">网站地图</router-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style scoped>
.app-footer {
  background: linear-gradient(135deg, #0d1731, #1a2b4a);
  color: white;
  padding: 50px 0 0;
  font-size: 14px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.footer-content {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 60px;
  margin-bottom: 40px;
}

/* 公司信息区域 */
.company-info {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.logo-section {
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-logo {
  font-size: 28px;
  font-weight: bold;
  color: #00aaff;
  margin: 0 0 15px;
}

.company-desc {
  color: #b8c5d6;
  line-height: 1.6;
  margin: 0;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 12px;
  color: #b8c5d6;
}

.contact-item .icon {
  font-size: 16px;
  width: 20px;
  text-align: center;
}

/* 快速链接区域 */
.footer-columns {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
}

.footer-col h4 {
  font-weight: bold;
  color: #00aaff;
  margin: 0 0 20px;
  font-size: 16px;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 12px;
}

.footer-links a {
  color: #b8c5d6;
  text-decoration: none;
  transition: color 0.3s ease;
  font-size: 14px;
}

.footer-links a:hover {
  color: #00aaff;
}

/* 二维码区域 */
.qr-codes {
  display: flex;
  gap: 20px;
}

.qr-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.qr-item img {
  width: 70px;
  height: 70px;
  border-radius: 8px;
  border: 2px solid rgba(255, 255, 255, 0.1);
}

.qr-item span {
  font-size: 12px;
  color: #b8c5d6;
  text-align: center;
}

/* 底部版权区域 */
.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 25px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}

.copyright-info {
  color: #8a9bb0;
  font-size: 13px;
}

.copyright-info p {
  margin: 4px 0;
}

.footer-links-bottom {
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 13px;
}

.footer-links-bottom a {
  color: #8a9bb0;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-links-bottom a:hover {
  color: #00aaff;
}

.separator {
  color: #8a9bb0;
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  .footer-columns {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }
}

@media (max-width: 768px) {
  .app-footer {
    padding: 40px 0 0;
  }
  
  .footer-columns {
    grid-template-columns: 1fr;
    gap: 25px;
  }
  
  .footer-bottom {
    flex-direction: column;
    text-align: center;
    gap: 15px;
  }
  
  .qr-codes {
    justify-content: center;
  }
}
</style>