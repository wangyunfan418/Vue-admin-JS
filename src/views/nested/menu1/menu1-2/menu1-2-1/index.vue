<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="用户管理" class="tabs-style" name="first">用户管理</el-tab-pane>
    <el-tab-pane label="配置管理" class="tabs-style" name="second">配置管理</el-tab-pane>
    <el-input
      v-model="input"
      class="input-style"
      placeholder="请输入内容"
      style="width: 200px;"
      size="mini"
    />
  </el-tabs>
</template>
<script>
export default {
  data() {
    return {
      activeName: 'first',
      input: ''
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    }
  }
}
</script>
<style lang="scss">
.tabs-style {
  padding: 15px;
}

// !input 绝对定位
.input-style {
  position: fixed;
  top: 55px;
  right: 50px;
}

// !重写 => tabs 页样式
.el-tabs__header {
  margin: 0 !important;

  .el-tabs__nav-scroll {
    background: #f5f6fa;

    .el-tabs__nav {
      margin-left: 20px;
    }
  }
}
</style>
