<template>
  <article class="resume">
    <header>
      <div class="title">
        <slot name="icon" />
        <h3>{{ title }}</h3>
        <p>últimos {{ days }} dias</p>
      </div>

      <button
        class="button-see-all"
        role="button"
        aria-label="Ver todas as transaçoes recentes"
      >
        Ver tudo
      </button>
    </header>

    <section class="content">
      <slot />
    </section>
  </article>
</template>

<script lang="ts">
export default {
  name: "Resume",
  props: {
    title: { type: String, required: true },
    days: { type: Number, required: true },
  },
};
</script>

<style scoped>
.resume {
  display: flex;
  flex-direction: column;
  width: 100%;
}
@media (min-width: 992px) {
  .resume {
    max-width: 480px;
  }
}
.resume header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 16px;
  padding-bottom: 27px;
}
@media (min-width: 576px) {
  .resume header {
    align-items: center;
  }
}
.resume header .title {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
@media (min-width: 576px) {
  .resume header .title {
    flex-direction: row;
    align-items: center;
    gap: 14px;
  }
}
.resume header .title h3 {
  color: #202027;
  font-size: 20px;
  line-height: 30px;
  font-weight: 500;
}
.resume header .title p {
  color: #a3a3a3;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
}
.resume header .button-see-all {
  display: flex;
  color: #7986fe;
  font-size: 14px;
  line-height: 21px;
  border: none;
  background-color: transparent;
  white-space: nowrap;
}
.resume .content {
  display: flex;
  flex-direction: column;
  width: 100%;
  border-top: 1px solid #b3b3b3;
}
</style>
