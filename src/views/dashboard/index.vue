<template>
  <div class="container">
    <div class="item">
      <Pie />
    </div>
    <div class="item">
      <Columnar />
    </div>
    <div class="item">
      <BrokenLine :option="chartOption" />
    </div>
    <div class="item">
      <Round />
    </div>
    <div class="item item-alarm">
      <Pie />
    </div>
    <div class="item item-monitor">
      <BrokenLineDemo chart-type="line" :chart-data="chartData" :xchart-data="xchartData" />
    </div>
  </div>
</template>

<script>
// !饼图
import Pie from '@/components/Charts/Pie/index'
// !柱状图
import Columnar from '@/components/Charts/Columnar/index'
// !折线图
import BrokenLine from '@/components/Charts/BrokenLine/index'
// !饼图 空心
import Round from '@/components/Charts/Round/index'
// !折线图封装 demo
import BrokenLineDemo from '@/components/Charts/BrokenLineDemo/index'

import random from 'loadsh/random'
import { clearInterval } from 'timers'

export default {
  name: 'Dashboard',
  components: {
    Pie,
    Columnar,
    BrokenLine,
    Round,
    BrokenLineDemo
  },
  data() {
    return {
      xchartData: ['2018-08-01', '2018-08-02', '2018-08-03', '2018-08-04', '2018-08-05'],
      chartData: [
        {
          name: '产线1故障率',
          type: 'line',
          smooth: false,
          data: [20, 12, 1131, 24, 290, 30, 310]
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
      ],
      // ! 折线图
      chartOption: {
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
            // ?动态切换展示方式
            magicType: {
              type: ['line', 'bar', 'stack', 'tiled']
            },
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
      }
    }
  },
  computed: {
  },
  mounted() {
    this.interval = setInterval(() => {
      this.chartOption.series[0].data = this.chartOption.series[0].data.map(() => random(1000))
      this.chartOption.series[1].data = this.chartOption.series[1].data.map(() => random(2000))
      this.chartOption.series[2].data = this.chartOption.series[2].data.map(() => random(2000))
      this.chartOption = {
        ...this.chartOption
      }
    }, 3000)
  },
  beforeDestroy() {
    clearInterval(this.interval)
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.container {
  display: grid;
  padding: 15px;
  grid-template-columns: repeat(2, 49.5%);
  grid-template-rows: 400px 400px 400px 400px;
  gap: 15px;

  .item {
    border: 1px solid #ebeef5;
    background-color: #fff;
    color: #303133;
    border-radius: 4px;
    overflow: hidden;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }

  .item-alarm {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 3;
    grid-row-end: 4;
  }

  .item-monitor {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 4;
    grid-row-end: 5;
  }
}
</style>
