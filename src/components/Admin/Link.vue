<template lang="pug">
div
  tool
  el-table(:data='links' stripe style='width: 100%; margin-bottom: 20px;')
    el-table-column(prop="title" label="标题" width="140")
    el-table-column(prop="redirect" label="地址" width="240" show-overflow-tooltip=true)
    el-table-column(prop="date" label="创建时间" width="180")
    el-table-column(prop='remark' label='备注' show-overflow-tooltip=true)
    el-table-column(fixed="right" label="操作" width="100")
      template(scope="scope")
        el-button(type="text" size="small") 编辑
        el-button(type="text" size="small") 删除
  el-pagination(:page-size='10' layout='total, prev, pager, next' :total='50' style='float: right;')
</template>

<script>
import Tool from './Link/Tool.vue'
import { Button, Pagination, Table, TableColumn } from 'element-ui'

export default {
  components: {
    Tool,
    [Button.name]: Button,
    [Pagination.name]: Pagination,
    [Table.name]: Table,
    [TableColumn.name]: TableColumn
  },
  computed: {
    links () { return this.$store.getters.linkArray }
  },
  beforeMount () {
    this.$store.dispatch({
      type: 'fetchLink'
    })
  }
}
</script>
