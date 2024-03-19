<template>
  <section class="statistics">
    <div class="title">
      <Icon />
      <h2>Painel de estatísticas</h2>
      <p>últimos 7 dias</p>
    </div>
    <div class="cards">
      <Card v-for="card in cards" :key="card.id" :data="card" />
    </div>
  </section>
</template>

<script lang="ts">
import type { PropType } from "vue";
import type ICardBalance from "../../../interfaces/ICardBalance";
import Card from "./Card.vue";
import Icon from "./Icon.vue";

export default {
  name: "Statistics",
  components: { Icon, Card },
  props: {
    cards: {
      type: Object as PropType<ICardBalance[]>,
    },
  },
};
</script>

<style scoped>
.statistics {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 27px;
  margin-bottom: 47px;
}
.title {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 5px;
}
@media (min-width: 576px) {
  .title {
    flex-direction: row;
    align-items: center;
    gap: 16px;
  }
}
.title h2 {
  color: #ffffff;
  font-size: 20px;
  line-height: 30px;
  font-weight: 500;
}
.title p {
  color: #a3a3a3;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
}
.cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  gap: 16px;
}
.cards .card:last-of-type {
  grid-column: span 2;
}
@media (max-width: 768px) {
  .cards {
    grid-template-columns: repeat(1, 1fr);
  }
  .cards .card:last-of-type {
    grid-column: initial;
  }
}
@media (min-width: 992px) {
  .cards {
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
  .cards .card:last-of-type {
    grid-column: span 1;
  }
}
@media (min-width: 1200px) {
  .cards {
    gap: 40px;
  }
}
</style>
