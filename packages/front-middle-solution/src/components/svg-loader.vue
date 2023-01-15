<template>
  <img :src="avatarBase64" />

</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useSvgAvatar } from "../composables";

const sign = ref("YY");
const avatarBase64 = useSvgAvatar(sign)
</script>
