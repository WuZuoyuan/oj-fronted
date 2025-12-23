import router from "@/router";
import store from "@/store";
import ACCESS_ENUM from "@/access/accessEnum";
import checkAccess from "@/access/checkAccess";

router.beforeEach(async (to, from, next) => {
  console.log("登录用户信息", store.state.user.loginUser);

  const loginUser = store.state.user.loginUser;
  //如果没有登录，即会自动登录
  if (!loginUser || !loginUser.userRole) {
    await store.dispatch("user/getLoginUser");
  }
  const needAccess = to.meta?.access ?? ACCESS_ENUM.NOT_LOGIN;
  //要跳转的页面必须要登录
  if (needAccess !== ACCESS_ENUM.NOT_LOGIN) {
    //如果能登录跳转到登录页面
    if (!loginUser || !loginUser.userRole) {
      next(`/user/login?redirect=${to.fullPath}`);
      return;
    }
    //如果已经登录，权限不足跳转到无权限页面
    if (!checkAccess(loginUser, needAccess as string)) {
      next("/noAuth");
      return;
    }
  }
  next();
});
