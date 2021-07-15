<template>
  <div class="main">
    <div class="main__item">
      <Form />
    </div>
    <div class="main__item">
      <Chart />
    </div>
  </div>
</template>
    
<script>
import Form from "./components/Form.vue";
import Chart from "./components/Chart.vue";
export default {
  components: {
    Form,
    Chart,
  },
};
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  min-width:300px
}
.main__item {
  width: 50%;
}
@media screen and (max-width: 1024px) {
  .main {
    display: block;
  }
  .main__item {
    width: 100%;
  }
}
</style>