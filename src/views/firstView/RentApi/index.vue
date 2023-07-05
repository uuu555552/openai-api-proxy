<template>
  <div>
    <div style="margin-bottom: 10px;">
      <el-button icon="el-icon-plus" type="primary" @click="openAddKey()">
        添加4.0官方APikey
      </el-button>
    </div>
    <el-table
      :data="tableData"
      :maxHeight="maxHeight + 'px'"
      style="width: 100%"
    >
      <el-table-column prop="content" width="450" label="4.0官方APIkey" align="center"></el-table-column>
      <el-table-column prop="remark" width="200" label="备注" align="center"></el-table-column>
      <el-table-column prop="createTime" width="160" label="添加时间" align="center"></el-table-column>
      <el-table-column prop="model" label="类型" align="center"></el-table-column>
      <el-table-column prop="totalPrice" label="总额度" align="center">
        <template v-slot="scope">
          ${{ parseFloat(scope.row.totalPrice / 100).toFixed(2) }}
        </template>
      </el-table-column>
      <el-table-column prop="usePrice" label="已用额度" align="center">
        <template v-slot="scope">
          ${{ parseFloat(scope.row.usePrice / 100).toFixed(2) }}
        </template>
      </el-table-column>
      <el-table-column prop="residuePrice" label="剩余额度" align="center">
         <template v-slot="scope">
          ${{ parseFloat(scope.row.residuePrice / 100).toFixed(2) }}
        </template> 
      </el-table-column>
      <!-- <el-table-column prop="token" label="token/积分" align="center"></el-table-column> -->
      <el-table-column fixed="right" label="操作" width="180" align="center">
        <template slot-scope="scope">
          <el-button @click="handleCreate(scope.row)" type="text" size="small">生成私钥</el-button>
          <el-divider direction="vertical"></el-divider>
          <el-button @click="handleDel(scope.row)" type="text" size="small">删除</el-button>
          <el-divider direction="vertical"></el-divider>
          <el-button @click="handleView(scope.row)" type="text" size="small">详情</el-button>
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

    <!-- 添加官方APIkey -->
    <AddKeyForm ref="addKeyForm" @submit="getList()" />

    <!-- 生成密钥 -->
    <AddPrivateForm ref="addPrivateForm" />
  </div>
</template>

<script>
import AddKeyForm from './AddKeyForm.vue'
import AddPrivateForm from './AddPrivateForm.vue'
import { keyList, delKey } from "@/api/merchantKey"

export default {
  name: 'RentApi',
  components: {
    AddKeyForm,
    AddPrivateForm
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
        pageSize: this.pageSize
      }
      this.loading = true
      keyList(params).then(response => {
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
    // 点击添加官方APIkey
    openAddKey() {
      this.$refs.addKeyForm.visible = true
    },
    // 点击生成私钥
    handleCreate(row) {
      this.$refs.addPrivateForm.visible = true
      this.$refs.addPrivateForm.form.merchantKeyId = row.id
    },
    // 点击详情
    handleView(row) {
      this.$emit('change', row.id)
    },
    // 点击删除
    handleDel(row) {
      this.$confirm('此操作将永久删除该key, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        delKey(row.id).then(response => {
          if (response.code === 200) {
            this.getList()
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
<style>
.el-pagination__total {
  color: #fff !important;
}
</style>
