<template lang="pug">
div
  tool
  el-table(:data='users' stripe style='width: 100%; margin-bottom: 20px;')
    el-table-column(prop="name" label="姓名" width="120")
    el-table-column(prop="contact" label="联系方式" width="240" show-overflow-tooltip=true)
    el-table-column(prop="date" label="创建时间" width="180")
    el-table-column(prop='remark' label='备注' show-overflow-tooltip=true)
    el-table-column(fixed="right" label="操作" width="100")
      template(scope="scope")
        el-button(type="text" size="small") 查看
        el-button(type="text" size="small") 编辑
  el-pagination(:page-size='10' layout='total, prev, pager, next' :total='50' style='float: right;')
</template>

<script>
import Tool from './People/Tool.vue'
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
    users () { return this.$store.getters.userArray }
  },
  beforeMount () {
    this.$store.dispatch({
      type: 'fetchUser'
    })
  }
}
</script>
