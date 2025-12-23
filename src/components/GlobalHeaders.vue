<template>
  <a-row
    class="grid-demo"
    id="globaleader"
    style="margin-bottom: 16px"
    :wrap="false"
  >
    <a-col class="grid-demo" flex="auto">
      <a-menu
        mode="horizontal"
        :selected-keys="selectedKeys"
        @menu-item-click="doMenuClick"
        :style="{ padding: '0 10px' }"
      >
        <a-menu-item
          key="0"
          :style="{ padding: 0, marginRight: '38px' }"
          disabled
        >
          <div class="little-bar">
            <img class="logo" src="../assets/SchoolPhoto.png" />
            <div class="title">伍祚源</div>
          </div>
        </a-menu-item>
        <a-menu-item v-for="item in visibleRouter" :key="item.path">
          {{ item.name }}
        </a-menu-item>
        <!-- <a-menu-item key="1">Home</a-menu-item>
      <a-menu-item key="2">Solution</a-menu-item>
      <a-menu-item key="3">Cloud Service</a-menu-item>
      <a-menu-item key="4">Cooperation</a-menu-item> -->
      </a-menu>
    </a-col>
    <a-col flex="100px">
      <div class="login-name">
        {{ store.state.user?.loginUser?.userName ?? "未登录" }}
      </div>
    </a-col>
  </a-row>
  <div id="globaleader"></div>
</template>

<script setup lang="ts">
import { routes } from "../router/routes";
import { useRouter } from "vue-router";
import { computed, ref } from "vue";
import { useStore } from "vuex";
import checkAccess from "@/access/checkAccess";
const router = useRouter();
const selectedKeys = ref(["/"]);
const visibleRouter = computed(() => {
  return routes.filter((item, index) => {
    if (item.meta?.hideInMenu) {
      return false;
    }
    //设置权限变更菜单
    if (
      !checkAccess(store.state.user.loginUser, item?.meta?.access as string)
    ) {
      return false;
    }
    return true;
  });
});
router.afterEach((to, from, failure) => {
  selectedKeys.value = [to.path];
});

const store = useStore();
setTimeout(() => {
  store.dispatch("user/getLoginUser", {
    userName: "祚源",
    userRole: "admin",
  });
}, 3000);

const doMenuClick = (key: string) => {
  router.push({
    path: key,
  });
};
</script>

<style scoped>
.little-bar {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.title {
  color: #444;
  margin-left: 34px;
}
.logo {
  height: 46px;
  margin: 0;
  padding: 0;
  /* 若图片是 inline 元素，需避免 vertical-align 影响（Flex 下可忽略，但重置更安全） */
  vertical-align: middle;
}
.login-name {
  color: #444;
  text-align: center;
  line-height: 75px;
}
.grid-demo {
  padding: 0px;
}
</style>
