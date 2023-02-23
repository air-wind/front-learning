<script lang="ts" setup>
import type { PropType } from "vue";

const adapter = function <T>(args1: T): T {
  return "Hello" as T;
};

const props = defineProps({
  name: {
    type: String as PropType<string>,
    default: "HelloWorld",
  },
  updateName:{
    type: Function
  }
})
</script>

<template>
  <div class="h-10px">{{ name }}</div>
</template>
