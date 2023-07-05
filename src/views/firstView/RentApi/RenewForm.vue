<template>
  <el-dialog
    title="续费"
    :visible.sync="visible"
    width="800px"
    center
    :close-on-click-modal="false"
  >
    <el-form ref="ruleForm" :model="form" :rules="ruleForm" label-width="100px">
      <el-form-item label="API KEY" prop="privateKey">
        <el-input 
          placeholder="请输入API KEY" 
          disabled 
          v-model="form.privateKey" 
          style="width: 600px"
        ></el-input>
      </el-form-item>
      <el-form-item label="续费金额" prop="renewPrice">
        <el-input-number 
          placeholder="请输入续费金额" 
          v-model="form.renewPrice" 
          :min="0"
          style="width: 600px"
        ></el-input-number>
      </el-form-item>
      <el-form-item label="截止时间" prop="expireTime">
        <el-date-picker 
          v-model="form.expireTime" 
          type="datetime" 
          value-format="yyyy-MM-dd HH:mm:ss" 
          placeholder="请选择截止时间" 
          style="width: 600px"
        ></el-date-picker>
      </el-form-item>
    </el-form>
    <div slot="footer">
      <el-button @click="handleReset">重置</el-button>
      <el-button type="primary" @click="handleAddKey">确定</el-button>
    </div>
  </el-dialog>
</template>

<script>
import { renewPrivateKeyTotal } from "@/api/merchantKey";

export default {
  name: 'AddKeyForm',
  data() {
    return {
      visible: false,
      form: {
        privateKey: '',
        renewPrice: '',
        expireTime: ''
      },
      ruleForm: {
        privateKey: [{ required: true, message: '请输入', trigger: 'blur' }],
        renewPrice: [{ required: true, message: '请输入', trigger: 'blur' }],
        expireTime: [{ required: true, message: '请选择', trigger: 'blur' }]
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
    // 表单提交
    handleAddKey() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.form.renewPrice = Number(this.form.renewPrice)
          renewPrivateKeyTotal(this.form).then(response => {
            if (response.code === 200) {
              this.$message.success('续费成功')
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
      this.$refs.ruleForm.clearValidate()
      this.form.renewPrice = ''
      this.form.expireTime = ''
    }
  }
}
</script>