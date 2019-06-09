<template>
  <div ref="EchartsBrokenLineDemo" class="container-pie" />
</template>
<script>
import echarts from 'echarts'
import resize from '../mixins/resize'

export default {
  name: 'BrokenLineDemo',
  mixins: [resize],
  props: {
    chartType: {
      type: String,
      default: ''
    },
    chartData: {
      type: Array,
      default: () => []
    },
    xchartData: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      chartDataList: []
    }
  },
  computed: {},
  mounted() {
    this.getBrokenLineCharts()
    console.table(this.xchartData)
  },
  methods: {
    getBrokenLineCharts() {
      // !初始化echarts实例, 挂载到实例
      const ChartBrokenLine = echarts.init(this.$refs.EchartsBrokenLineDemo)
      // !绘制图表
      ChartBrokenLine.setOption({
        // ?颜色值
        color: ['#3498db', '#74b9ff', '#2ecc71', '#f1c40f', '#e74c3c'],
        title: {
          // text: '折线图堆叠'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          // data: ['产线1故障率', '产线2故障率', '产线3故障率', '产线4故障率', '产线5故障率']
          data: this.chartDataList.name
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: this.xchartData
        },
        yAxis: {
          type: 'value'
        },
        // series: [
        //   {
        //     name: '产线1故障率',
        //     type: 'line',
        //     smooth: false,
        //     data: this.yAxisData
        //   },
        // ]
        series: this.chartData
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
