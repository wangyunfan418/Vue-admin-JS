<template>
  <div class="container">
    <div class="item">
      <Pie />
    </div>
    <div class="item">
      <Columnar />
    </div>
    <div class="item">
      <BrokenLine :option="chartData" />
    </div>
    <div class="item">
      <Round />
    </div>
    <div class="item item-alarm">
      <Pie />
    </div>
    <div class="item item-monitor">
      <!-- <BrokenLineDemo chart-type="line" :chart-data="chartData" :xchart-data="xchartData" /> -->
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
// import BrokenLineDemo from '@/components/Charts/BrokenLineDemo/index'

// import random from 'loadsh/random'
import { clearInterval } from 'timers'

export default {
  name: 'Dashboard',
  components: {
    Pie,
    Columnar,
    BrokenLine,
    Round
    // BrokenLineDemo
  },
  data() {
    return {
      xchartData: ['2018-08-01', '2018-08-02', '2018-08-03', '2018-08-04', '2018-08-05'],
      chartData: [{
        createTime: '周一',
        performanceRate: {
          performanceRate: '0.5'
        },
        timeRate: {
          timeRate: 'timeRate'
        },
        utilization: 0.2,
        yieldRate: {
          yieldRate: 'timeRate'
        }
      },
      {
        createTime: '周二',
        performanceRate: {
          performanceRate: '0.5'
        },
        timeRate: {
          timeRate: 'timeRate'
        },
        utilization: 0.8,
        yieldRate: {
          yieldRate: 'timeRate'
        }
      },
      {
        createTime: '周三',
        performanceRate: {
          performanceRate: '0.5'
        },
        timeRate: {
          timeRate: 'timeRate'
        },
        utilization: 0.65,
        yieldRate: {
          yieldRate: 'timeRate'
        }
      },
      {
        createTime: '周四',
        performanceRate: {
          performanceRate: '0.5'
        },
        timeRate: {
          timeRate: 'timeRate'
        },
        utilization: 0.65,
        yieldRate: {
          yieldRate: 'timeRate'
        }
      },
      {
        createTime: '周五',
        performanceRate: {
          performanceRate: '0.5'
        },
        timeRate: {
          timeRate: 'timeRate'
        },
        utilization: 0.95,
        yieldRate: {
          yieldRate: 'timeRate'
        }
      }]
      // ! 折线图
      // chartOption:
    }
  },
  computed: {
  },
  mounted() {
    // this.interval = setInterval(() => {
    //   this.chartOption.series[0].data = this.chartOption.series[0].data.map(() => random(1000))
    //   this.chartOption.series[1].data = this.chartOption.series[1].data.map(() => random(2000))
    //   this.chartOption.series[2].data = this.chartOption.series[2].data.map(() => random(2000))
    //   this.chartOption = {
    //     ...this.chartOption
    //   }
    // }, 3000)
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
