<template>
  <div ref="gantt" class="gantt" />
</template>
<script>
import echarts from 'echarts';
import debounce from 'loadsh/debounce';
import { addListener, removeListener } from 'resize-detector';
export default {
  data() {
    return {};
  },
  watch: {},
  // !页面初始化加载
  mounted() {
    this.randerChart();
    addListener(this.$refs.gantt, this.resize);
  },
  created() {
    this.resize = debounce(this.resize, 100);
  },
  beforeDestroy() {
    removeListener(this.$refs.gantt, this.resize);
    this.ganttChart.dispose();
    this.ganttChart = null;
  },
  // !方法, 处理事件
  methods: {
    resize() {
      this.ganttChart.resize();
    },
    // ?数据渲染
    randerChart() {
      // *          数据 start
      const data = [
        {
          list: [
            {
              id: 1,
              colorNum: 0,
              endTime: '2018-08-02 14:00:00',
              item: 'item1',
              quantity: 1960,
              startTime: '2018-08-02 8:00:00'
            },
            {
              id: 2,
              colorNum: 1,
              endTime: '2018-08-04 12:00:00',
              item: 'item2',
              quantity: 492,
              startTime: '2018-08-04 08:00:00'
            },
            {
              id: 112,
              colorNum: 2,
              endTime: '2018-08-04 18:00:00',
              item: 'item3',
              quantity: 20837,
              startTime: '2018-08-04 14:00:00'
            },
            {
              id: 32,
              colorNum: 3,
              endTime: '2018-08-05 12:00:00',
              item: 'item4',
              quantity: 3620,
              startTime: '2018-08-04 20:00:00'
            },
            {
              id: 89,
              colorNum: 0,
              endTime: '2018-08-05 24:00:00',
              item: 'item5',
              quantity: 7200,
              startTime: '2018-08-05 14:00:00'
            }
          ],
          plant: '工厂1'
        },
        {
          list: [
            {
              id: 231,
              startTime: '2018-08-03 12:00:00',
              endTime: '2018-08-04 12:00:00',
              quantity: 20,
              colorNum: 0,
              item: 'item6'
            }
          ],
          plant: '工厂2'
        },
        {
          list: [
            {
              id: 1233,
              startTime: '2018-08-04 12:00:00',
              endTime: '2018-08-06 00:00:00',
              quantity: 30,
              colorNum: 0,
              item: 'item7'
            },
            {
              id: 12231,
              startTime: '2018-08-06 08:00:00',
              endTime: '2018-08-06 12:00:00',
              quantity: 20,
              colorNum: 1,
              item: 'item8'
            },
            {
              id: 1331,
              startTime: '2018-08-06 14:00:00',
              endTime: '2018-08-08 12:00:00',
              quantity: 10,
              colorNum: 2,
              item: 'item9'
            },
            {
              id: 1455,
              startTime: '2018-08-08 20:00:00',
              endTime: '2018-08-10 12:00:00',
              quantity: 10,
              colorNum: 3,
              item: 'item10'
            }
          ],
          plant: '工厂3'
        },
        {
          list: [
            {
              id: 144,
              startTime: '2018-08-02 20:00:00',
              endTime: '2018-08-03 12:00:00',
              quantity: 20,
              colorNum: 1,
              item: 'item11'
            },
            {
              id: 88,
              startTime: '2018-08-03 20:00:00',
              endTime: '2018-08-04 12:00:00',
              quantity: 15,
              colorNum: 2,
              item: 'item12'
            },
            {
              id: 66,
              startTime: '2018-08-04 20:00:00',
              endTime: '2018-08-05 12:00:00',
              quantity: 15,
              colorNum: 3,
              item: 'item13'
            }
          ],
          plant: '工厂4'
        },
        {
          list: [
            {
              id: 95,
              startTime: '2018-06-04 20:00:00',
              endTime: '2018-08-05 12:00:00',
              quantity: 20,
              colorNum: 1,
              item: 'item14'
            }
          ],
          plant: '工厂5'
        }
      ];
      const start_ = '2018-08-02 00:00:00';
      const end_ = '2018-11-05 24:00:00'; // 自定义时间
      const seriesData = [];
      const yAxisData_plant = []; // 工厂名

      data.forEach((item, index) => {
        console.log(item);
        yAxisData_plant.push(item.plant);
        let bgColor;
        item.list.forEach((listItem, listIndex) => {
          switch (listItem.colorNum) {
            case 0:
              bgColor = '#fc5c65';
              break;
            case 1:
              bgColor = '#fd9644';
              break;
            case 2:
              bgColor = '#26de81';
              break;
            case 3:
              bgColor = '#a55eea';
              break;
            default:
              bgColor = '#fff200';
          }
          const startTime = new Date(listItem.startTime).getTime();
          const endTime = new Date(listItem.endTime).getTime();
          seriesData.push({
            name: listItem.item,
            value: [index, startTime, endTime, listItem.quantity],
            itemStyle: {
              normal: {
                color: bgColor
              }
            }
          });
        });
      });
      // *          数据 end

      // ?Echarts
      this.ganttChart = echarts.init(this.$refs.gantt);
      this.ganttChart.setOption({
        backgroundColor: '#000000',
        tooltip: {
          formatter: function(params) {
            // console.log(params);
            return params.marker + params.name;
          }
        },
        grid: {
          top: 48,
          left: 100,
          right: 50,
          bottom: 50,
          height: 650
        },
        dataZoom: [
          {
            show: true,
            type: 'slider',
            filterMode: 'none',
            realtime: false,
            height: 10,
            top: 720,
            startValue: new Date(start_).getTime(),
            endValue: new Date(start_).getTime() + 3600 * 24 * 1000 * 7,
            minValueSpan: 3600 * 24 * 1000 * 7,
            handleIcon:
              'path://path://M100, 100m -75, 0a75,75 0 1,0 150,0a75,75 0 1,0 -150,0',
            handleSize: '120%',
            handleStyle: {
              color: '#fff',
              shadowColor: 'rgba(0, 0, 0, 0.5)',
              shadowBlur: 4
            },
            textStyle: {
              color: 'transparent'
            },
            borderColor: 'transparent',
            backgroundColor: '#a4b0be',
            dataBackground: {
              lineStyle: {
                width: 0
              },
              areaStyle: {
                color: 'transparent'
              }
            },
            fillerColor: '#7bed9f',
            labelFormatter: ''
          },
          {
            type: 'inside',
            show: true,
            zoomOnMouseWheel: false,
            moveOnMouseWheel: true,
            moveOnMouseMove: true,
            preventDefaultMouseMove: true
          }
        ],
        xAxis: {
          type: 'time',
          min: new Date(start_).getTime(),
          max: new Date(end_).getTime(),
          scale: true,
          // ?日期位置
          position: 'top',
          splitNumber: 7,
          axisLabel: {
            show: true,
            textStyle: {
              color: '#ffffff'
            },
            interval: 0,
            margin: 15,
            fontSize: 14,
            formatter: function(value, index) {
              const date = new Date(value);
              // console.log(date);
              const texts = [
                date.getFullYear(),
                date.getMonth() + 1,
                date.getDate()
              ].join('/');
              return texts;
            }
          },
          axisLine: {
            show: false
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: 'rgba(233,233,233,0.1)'
            }
          },
          axisTick: {
            lineStyle: {
              color: '#fff'
            }
          }
        },
        yAxis: {
          axisLine: {
            onZero: false,
            show: false
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: '#ffffff'
            },
            fontSize: 14
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: 'rgba(233,233,233,0.1)'
            }
          },
          inverse: true,
          data: yAxisData_plant
        },
        series: [
          {
            type: 'custom',
            renderItem: function(params, api) {
              // console.log(api);
              const categoryIndex = api.value(0);
              const start = api.coord([api.value(1), categoryIndex]);
              const end = api.coord([api.value(2), categoryIndex]);
              console.log(start, end);
              // const height = api.size([0, 1])[1] * 0.6;
              const rectShape = echarts.graphic.clipRectByRect(
                {
                  x: start[0],
                  y: start[1] - 5,
                  width: end[0] - start[0],
                  // ?甘特图高度
                  height: 10
                },
                {
                  x: params.coordSys.x,
                  y: params.coordSys.y,
                  width: params.coordSys.width,
                  height: params.coordSys.height
                }
              );

              return (
                rectShape && {
                  type: 'rect',
                  shape: rectShape,
                  style: api.style()
                }
              );
            },
            encode: {
              x: [1, 2],
              y: 0
            },
            data: seriesData
          }
        ]
      });

      // ?点击事件
      this.ganttChart.on('click', function(params) {
        console.log(params);
      });
    }
  }
};
</script>
<style lang='scss' scoped>
.gantt {
  width: 100%;
  height: 750px;
  border: 1px solid #000;
  margin: 1em;
}
</style>
