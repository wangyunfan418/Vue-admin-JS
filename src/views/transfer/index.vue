<template>
  <div>
    <transfer-son :parmas="msg" />
  </div>
</template>
<script>
/**
 * !父组件可以在引用子组件的时候,通过属性绑定(v-bind)的形式, 把需要传递给子组件的数据以属性绑定的形式传递到子组件内部
 * ?当父组件传递过去的数据, 子组件需要 props 接受
 */
import TransferSon from '@/components/TransferSon'
export default {
  components: {
    TransferSon
  },
  data() {
    return {
      msg: '123 - 啊, 父组件中的数据'
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
