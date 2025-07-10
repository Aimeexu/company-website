<template>
  <header class="app-header">
    <div class="container">
      <div class="logo">工业风帆</div>
      <nav class="nav">
        <a href="#" class="active">首页</a>
        <a href="#">工业类产品</a>
        <a href="#">案例展示</a>
        <div class="search-box">
          <input type="text" placeholder="搜索" />
          <button>搜索</button>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style scoped>
.app-header {
  background-color: #0d1731;
  color: white;
  padding: 16px 0;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo {
  font-size: 24px;
  font-weight: bold;
}
.nav {
  display: flex;
  gap: 24px;
  align-items: center;
}
.nav a {
  color: white;
  text-decoration: none;
  padding-bottom: 4px;
}
.nav a.active {
  border-bottom: 2px solid #00aaff;
}
.search-box {
  display: flex;
  align-items: center;
  gap: 8px;
}
.search-box input {
  padding: 4px 8px;
}
.search-box button {
  padding: 4px 12px;
  background-color: #00aaff;
  border: none;
  color: white;
  cursor: pointer;
}
</style>