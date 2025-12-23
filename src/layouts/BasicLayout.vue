<template>
  <div id="basicLayout">
    <a-layout style="min-height: 100vh">
      <a-layout-header class="header"><GlobalHeader /></a-layout-header>
      <a-layout-content class="content"><router-view /></a-layout-content>
      <a-layout-footer class="footer">
        <a href="https://www.neusoft.edu.cn/" target="_blank">
          东软OJ平台欢迎你
        </a>
      </a-layout-footer>
    </a-layout>
  </div>
</template>
<script setup>
import GlobalHeader from "@/components/GlobalHeaders.vue";
</script>

<style scoped>
#basicLayout {
}
#basicLayout .header {
}

#basicLayout .content {
  background: linear-gradient(to right, #bbb, #fff);
  flex: 1;
}
#basicLayout .footer {
  background: #efefef;
  padding: 16px;
  bottom: 0;
  left: 0;
  right: 0;
  position: sticky;
  text-align: center;
}
</style>
