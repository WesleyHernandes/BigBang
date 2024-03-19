<template>
  <nav :class="['root', { active }]">
    <div class="overlay" @click="$emit('closeMenu')" />
    <div class="itens">
      <div class="menu-header">
        <h3 class="title">Menu</h3>

        <button
          type="button"
          class="btn-close"
          role="button"
          aria-label="Botão com icone de X responsável por fechar o menu"
          @click="$emit('closeMenu')"
        >
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
      <Item
        v-for="option in options"
        :key="option.id"
        :option="option"
        :active="current === option.id"
        @setCurrent="current = $event"
      />
    </div>
  </nav>
</template>

<script lang="ts">
import { fetchNavigation } from "../../../services/api";
import type INavigate from "../../../interfaces/INavigate";
import Item from "./Item.vue";

export default {
  name: "Navigation",
  components: { Item },
  data() {
    return {
      current: 1,
      options: [] as INavigate[],
    };
  },
  props: {
    active: {
      type: Boolean,
      default: false,
    },
  },
  async created() {
    await fetchNavigation().then((data: INavigate[]) => {
      this.options = data;
    });
  },
  emits: ["closeMenu"],
};
</script>

<style scoped>
.root {
  position: fixed;
  z-index: 20;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  pointer-events: none;
  opacity: 0;
  transition: all 0.3s ease-in-out;
}
.root.active {
  pointer-events: all;
  opacity: 1;
}
@media (min-width: 992px) {
  .root {
    position: relative;
    align-items: stretch;
    justify-content: center;
    width: auto;
    height: auto;
    pointer-events: all;
    opacity: 1;
  }
}
.root .overlay {
  position: absolute;
  z-index: 1;
  display: flex;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  background-color: #000000;
  opacity: 0.5;
}
@media (min-width: 992px) {
  .root .overlay {
    display: none;
  }
}
.root .itens {
  overflow-y: auto;
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 100%;
  max-width: 350px;
  padding: 20px;
  gap: 10px;
  background-color: var(--body-color);
}
@media (min-width: 992px) {
  .root .itens {
    flex-direction: row;
    align-items: stretch;
    justify-content: center;
    max-width: 100%;
    padding: 0px;
    gap: 0px;
  }
}
.root .itens .menu-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0px;
}
@media (min-width: 992px) {
  .root .itens .menu-header {
    display: none;
  }
}
.root .itens .menu-header .title {
  color: #ffffff;
  font-size: 22px;
  font-weight: 500;
}
.root .itens .menu-header .btn-close {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  background-color: #ffffff;
  border: none;
  color: var(--body-color);
  font-size: 20px;
}
</style>
