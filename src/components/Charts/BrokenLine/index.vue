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

export default {
  name: 'BrokenLine',
  data() {
    return {

    }
  },
  mounted() {
    this.getBrokenLineCharts()
  },
  methods: {
    getBrokenLineCharts() {
      // !初始化echarts实例, 挂载到实例
      const ChartBrokenLine = echarts.init(this.$refs.EchartsBrokenLine)
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
          data: ['产线1故障率', '产线2故障率', '产线3故障率', '产线4故障率', '产线5故障率']
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
          data: ['2018-08-01', '2018-08-04', '2018-08-07', '2018-08-10', '2018-08-13', '2018-08-16', '2018-08-19']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '产线1故障率',
            type: 'line',
            smooth: false,
            data: [120, 132, 301, 134, 90, 230, 210]
          },
          {
            name: '产线2故障率',
            type: 'line',
            smooth: false,
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '产线3故障率',
            type: 'line',
            smooth: false,
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: '产线4故障率',
            type: 'line',
            smooth: false,
            data: [320, 332, 121, 334, 390, 330, 320]
          },
          {
            name: '产线5故障率',
            type: 'line',
            smooth: false,
            data: [80, 92, 901, 934, 1290, 1330, 1320]
          }
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
