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
      <BrokenLine />
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

export default {
  name: 'Dashboard',
  components: {
    Pie,
    Columnar,
    BrokenLine,
    Round
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
