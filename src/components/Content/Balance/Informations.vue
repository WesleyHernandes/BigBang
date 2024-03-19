<template>
  <div class="informations">
    <div class="total">
      <p>Saldo total</p>
      <h2>{{ valueFormated }}</h2>
    </div>

    <p class="performance">
      <Icon />
      <span>rendendo {{ total?.income }}%</span>
    </p>
  </div>
</template>

<script lang="ts">
import type { PropType } from "vue";
import { convertToBrl } from "../../../utils/helper";
import Icon from "./Icon.vue";
import type { ITotal } from "../../../interfaces/IBalance";

export default {
  name: "Informations",
  components: { Icon },
  props: {
    total: {
      type: Object as PropType<ITotal>,
    },
  },
  computed: {
    valueFormated() {
      return convertToBrl(this.total?.value || 0);
    },
  },
};
</script>

<style scoped>
.informations {
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 16px;
}
.informations .total {
  display: flex;
  flex-direction: column;
}
.informations .total p {
  color: #ffffff;
  font-size: 20px;
  line-height: 45px;
  font-weight: 500;
}
.informations .total h2 {
  color: #ffffff;
  font-size: 26px;
  line-height: 26px;
  font-weight: 500;
}
@media (min-width: 576px) {
  .informations .total h2 {
    font-size: 36px;
    line-height: 36px;
  }
}
.informations .performance {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  margin-bottom: 3px;
}
.informations .performance span {
  color: #ffffff;
  font-size: 14px;
  list-style: 21px;
}
</style>
