<template>
  <div class="form-style">
    <form-rules
      :span="span"
      :form="form"
      :form-data="formData"
      :form-set="formSet"
      @subMit="subMit"
    />
  </div>
</template>
<script>
import formRules from '@/components/FormRules/formRules'
export default {
  components: {
    formRules
  },
  data() {
    return {
      form: {},
      // ?表单配置项
      formSet: {
        isFilterBar: false,
        isSeach: false,
        isExport: false,
        isImport: false,
        // ?确定按钮
        submitShow: true,
        // ?取消按钮
        cancelShow: true
      },
      // ?网格
      span: 12,
      // ?数据
      formData: [
        {
          key: 'name',
          trigger: 'blur',
          name: '姓名',
          width: '80px',
          maxlength: 20,
          minlength: 0,
          type: 'text',
          size: 'mini',
          validator: ['isNotEmpty', '*maxLengh?5']
        }, {
          key: 'time',
          trigger: 'blur',
          name: '开始时间',
          width: '80px',
          maxlength: 2,
          minlength: 0,
          type: 'date',
          size: 'small ',
          validator: ['isNotEmpty', '*maxLengh?5']
        }, {
          key: 'address',
          trigger: 'blur',
          name: '地址',
          width: '80px',
          maxlength: 20,
          minlength: 0,
          type: 'select',
          size: 'small ',
          validator: ['isNotEmpty', '*maxLengh?5'],
          selects: [
            {
              id: '1',
              label: 'China',
              value: 'China'
            }, {
              id: '2',
              label: 'US',
              value: 'US'
            }, {
              id: '3',
              label: 'UK',
              value: 'UK'
            }
          ]
        }, {
          key: 'remake',
          trigger: 'blur',
          name: '备注',
          width: '80px',
          maxlength: 200,
          minlength: 0,
          type: 'textarea'
        }
      ]
    }
  },
  mounted() {

  },
  methods: {
    subMit() {
      console.log(111)
    }
  }
}
</script>
<style lang="scss" scoped>
.form-style {
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
}
</style>

