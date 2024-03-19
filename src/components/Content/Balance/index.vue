<template>
  <section class="balance">
    <Informations :total="total" />
    <Form />
  </section>
</template>

<script lang="ts">
import type { PropType } from "vue";
import Icon from "./Icon.vue";
import Informations from "./Informations.vue";
import Form from "./Form.vue";
import type { ITotal } from "../../../interfaces/IBalance";

export default {
  name: "Balance",
  components: { Icon, Informations, Form },
  props: {
    total: {
      type: Object as PropType<ITotal>,
    },
  },
};
</script>

<style scoped>
.balance {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;
  margin-bottom: 41px;
}
@media (min-width: 992px) {
  .balance {
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
  }
}
</style>
