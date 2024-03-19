<template>
  <section class="form">
    <button
      class="button-send"
      role="button"
      aria-label="Botão com texto enviar dinheiro com um icone simbolizando um avião"
    >
      <IconPlane />
      <span>Enviar dinheiro</span>
    </button>

    <button
      class="button-plus"
      role="button"
      aria-label="Botão com icone de mais, indicando que pode-se adicionar dados"
    >
      <i class="fa-solid fa-plus"></i>
    </button>
  </section>
</template>

<script lang="ts">
import IconPlane from "./IconPlane.vue";

export default {
  name: "Form",
  components: { IconPlane },
};
</script>

<style scoped>
.form {
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  width: 100%;
  max-width: 320px;
  gap: 10px;
}

.form .button-send,
.form .button-plus {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: #7986fe;
  transition: all 0.3s ease-in-out;
}
.form .button-send:hover,
.form .button-plus:hover {
  background-color: #897aff;
}
.form .button-send {
  width: 100%;
  max-width: calc(100% - 66px);
  padding: 8px 16px;
  color: #ffffff;
}
.form .button-send i {
  font-size: 22px;
}
.form .button-send span {
  display: block;
  flex-grow: 1;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  text-align: center;
}
.form .button-plus {
  width: 56px;
  height: 37px;
  color: #ffffff;
  font-size: 15px;
}
</style>
