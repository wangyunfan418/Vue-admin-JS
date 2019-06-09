<template>
  <div class="container-pie">
    <div class="status">
      <span style="font-size: 20px;">故障率分析:</span>
      <div class="statusBtn">
        <el-button size="mini">昨日故障率</el-button>
        <el-button size="mini">7天故障率</el-button>
        <el-button size="mini">4周故障率</el-button>
        <el-button size="mini">3个月故障率</el-button>
      </div>
    </div>
    <!-- echarts 图表 -->
    <div ref="EchartsBrokenLine" class="item-1" />
  </div>
</template>
<script>
import echarts from 'echarts'
import debounce from 'loadsh/debounce'
import { addListener, removeListener } from 'resize-detector'

export default {
  name: 'BrokenLine',
  props: {
    option: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {

    }
  },
  watch: {
    // !监听数据变化,更新视图, 深度监听比较消耗性能
    // option: {
    //   handler(value) {
    //     this.ChartBrokenLine.setOption(value)
    //   },
    //   deep: true
    // }
    // !普通监听, 父组件手动改变
    option(value) {
      this.ChartBrokenLine.setOption(value)
    }
  },
  created() {
    // !防抖
    this.resize = debounce(this.resize, 300)
  },
  mounted() {
    this.renderChart()
    addListener(this.$refs.EchartsBrokenLine, this.resize)
  },
  beforeDestroy() {
    removeListener(this.$refs.ChartBrokenLine, this.resize)
    this.ChartBrokenLine.dispose()
    this.ChartBrokenLine = null
  },
  methods: {
    resize() {
      console.log('debounce')
      this.ChartBrokenLine.resize()
    },
    renderChart() {
      // !初始化echarts实例, 挂载到实例
      this.ChartBrokenLine = echarts.init(this.$refs.EchartsBrokenLine)
      this.ChartBrokenLine.setOption(this.option)
    }
  }
}
</script>
<style lang="scss" scoped>
.container-pie {
  width: 100%;
  height: 400px;

  .status {
    display: flex;
    justify-content: space-between;
    padding: 10px 10px 0 10px;
  }

  .item-1 {
    width: 100%;
    height: 360px;
  }
}
</style>
