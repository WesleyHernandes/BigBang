<template>
  <a
    :class="['navigate', { active }]"
    @click="$emit('setCurrent', option.id)"
    >{{ option.label }}</a
  >
</template>

<script lang="ts">
export default {
  name: "Item",
  props: {
    option: { type: Object, required: true },
    active: { type: Boolean, default: false },
  },
  emits: ["setCurrent"],
};
</script>

<style scoped>
.navigate {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 20px;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  transition: all ease-in-out 0.3s;
}
.navigate.active {
  background-color: #ff6969;
}
</style>
