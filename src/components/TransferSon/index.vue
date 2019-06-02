<template>
  <div>
    <h1 @click="btnClick()">这是子组件 --- {{ parmas }}</h1>
  </div>
</template>
<script>
export default {
  /**
   * !把父组件传递过来的 parmas 属性, 先在 props中定义. 这样才能使用这个数据
   * ? props 中的数据都是只读的, 无法重新赋值
   */
  props: {
    parmas: {
      type: String,
      default: ''
    }
  },

  /**
   * !子组件中的 data 数据, 并不是通过父组件传递过来的, 而是子组件自身私有的
   * ?比如: 子组件通过 Ajax , 请求回来的数据, 都可以放在 data 身上
   * !data 中的数据都是可读可写的
   */
  data() {
    return {
      title: 'title',
      content: '内容'
    }
  },
  methods: {
    btnClick() {
      // !props 中传递过来的数据不可以被修改, 否则 vue 会发出警告 吼吼吼~~~
      // //this.parmas = '修改了父组件传递的数据'
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
