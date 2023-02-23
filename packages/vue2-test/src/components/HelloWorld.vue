<template>
  <div>{{ name }}</div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  props: {
    name: String,
    default: "",
  },
  setup() {
    console.log();
  },
});
</script>
