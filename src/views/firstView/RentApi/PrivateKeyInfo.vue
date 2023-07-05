<template>
  <el-dialog
    title="生成私钥信息"
    :visible.sync="visible"
    width="800px"
    center
    :close-on-click-modal="false"
  >
    <el-form ref="ruleForm" :model="privateInfo" label-width="90px">
      <el-form-item label="私钥key" prop="privateKey">
        <el-input 
          placeholder="请输入私钥key" 
          readonly
          v-model="privateInfo.privateKey" 
          style="width: 600px"
        >
          <el-button 
            slot="append" 
            class="copy-privateKey"
            data-clipboard-action="copy"
            :data-clipboard-text="privateInfo.privateKey"
            @click="copyLink('privateKey')"
          >复制</el-button>
        </el-input>
      </el-form-item>
      <el-form-item label="API地址" prop="url">
        <el-input 
          placeholder="请输入API地址"  
          readonly
          v-model="privateInfo.url" 
          style="width: 600px"
        >
          <el-button 
            slot="append" 
            class="copy-url"
            data-clipboard-action="copy"
            :data-clipboard-text="privateInfo.url"
            @click="copyLink('url')"
          >复制</el-button>
        </el-input>
      </el-form-item>
    </el-form>
    <el-alert
      title="使用时更换openai的API为上面API地址"
      type="warning"
      :closable="false"
      show-icon>
    </el-alert>
  </el-dialog>
</template>

<script>
import Clipboard from 'clipboard'

export default {
  name: 'PrivateKeyInfo',
  data() {
    return {
      visible: false,
      privateInfo:{
        url: 'http://api.zhwtgpt.com',
        privateKey: ''
      }
    }
  },
  methods: {
    // 复制
    copyLink(type) {
      let clipboard = new Clipboard('.copy-' + type)
      clipboard.on('success', () => {
        this.$message.success('复制成功')
        clipboard.destroy()
      })
      clipboard.on('error', () => {
        this.$message.error('复制失败')
        clipboard.destroy()
      }) 
    },
  }
}
</script>