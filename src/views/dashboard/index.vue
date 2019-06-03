<template>
  <div class="container">
    <div class="item">
      <Pie />
    </div>
    <div class="item">
      <Columnar />
    </div>
    <div class="item">
      <BrokenLine />
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
        // ['2018-08-01', 120, '产线1故障率'],
        // ['2018-08-02', 980, '产线2故障率'],
        // ['2018-08-03', 20, '产线3故障率'],
        // ['2018-08-04', 89, '产线4故障率'],
        // ['2018-08-05', 900, '产线5故障率']
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
      ]
    }
  },
  computed: {
  },
  mounted() {

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
