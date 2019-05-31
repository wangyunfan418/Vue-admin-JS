<template>
  <div class="container-pie">
    <div class="status">
      <span style="font-size: 20px;">设备状态:</span>
      <div class="statusBtn">
        <el-button size="mini">日设备状态</el-button>
        <el-button size="mini">周设备状态</el-button>
        <el-button size="mini">月设备状态</el-button>
      </div>
    </div>
    <!-- echarts 图表 -->
    <div ref="EchartsPie" class="item-1" />
    <!-- 点击台 -->
    <div class="item-2">
      <div class="item-2-1">
        <div class="item-2-1-1">
          <span class="iconfont icon-yunxingzhong" />
        </div>
        <div class="item-2-1-2">3 台</div>
        <div class="item-2-1-3">
          <el-tag class="rewrite-tag" size="mini" style="background: #3498db;">运行</el-tag>
        </div>
      </div>
      <div class="item-2-2">
        <div class="item-2-1-1">
          <span class="iconfont icon-tingzhi" />
        </div>
        <div class="item-2-1-2">12 台</div>
        <div class="item-2-1-3">
          <el-tag class="rewrite-tag" size="mini" style="background: #74b9ff;">待机</el-tag>
        </div>
      </div>
      <div class="item-2-3">
        <div class="item-2-1-1">
          <span class="iconfont icon-xuanzhuan" />
        </div>
        <div class="item-2-1-2">9 台</div>
        <div class="item-2-1-3">
          <el-tag class="rewrite-tag" size="mini" style="background: #2ecc71;">空转</el-tag>
        </div>
      </div>
      <div class="item-2-4">
        <div class="item-2-1-1">
          <span class="iconfont icon-tiaoshi" />
        </div>
        <div class="item-2-1-2">4 台</div>
        <div class="item-2-1-3">
          <el-tag class="rewrite-tag" size="mini" style="background: #f1c40f;">调试</el-tag>
        </div>
      </div>
      <div class="item-2-5">
        <div class="item-2-1-1">
          <span class="iconfont icon-guzhangleixing" />
        </div>
        <div class="item-2-1-2">18 台</div>
        <div class="item-2-1-3">
          <el-tag class="rewrite-tag" size="mini" style="background: #e74c3c;">故障</el-tag>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'Pie',
  data() {
    return {

    }
  },
  mounted() {
    this.getChartsPie()
  },
  methods: {
    getChartsPie() {
      // !初始化echarts实例, 挂载到实例
      const ChartPie = echarts.init(this.$refs.EchartsPie)
      // ?绘制图表
      ChartPie.setOption({
        // ?颜色值
        color: ['#3498db', '#74b9ff', '#2ecc71', '#f1c40f', '#e74c3c'],
        title: {
          // ?title
          // text: '设备概况',
          // ?位置
          x: 'left',
          padding: [20, 0, 0, 20]
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        // ?标签图形展示
        legend: {
          // orient: 'vertical',
          bottom: 'bottom',
          // ?标签图形内边距
          padding: [10, 0, 20, 0],
          // ?icon, 改变标签图形形状. circle: 圆圈
          icon: 'circle',
          data: ['运行', '待机', '空转', '调试', '故障']
        },
        series: [
          {
            name: '数据来源',
            type: 'pie',
            radius: '55%',
            center: ['50%', '50%'],
            // ?添加数据百分比
            label: {
              formatter: '{b}: ({d}%)'
            },
            data: [
              { value: 198, name: '运行' },
              { value: 335, name: '待机' },
              { value: 310, name: '空转' },
              { value: 234, name: '调试' },
              { value: 135, name: '故障' }
            ],
            // ?项目风格样式
            itemStyle: {
              emphasis: {
                // ?阴影效果
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
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
    height: 280px;
  }

  .item-2 {
    display: flex;
    justify-content: space-evenly;

    .item-2-1,
    .item-2-2,
    .item-2-3,
    .item-2-4,
    .item-2-5 {
      cursor: pointer;
      display: grid;
      grid-template-columns: 40% 60%;
      grid-template-rows: 50% 50%;
      place-items: center;
      width: 100px;
      height: 55px;
      border: 1px solid #b2bec3;
      background: #dfe6e9;
      color: #000000;
      font-weight: 100;
      border-radius: 6px;
      overflow: hidden;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);

      .item-2-1-1 {
        grid-column: 1 / 2;
        grid-row: 1 / 3;

        // !图标字体, 大小
        .iconfont {
          font-size: 26px;
          color: #636e72;
        }
      }

      .item-2-1-3 > .rewrite-tag {
        color: #ffffff !important;
        border: none !important;
      }
    }
  }
}
</style>
