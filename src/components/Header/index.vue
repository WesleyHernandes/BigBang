<template>
  <header class="container">
    <div class="logo-container">
      <button
        type="button"
        class="btn-menu"
        role="button"
        aria-label="Botão para abrir a navegação no menu mobile"
        @click="menuVisible = true"
      >
        <i class="fa-solid fa-bars"></i>
      </button>

      <Logo />
    </div>

    <Navigation :active="menuVisible" @closeMenu="menuVisible = false" />
    <ButtonBell />
  </header>
</template>

<script lang="ts">
import ButtonBell from "./ButtonBell.vue";
import Logo from "./Logo.vue";
import Navigation from "./Navigation/index.vue";

export default {
  name: "Header",
  components: { Logo, ButtonBell, Navigation },
  data() {
    return {
      menuVisible: false,
    };
  },
};
</script>

<style scope>
.container {
  position: sticky;
  z-index: 10;
  top: 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.25rem;
  background-color: var(--body-color);
}
.container .logo-container {
  display: flex;
  align-items: center;
  gap: 16px;
}
.container .logo-container .btn-menu {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  color: #ffffff;
  font-size: 20px;
  border: none;
  background-color: transparent;
}
@media (min-width: 992px) {
  .container .logo-container .btn-menu {
    display: none;
  }
}
</style>
