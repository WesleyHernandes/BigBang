<template>
  <article class="card">
    <p class="label">{{ data.label }}</p>
    <p class="value">{{ valueFormatBR }}</p>
    <div class="button-container">
      <button class="more-label" role="button" aria-label="Ver mais detalhes">
        Ver mais detalhes
      </button>

      <button
        class="more-icon"
        role="button"
        aria-label="Mais opções de detalhes"
      >
        <i class="fa-solid fa-bars"></i>
      </button>
    </div>
  </article>
</template>

<script lang="ts">
import { convertToBrl } from "../../../utils/helper";

export default {
  name: "Card",
  props: {
    data: { type: Object, required: true },
  },
  computed: {
    valueFormatBR() {
      return convertToBrl(this.data.value);
    },
  },
};
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #ffffff;
  padding: 20px;
  box-shadow: 0px 7px 30px 0px #00000012;
}
.card .label {
  margin-bottom: 24px;
  color: #000000;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
}
.card .value {
  margin-bottom: 47px;
  color: #000000;
  font-size: 24px;
  line-height: 36px;
  font-weight: 500;
}
.card .button-container {
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  width: 100%;
  gap: 10px;
}

.card .button-container .more-label,
.card .button-container .more-icon {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #747474;
  background-color: transparent;
  transition: all ease-in-out 0.3s;
}

.card .button-container .more-label {
  flex-grow: 1;
  max-width: calc(100% - 56px);
  padding: 8px;
  color: #686868;
  font-size: 14px;
  line-height: 21px;
}
.card .button-container .more-icon {
  width: 46px;
  height: 37px;
  border: 1px solid #747474;
  color: #747474;
  font-size: 15px;
}
.card .button-container .more-label:hover,
.card .button-container .more-icon:hover {
  background-color: #eeeeee;
}
</style>
