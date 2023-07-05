<template>
  <el-dialog
    title="添加官方APIkey"
    :visible.sync="visible"
    width="800px"
    center
    :close-on-click-modal="false"
  >
    <el-form ref="ruleForm" :model="form" :rules="ruleForm" label-width="100px">
      <el-form-item label="官方APIkey" prop="content">
        <el-input placeholder="请输入官方APIkey" v-model="form.content" style="width: 600px">
        </el-input>
      </el-form-item>
      <el-form-item label="备注" prop="remark">
        <el-input type="textarea" placeholder="请输入备注" v-model="form.remark" style="width: 600px">
        </el-input>
      </el-form-item>
    </el-form>
    <div slot="footer">
      <el-button @click="handleReset">重置</el-button>
      <el-button type="primary" @click="handleAddKey">确定</el-button>
    </div>
  </el-dialog>
</template>

<script>
import { addKey } from "@/api/merchantKey";
import PrivateKeyInfo from './PrivateKeyInfo.vue'

export default {
  name: 'AddKeyForm',
  components: {
    PrivateKeyInfo
  },
  data() {
    return {
      visible: false,
      form: {
        content: '',
        remark: ''
      },
      ruleForm: {
        content: [{ required: true, message: '请输入', trigger: 'blur' }],
        remark: [{ required: true, message: '请输入', trigger: 'blur' }]
      }
    }
  },
  watch: {
    visible(newVal) {
      if (newVal) {
        this.$nextTick(() =>{
          this.handleReset()
        })
      }
    }
  },
  methods: {
    // 添加官方APIkey表单提交
    handleAddKey() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          addKey(this.form).then(response => {
            if (response.code === 200) {
              this.$message.success('添加成功')
              this.visible  = false
              this.$emit('submit')
            } else {
              this.$message.error(response.msg || '添加失败')
            }
          });
        } else {
          return false
        }
      })
    },
    handleReset() {
      this.$refs.ruleForm.resetFields()
    }
  }
}
</script>