<template lang="pug">
el-card(style='margin-bottom: 20px')
  el-button(type='success' icon='plus' size='small' style='float: right;') 添加链接
  .clearfix
</template>

<script>
import { Button, Card } from 'element-ui'

export default {
  components: {
    [Button.name]: Button,
    [Card.name]: Card
  }
}
</script>
