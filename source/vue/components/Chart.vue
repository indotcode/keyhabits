<template>
  <div>
    <h2 class="p10">График семян</h2>
    <highcharts :options="options"></highcharts>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { Chart } from "highcharts-vue";
export default {
  components: {
    highcharts: Chart,
  },
  data() {
    return {
      chartOptions: {
        title: {
          text: "Урожай семян на Луне",
        },
        subtitle: {
          text: 'по мотивам книги "Незнайка на Луне"',
        },
        credits: {
          enabled: false,
        },
        yAxis: {
          title: {
            text: "шт./м2",
          },
          tickInterval: 10
        },
        xAxis: {
          title: {
            text: "годы",
          },
          categories: ["2010", "2011", "2012", "2013"],
        },
        series: [],
      },
    };
  },
  computed: {
    ...mapGetters(["listStore"]),
    options() {
      this.chartOptions.series = this._seriesRes();
      return this.chartOptions;
    },
  },
  methods: {
    _seriesRes(){
      let series = [];
      this.listStore.forEach((item, i) => {
        let data = [];
        item.params.forEach((item, i) => {
          data[i] = item.value;
        });
        series[i] = {
          type: "area",
          name: item.name,
          data: data,
        };
      });
      return series;
    }
  }, 
  mounted() {
    this.chartOptions.series = this._seriesRes();
  },
};
</script>

<style lang="scss" scoped>
</style>