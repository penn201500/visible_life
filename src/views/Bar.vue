<template>
  <section class="container">
    <h1> 柱状图对比 </h1>
    <div class="columns">
      <div class="column">
        <h3>Bar Chart</h3>
        <bar-chart></bar-chart>
      </div>
    </div>
    <div class="columns"></div>
  </section>
</template>

<script>
import BarChart from "@/components/BarChart";

export default {
  name: "VueChartJS",
  components: {
    BarChart
  }
};
</script>
