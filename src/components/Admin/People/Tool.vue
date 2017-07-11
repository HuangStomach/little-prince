<template lang="pug">
el-card(style='margin-bottom: 20px')
  el-row
    el-col(:span='6')
      el-input(placeholder='请输入关键字' size='small' icon='search' v-model='form.keyword' :on-icon-click="search")
    el-col(:span='18')
      el-button(type='success' icon='plus' size='small' style='float: right;') 添加成员
</template>

<script>
import { Button, Card, Input, Row, Col } from 'element-ui'

export default {
  components: {
    [Button.name]: Button,
    [Row.name]: Row,
    [Col.name]: Col,
    [Card.name]: Card,
    [Input.name]: Input
  },
  data () {
    return {
      form: {
        keyword: ''
      }
    }
  },
  methods: {
    search () {

    }
  }
}
</script>
