<template>
  <div>
    <h1>这是子组件</h1>
    <el-button type="warning" @click="myClick">子组件的按钮, 点击触发父组件传递过来的方法</el-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      sonMsg: {
        name: 'MARS',
        age: 23
      }
    }
  },
  methods: {
    myClick() {
      /**
       * !点击了子组件按钮的时候, 如何拿到父组件传递过来的function方法, 并调用这个方法呢?
       * ?emit 英文原意: 触发, 调用, 发射的意思
       */
      this.$message.success('点击了子组件的按钮!')
      this.$emit('function', this.sonMsg)
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
