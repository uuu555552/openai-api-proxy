<template>
  <div>
    <el-dialog
      title="生成私钥"
      :visible.sync="visible"
      width="600px"
      center
      :close-on-click-modal="false"
    >
      <el-form ref="ruleForm" :model="form" :rules="ruleForm" label-width="90px">
        <el-form-item label="私钥金额" prop="totalPrice">
          <el-input 
            placeholder="请输入金额" 
            v-model="form.totalPrice" 
            style="width: 400px"
          >
          </el-input>
        </el-form-item>
        <el-form-item label="截止时间" prop="expireTime">
        <el-date-picker 
          v-model="form.expireTime" 
          type="datetime" 
          value-format="yyyy-MM-dd HH:mm:ss" 
          placeholder="请选择截止时间" 
          style="width: 400px"
        ></el-date-picker>
      </el-form-item>
      <el-form-item label="备注" prop="remark">
        <el-input 
          type="textarea" 
          placeholder="请输入备注" 
          v-model="form.remark" 
          style="width: 400px"
        ></el-input>
      </el-form-item>
      </el-form>
      <div slot="footer">
        <el-button @click="handleReset">重置</el-button>
        <el-button type="primary" @click="handleSubmit">确定</el-button>
      </div>
    </el-dialog>

    <PrivateKeyInfo ref="privateKeyInfoForm" />
  </div>
</template>

<script>
import { addPrivateKey } from "@/api/merchantKey";
import PrivateKeyInfo from './PrivateKeyInfo.vue'

export default {
  name: 'AddPrivateForm',
  components: {
    PrivateKeyInfo
  },
  data() {
    return {
      visible: false,
      form: {
        merchantKeyId: '',
        totalPrice: '',
        expireTime: '',
        remark: ''
      },
      ruleForm: {
        totalPrice: [{ required: true, message: '请输入', trigger: 'blur' }],
        expireTime: [{ required: true, message: '请选择', trigger: 'change' }],
        remark: [{ required: true, message: '请输入', trigger: 'blur' }],
      },
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
    // 生成私钥表单提交
    handleSubmit () {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          addPrivateKey(this.form).then(response => {
            if (response.code === 200) {
              this.$message.success('添加成功');
              this.visible = false
              this.$emit('submit')
              this.$refs.privateKeyInfoForm.visible = true
              this.$refs.privateKeyInfoForm.privateInfo.privateKey = response.msg
            } else {
              this.$message.error(response.msg || '添加失败');
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