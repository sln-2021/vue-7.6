<template>
  <el-container>
    <el-header>
      header
    </el-header>
    <el-container>
      <leftNav />
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import leftNav from '../components/layout/leftnav.vue';
import topNav from '../components/layout/topnav.vue';
import routes from '../router/index';

export default {
  name: 'Layout',
  components: {
    leftNav,
    topNav,
  },
  data() {
    return {
      menuLists: [],
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
  mounted() {
    this.menuLists = routes.options.routes.filter((it) => it.name !== 'Layout');
    console.log(this.menuLists, 'routes.options.routes');
  },
};
</script>
<style lang="less"></style>
