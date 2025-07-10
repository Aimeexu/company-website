<template>
  <section class="home-banner">
    <div class="banner-content">
      <h1>自动化业动电化若节控制</h1>
      <button class="btn">概况</button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomeBanner'
}
</script>

<style scoped>
.home-banner {
  background-image: url('../assets/banner.jpg'); /* 👈 替换为你的 banner 图路径 */
  background-size: cover;
  background-position: center;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
}
.banner-content h1 {
  font-size: 36px;
  margin-bottom: 16px;
}
.btn {
  padding: 10px 24px;
  font-size: 16px;
  background-color: #00aaff;
  color: white;
  border: none;
  cursor: pointer;
}
</style>