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
          <p>按安博课<br />层展目厂</p>
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
  padding: 30px 0 10px;
  font-size: 14px;
  color: #555;
  box-shadow: inset 0 1px 0 #ddd;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}
.footer-columns {
  display: flex;
  justify-content: space-between;
  gap: 24px;
  flex-wrap: wrap;
}
.footer-col {
  flex: 1 1 200px;
  margin-bottom: 20px;
}
.footer-col h4 {
  font-weight: bold;
  color: #00aaff;
  margin-bottom: 12px;
}
.footer-col p {
  line-height: 1.6;
  color: #666;
}
.footer-col img {
  width: 80px;
  height: 80px;
  margin-right: 12px;
  border-radius: 8px;
}
.copyright {
  text-align: center;
  color: #999;
  margin-top: 20px;
}
</style>