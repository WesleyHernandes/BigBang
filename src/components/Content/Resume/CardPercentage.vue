<template>
  <article class="card-percentage">
    <div class="informations">
      <div class="title">
        <div class="icon">
          <component :is="getIcon()" />
        </div>
        <p>{{ analysis?.label }}</p>
      </div>
      <p class="value">{{ `${analysis?.value || 0}%` }}</p>
    </div>

    <div class="bars">
      <div
        class="bar"
        :style="{
          width: `${analysis?.value || 0}%`,
          backgroundColor: analysis?.color,
        }"
      />
    </div>
  </article>
</template>

<script lang="ts">
import type { PropType } from "vue";
import type IGeneralAnalysis from "../../../interfaces/IGeneralAnalysis";
import Bag from "./icons/Bag.vue";
import Barcode from "./icons/Barcode.vue";
import TrendUp from "./icons/TrendUp.vue";

export default {
  name: "CardPercentage",
  components: { Bag, Barcode, TrendUp },
  props: {
    analysis: {
      type: Object as PropType<IGeneralAnalysis>,
    },
  },
  methods: {
    getIcon() {
      switch (this.analysis?.icon) {
        case "bag":
          return Bag;
        case "barcode":
          return Barcode;
        case "trendup":
          return TrendUp;
      }
    },
  },
};
</script>

<style scoped>
.card-percentage {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;
  padding: 7px 0px;
}
.card-percentage .informations {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 10px;
  color: #000000;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
}
.card-percentage .informations .title {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 11px;
}
.card-percentage .informations .title .icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
}
.card-percentage .bars {
  display: flex;
  align-items: stretch;
  justify-content: flex-start;
  width: 100%;
  height: 7px;
  border-radius: 2px;
  background-color: #d9d9d9;
}
.card-percentage .bars .bar {
  display: flex;
  height: 100%;
  background-color: #eeeeee;
}
</style>
