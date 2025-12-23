<template>
  <div id="userLayout">
    <a-layout style="min-height: 100vh">
      <a-layout-header class="header">
        <span v-if="$route.name === '用户登录'">用户登录</span>
        <span v-else-if="$route.name === '用户注册'">用户注册</span>
        <span v-else>用户中心</span>
      </a-layout-header>
      <a-layout-content class="content"><router-view /></a-layout-content>
      <a-layout-footer class="footer">
        <a href="https://www.neusoft.edu.cn/" target="_blank">
          东软OJ平台欢迎你
        </a>
      </a-layout-footer>
    </a-layout>
  </div>
</template>
<script setup></script>

<style scoped>
#userLayout {
  min-height: 100vh;
}
#userLayout .header {
}

#userLayout .content {
  background: linear-gradient(to right, #bbb, #fff);
  flex: 1;
}
#userLayout .footer {
  background: #efefef;
  padding: 16px;
  bottom: 0;
  left: 0;
  right: 0;
  position: sticky;
  text-align: center;
}
</style>
