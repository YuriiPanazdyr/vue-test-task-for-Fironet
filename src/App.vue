<template>
  <div id="app">
    <TableCryptoCompare />
  </div>
</template>

<script>
import TableCryptoCompare from './components/TableCryptoCompare'
export default {
  name: 'App',
  components: {
    TableCryptoCompare
  }
}
</script>

<style scoped>
  #app {
    text-align: center;
  }
</style>
