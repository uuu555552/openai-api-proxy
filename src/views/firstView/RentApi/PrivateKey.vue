<template>
  <div class="container">
    <div class="tool">
      <el-button icon="el-icon-plus" type="primary" @click="openAddPrivateKey()">
        生成私钥
      </el-button>
      <el-button type="text" @click="goBack()">
        回到主页
        <i class="el-icon-arrow-right el-icon--right"></i>
      </el-button>
    </div>
    <el-table
      :data="tableData"
      style="width: 100%"
      :maxHeight="maxHeight + 'px'"
    >
      <el-table-column prop="privateKey" width="450" label="私钥APIkey" align="center" ></el-table-column>
      <el-table-column prop="remark" width="160" label="备注" align="center"></el-table-column>
      <el-table-column prop="createTime" width="160" label="添加时间" align="center"></el-table-column>
      <el-table-column prop="expireTime" width="160" label="截止时间" align="center"></el-table-column>
      <el-table-column prop="model" label="类型" align="center"></el-table-column>
      <el-table-column prop="totalPrice" label="总额度" align="center">
        <template v-slot="scope">
          ${{ parseFloat(scope.row.totalPrice / 100).toFixed(2) }}
        </template>
      </el-table-column>
      <el-table-column prop="usePrice" label="已用额度" align="center">
        <template v-slot="scope" >
          ${{ parseFloat(scope.row.usePrice / 100).toFixed(2) }}
        </template>
      </el-table-column>
      <el-table-column prop="residuePrice" label="剩余额度" align="center">
         <template v-slot="scope">
          ${{ parseFloat(scope.row.residuePrice / 100).toFixed(2) }}
        </template> 
      </el-table-column>
      <!-- <el-table-column prop="token" label="token/积分" align="center"></el-table-column> -->
      <el-table-column fixed="right" label="操作" width="100" align="center">
        <template slot-scope="scope">
          <el-button @click="handleRenew(scope.row)" type="text" size="small">续费</el-button>
          <el-divider direction="vertical"></el-divider>
          <el-button @click="handleDel(scope.row)" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页组件 -->
    <div v-show="total>0" style="margin-top:10px;text-align: right;">
      <el-pagination 
        background 
        layout="total, prev, pager, next, sizes" 
        :total="total" 
        :current-page="pageIndex" 
        @current-change="pageChange" 
        @size-change="sizeChange"
      ></el-pagination>
    </div>

    <!-- 生成密钥 -->
    <AddPrivateForm ref="addPrivateForm" @submit="getList()" />

    <!-- 续费 -->
    <RenewForm ref="renewForm" @submit="getList()" />
  </div>
</template>

<script>
import AddPrivateForm from './AddPrivateForm.vue'
import RenewForm from './RenewForm.vue'
import { getPrivateKeyList, delPrivateKey } from "@/api/merchantKey";

export default {
  name: 'PrivateKey',
  components: {
    AddPrivateForm,
    RenewForm
  },
  props: {
    merchantKeyId: {
      type: [String, Number]
    }
  },
  data() {
    return {
      // 查询参数
      pageIndex: 1,
      pageSize: 10,
      // 总条数
      total: 0,
      // 列表数据
      tableData: [],
      loading: false,
      maxHeight: 500
    }
  },
  mounted() {
    this.getList();
  },
  methods: {
    /** 查询列表 */
    getList() {
      // 执行查询
      const params = {
        pageIndex: this.pageIndex,
        pageSize: this.pageSize,
        merchantKeyId: this.merchantKeyId
      }
      this.loading = true
      getPrivateKeyList(params).then(response => {
        this.tableData = response.data.records
        this.total = response.data.total
        this.calcTableHeight()
        this.loading = false
      });
    },
    // 计算表格高度
    calcTableHeight() {
      const targetDom = this.$el
      const clientHeight = document.body.clientHeight
      const { top } = targetDom.getBoundingClientRect()
      const bodyHeight = clientHeight - top - 120
      this.maxHeight = bodyHeight
      console.log('maxHeight', this.maxHeight)
    },
    // 点击回到主页
    goBack() {
      this.$emit('change', null)
    },
    // 点击生成密钥
    openAddPrivateKey() {
      this.$refs.addPrivateForm.form.merchantKeyId = this.merchantKeyId
      this.$refs.addPrivateForm.visible = true
    },
    // 续费
    handleRenew(row) {
      this.$refs.renewForm.form.privateKey = row.privateKey
      this.$refs.renewForm.visible = true
    },
    // 点击删除
    handleDel(row) {
      this.$confirm('此操作将永久删除该key, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        delPrivateKey(row.id).then(response => {
          if (response.code === 200) {
            this.getList();
            this.$message.success('删除成功')
          } else {
            this.$message.error(response.msg || '删除失败')
          }
        });
      }).catch(() => {
        this.$message.info('已取消删除')        
      }); 
    },
    pageChange (e) {
      this.pageIndex = e
      this.getList()
    },
    sizeChange (e) {
      this.pageIndex = 1
      this.pageSize = e
      this.getList()
    }
  }
}
</script>

<style lang="scss" scoped>
.tool {
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
