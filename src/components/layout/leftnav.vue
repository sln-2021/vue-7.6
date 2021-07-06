<template>
  <el-aside width="240px">
    <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" v-for="item in menuLists" :key="item.name" router text-color="#333" active-text-color="red">
      <el-submenu>
        <template slot="title">
          <span>{{ item.name }}</span>
        </template>
        <el-menu-item :index="item.path + '/' + i.path" v-for="i in item.children" :key="i.name">
          <i :class="i.icon"></i>
          <span class="item_title">{{ i.name }}</span>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </el-aside>
</template>

<script>
import routes from '../../router/index';

export default {
  name: 'leftNav',
  components: {},
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
<style></style>
