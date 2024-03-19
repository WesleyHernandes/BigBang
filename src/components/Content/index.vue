<template>
  <main class="content-container">
    <div class="content">
      <Balance :total="balance.total" />
      <Statistics :cards="balance.cards" />

      <div class="resume-container">
        <Resume title="Transações recentes" :days="7">
          <template v-slot:icon>
            <Transaction />
          </template>

          <CardValue
            v-for="transaction in recentTransactions"
            :key="transaction.id"
            :transaction="transaction"
          />
        </Resume>

        <Resume title="Análise geral" :days="7">
          <template v-slot:icon>
            <Analyses />
          </template>

          <Values />

          <div class="itens">
            <CardPercentage
              v-for="analysis in generalAnalysis"
              :key="analysis.id"
              :analysis="analysis"
            />
          </div>
        </Resume>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import Balance from "./Balance/index.vue";
import Statistics from "./Statistics/index.vue";
import Resume from "./Resume/index.vue";
import Transaction from "./Resume/icons/Transaction.vue";
import Analyses from "./Resume/icons/Analyses.vue";
import Values from "./Resume/Values.vue";
import CardValue from "./Resume/CardValue.vue";
import CardPercentage from "./Resume/CardPercentage.vue";
import type IRecentTransactions from "../../interfaces/IRecentTransaction";
import {
  fetchBalance,
  fetchGeneralAnalysis,
  fetchRecentTransactions,
} from "../../services/api";
import type IGeneralAnalysis from "../../interfaces/IGeneralAnalysis";
import type IBalance from "../../interfaces/IBalance";

export default {
  name: "Content",
  components: {
    Balance,
    Statistics,
    Resume,
    Transaction,
    Analyses,
    Values,
    CardValue,
    CardPercentage,
  },
  data() {
    return {
      balance: {} as IBalance,
      recentTransactions: [] as IRecentTransactions[],
      generalAnalysis: [] as IGeneralAnalysis[],
    };
  },
  async created() {
    this.balance = await fetchBalance();
    this.recentTransactions = await fetchRecentTransactions();
    this.generalAnalysis = await fetchGeneralAnalysis();
  },
};
</script>

<style scoped>
.content-container {
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  padding-top: 60px;
  padding-bottom: 60px;
}
@media (min-width: 992px) {
  .content-container {
    padding-top: 160px;
  }
}
.content-container:before {
  position: absolute;
  z-index: -1;
  display: flex;
  content: "";
  width: 100%;
  height: 100%;
  left: 0;
  top: 400px;
  background-color: #ffffff;
}
@media (min-width: 992px) {
  .content-container:before {
    top: 445px;
  }
}
.content-container .content {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1165px;
  padding: 0px 16px;
  margin: 0 auto;
}
.content-container .content .resume-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 60px;
}
@media (min-width: 992px) {
  .content-container .content .resume-container {
    flex-direction: row;
    align-items: stretch;
    justify-content: space-between;
    gap: 30px;
  }
}
</style>
