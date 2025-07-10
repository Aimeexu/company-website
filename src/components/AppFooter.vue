<template>
  <footer class="app-footer">
    <div class="container">
      <div class="footer-columns">
        <div class="footer-col">
          <h4>关于我们</h4>
          <p>关于简介<br />面珍展示</p>
        </div>
        <div class="footer-col">
          <h4>服务支持</h4>
          <p>面性财空<br />足足足足</p>
        </div>
        <div class="footer-col">
          <h4>技术文档</h4>
          <p>按安博课<br />2 层展目厂</p>
        </div>
        <div class="footer-col">
          <h4>扫码关注</h4>
          <img src="https://via.placeholder.com/80x80?text=微信二维码" alt="微信二维码" />
          <img src="https://via.placeholder.com/80x80?text=小程序二维码" alt="小程序二维码" />
        </div>
      </div>
      <p class="copyright">
        工业类刚性形范E06 | 意墨限想电力 20XX 备量晋样号00054号
      </p>
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
  background-color: #f3f3f3;
  padding: 40px 0 20px;
  font-size: 14px;
  color: #333;
  box-shadow: inset 0 1px 0 #ddd;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
}
.footer-columns {
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 24px;
}
.footer-col {
  flex: 1;
  min-width: 200px;
}
.footer-col h4 {
  font-size: 16px;
  margin-bottom: 8px;
  color: #00aaff;
}
.footer-col img {
  width: 80px;
  margin: 8px 8px 0 0;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
}
footer p {
  margin: 0;
  text-align: center;
  color: #666;
}
</style>