<template>
  <v-app>
    <v-content>
      <CountDown/>
    </v-content>
    <v-footer :fixed="fixed" app>
      <v-layout column align-center>
      <span>&copy; Deng Qi 2018</span>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
import CountDown from './components/CountDown'

export default {
  name: 'App',
  components: {
    CountDown
  },
  data () {
    return {
      fixed: false,
    }
  }
}
</script>

<style>
body {
  background-color: #F5F5F5;
}
</style>
