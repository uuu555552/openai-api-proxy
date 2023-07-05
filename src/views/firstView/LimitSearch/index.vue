<template>
  <div>
    <div class="limit-search">
      <div class="limit-label">输入API  KEY&nbsp;&nbsp;<span class="limit-tip">本站不保存key信息，查询后请自行保存</span></div>
      <div>
        <el-input placeholder="请输入API  KEY" v-model="privateKey" style="width: 100%;">
          <el-button slot="append" icon="el-icon-search" @click="onSearch">搜索</el-button>
        </el-input>
      </div>
    </div>
    <el-table
      :data="tableData"
      style="width: 100%"
      :maxHeight="maxHeight + 'px'"
    >
      <el-table-column prop="privateKey" width="480" label="API KEY" align="center" show-overflow-tooltip></el-table-column>
      <el-table-column prop="totalPrice" label="总额度" align="center">
        <template v-slot="scope">
          ${{ parseFloat(scope.row.totalPrice / 100).toFixed(2) }}
        </template>
      </el-table-column>
      <el-table-column prop="usePrice" label="已使用" align="center">
        <template v-slot="scope">
          ${{ parseFloat(scope.row.usePrice / 100).toFixed(2) }}
        </template>
      </el-table-column>
      <el-table-column prop="residuePrice" label="剩余量" align="center">
         <template v-slot="scope">
          ${{ parseFloat(scope.row.residuePrice / 100).toFixed(2) }}
        </template> 
      </el-table-column>
      <el-table-column prop="inputPrice" label="已请求" align="center">
        <template v-slot="scope">
          ${{ parseFloat(scope.row.inputPrice / 100).toFixed(2) }}
        </template>
      </el-table-column>
      <el-table-column prop="responsePrice" label="已响应" align="center">
        <template v-slot="scope">
          ${{ parseFloat(scope.row.responsePrice / 100).toFixed(2) }}
        </template>
      </el-table-column>
      <el-table-column prop="useRatio" label="已用比例" align="center">
         <template v-slot="scope">
            <el-progress 
              :text-inside="true" 
              :stroke-width="20" 
              :percentage="scope.row.useRatio" 
              status="success"
            ></el-progress>
        </template> 
      </el-table-column>
      <el-table-column prop="useDate" width="120" label="使用时间" align="center"></el-table-column>
      <el-table-column prop="expireTime" width="160" label="到期时间" align="center"></el-table-column>
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
  </div>
</template>
<script>
import { getPrivateKeyTotal } from "@/api/merchantKey"

export default {
  name: 'LimitSearch',
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
      maxHeight: 500,
      privateKey: ''
    }
  },
  methods: {
    /** 查询列表 */
    onSearch() {
      // 执行查询
      const params = {
        pageIndex: this.pageIndex,
        pageSize: this.pageSize,
        privateKey: this.privateKey
      }
      this.loading = true
      getPrivateKeyTotal(params).then(response => {
        if (response && response.data) {
          this.tableData = response.data.records.map(item => {
            item.useRatio = Number((item.usePrice / item.totalPrice * 100).toFixed(2))
            return item
          })
          this.total = response.data.total
        }
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
.limit-search {
  width: 50%;
  margin: 0 auto 50px;
}
.limit-label {
  font-size: 20px;
  color: #fff;
  font-weight: 700;
  margin-bottom: 20px;
}
.limit-tip {
  color: #e8e8e8;
  font-size: 12px;
  font-weight: 500;
}
/deep/ .el-input-group__append {
  background: #67C23A !important;
  color: #fff;
}

</style>
