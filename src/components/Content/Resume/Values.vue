<template>
  <section class="values">
    <div class="total">
      <p class="subtitle">Ganhos</p>
      <p class="title">R$ 2.789,21</p>
    </div>

    <div class="total">
      <p class="subtitle">Saídas</p>
      <p class="title">R$ 1.2878,47</p>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  name: "Values",
};
</script>

<style scoped>
.values {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 14px 0px;
  margin-bottom: 13px;
  border-bottom: 1px solid #b3b3b3;
}
.values .total {
  display: flex;
  flex-direction: column;
  gap: 5px;
  color: #000000;
  font-weight: 500;
}
.values .total .subtitle {
  font-size: 14px;
  line-height: 21px;
}
.values .total .title {
  font-size: 20px;
  line-height: 30px;
}
</style>
