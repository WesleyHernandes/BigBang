<template>
  <article class="card-value">
    <div class="title">
      <div class="icon" :style="{ backgroundColor: transaction?.color }">
        <Shop />
      </div>
      <p>{{ transaction?.label }}</p>
    </div>
    <p class="value">{{ valueFormated }}</p>
  </article>
</template>

<script lang="ts">
import type { PropType } from "vue";
import type IRecentTransaction from "../../../interfaces/IRecentTransaction";
import { convertToBrl } from "../../../utils/helper";
import Shop from "./icons/Shop.vue";

export default {
  name: "CardValue",
  components: { Shop },
  props: {
    transaction: {
      type: Object as PropType<IRecentTransaction>,
    },
  },
  computed: {
    valueFormated() {
      return convertToBrl(this.transaction?.value || 0);
    },
  },
};
</script>

<style scoped>
.card-value {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 9px 7px;
  gap: 10px;
  border-bottom: 1px solid #b3b3b3;
  color: #000000;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
}
.card-value .title {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 13px;
}
.card-value .title .icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 31px;
  height: 31px;
  background-color: #eee;
  color: #000000;
  font-size: 13px;
}
</style>
