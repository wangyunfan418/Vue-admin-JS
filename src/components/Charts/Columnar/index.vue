<template>
  <div class="container-pie">
    <div class="status">
      <span style="font-size: 20px;">产量统计:</span>
      <div class="statusBtn">
        <el-button size="mini">昨日产量</el-button>
        <el-button size="mini">7日产量</el-button>
        <el-button size="mini">4周产量</el-button>
        <el-button size="mini">3个月产量</el-button>
      </div>
    </div>
    <!-- echarts 图表 -->
    <div ref="EchartsColimnar" class="item-1" />
  </div>
</template>
<script>
import echarts from 'echarts'
export default {
  name: 'Columnar',
  data() {
    return {
    }
  },
  mounted() {
    this.getChartsColimnar()
  },
  methods: {
    getChartsColimnar() {
      // !初始化echarts实例, 挂载到实例
      const ChartColimnar = echarts.init(this.$refs.EchartsColimnar)
      // !绘制图表
      ChartColimnar.setOption({
        color: ['#4cd137', '#fbc531', '#00a8ff'],
        legend: {},
        tooltip: {
          trigger: 'axis',
          // !坐标轴指示器，坐标轴触发有效
          axisPointer: {
          // !默认为直线，可选为：'line' | 'shadow'
            type: 'shadow'
          }
        },
        dataset: {
          source: [
            ['product', '产线1', '产线2', '产线3'],
            ['5月1日', 43, 85, 93],
            ['5月2日', 83, 73, 55],
            ['5月3日', 86, 65, 82],
            ['5月4日', 72, 53, 39],
            ['5月5日', 12, 83, 69]
          ]
        },
        xAxis: { type: 'category' },
        yAxis: {},
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        series: [
          { type: 'bar' },
          { type: 'bar' },
          { type: 'bar' }
        ]
      })
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
