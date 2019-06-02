<template>
  <div>
    <h1>这是父组件</h1>
    <means-list @function="show" />
  </div>
</template>
<script>
/**
 * !父组件向子组件传递方法, 使用的是事件绑定机制(v-on: (@))
 * ?当我们自定义了一个事件属性之后, 那么, 子组件就能够,通过某些方式, 来调用传递进去的这个方法了
 */
import MeansList from './components/meansIndex'
export default {
  components: {
    MeansList
  },
  data() {
    return {
      dataMsgFormSon: null
    }
  },
  methods: {
    /**
     * !调用父组件的方法, 并向父组件传参
     */
    show(data) {
      // console.log('调用了父组件身上的 show 方法; --- 这是传递的参数: ' + this.sonMsg)
      /**
       * !data 是父组件传递过来的一个对象
       * ?dataMsgFormSon 可以拿到父组件传递过来的数据
       */
      console.log(data)
      this.dataMsgFormSon = data
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
