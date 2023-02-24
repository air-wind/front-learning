<template>
  <div class="link" @click="changeName('hello')">{{ name }}</div>
</template>

<script setup lang="ts">
interface propsType {
  name: string;
}

const props = withDefaults(defineProps<propsType>(), {
  name: "Hello World",
});

const changeName = () => {
  // @ts-ignore
  console.log(name);
};
</script>

<style lang="scss">
.link {
  cursor: pointer;
  width: 20px;
  background-color: aquamarine;
}
</style>
