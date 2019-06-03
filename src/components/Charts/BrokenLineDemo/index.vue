<template>
  <!-- <div class="container-pie"> -->
  <!-- <div class="status">
      <span style="font-size: 20px;">故障率分析:</span>
      <div class="statusBtn">
        <el-button size="mini">昨日故障率</el-button>
        <el-button size="mini">7天故障率</el-button>
        <el-button size="mini">4周故障率</el-button>
        <el-button size="mini">3个月故障率</el-button>
      </div>
    </div> -->
  <!-- echarts 图表 -->
  <div ref="EchartsBrokenLineDemo" class="container-pie" />
  <!-- </div> -->
</template>
<script>
import echarts from 'echarts'

export default {
  name: 'BrokenLineDemo',
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
  computed: {
    // xAxisData() {
    //   return this.chartData.map(function(item) {
    //     return item[0]
    //   })
    // },
    // yAxisData() {
    //   return this.chartData.map(function(item) {
    //     return item[1]
    //   });
    // }
  },
  mounted() {
    this.getBrokenLineCharts()
    console.table(this.xchartData)
  },
  methods: {
    // chartList() {
    //   let arrData = this.chartData
    //   let obj = []
    //   arrData.map((item) => {
    //     // console.log(item.data)
    //     obj.push({
    //       name: item.name,
    //       data: item.data
    //     })
    //   })
    //   // return obj
    // },
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
