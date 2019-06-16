<template>
  <div>
    <!-- <el-row :gutter="30">
    <el-col :span="this.span">-->
    <el-form :model="form">
      <el-form-item v-for="item in formData" :key="item.key" :label="item.name" :prop="item.key">
        <el-input
          v-if="item.type === 'text'"
          v-model="form[item.key]"
          :size="item.size"
          clearable
          :maxlength="item.maxlength"
          :minlenght="item.minlength"
        />
        <el-date-picker
          v-if="item.type === 'date'"
          v-model="form[item.key]"
          type="date"
          placeholder="选择日期"
          :size="item.size"
          style="width: 100%;"
          :maxlength="item.maxlength"
          :minlenght="item.minlength"
        />
        <el-select
          v-if="item.type === 'select'"
          v-model="form[item.key]"
          placeholder="请选择"
          :size="item.size"
          clearable
          style="width: 100%;"
          :maxlength="item.maxlength"
          :minlenght="item.minlength"
        >
          <el-option
            v-for="select in newArr"
            :key="select.id"
            :label="select.label"
            :value="select.value"
          />
        </el-select>
        <el-input
          v-if="item.type === 'textarea'"
          type="textarea"
          v-model="form[item.key]"
          style="width: 100%;"
          :maxlength="item.maxlength"
          :minlenght="item.minlength"
        ></el-input>
      </el-form-item>
      <el-button v-show="formSet.submitShow" type="primary" size="mini" @click="onSubmit">保存</el-button>
      <el-button v-show="formSet.cancelShow" size="mini" @click="onCancel">取消</el-button>
    </el-form>
    <!-- </el-col>
    </el-row>-->
  </div>
</template>
<script>
export default {
  props: {
    span: {
      type: Number,
      default: ''
    },
    form: {
      type: Object,
      default: () => {}
    },
    formData: {
      type: Array,
      default: () => []
    },
    formSet: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      newArr: []
    }
  },
  mounted() {
    console.log(this.span)
    // !判断formData数组中是否存在数组selects
    this.formData.map((item) => {
      if (!item.selects) {
        return
      } else {
        this.newArr = item.selects
      }
      console.log(this.newArr)
    })
  },
  methods: {
    // !确定按钮点击事件
    onSubmit() {
      console.log('确定按钮点击')
    },
    // !取消按钮点击事件
    onCancel() {
      console.log('取消按钮点击')
    }
  }
}
</script>

