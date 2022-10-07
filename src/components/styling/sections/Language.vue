<script setup lang="ts">
import { useMainStore } from "@/stores/main";
import { storeToRefs } from "pinia";

const props = defineProps(["sectionIndex"]);
const store = useMainStore();
const { sections } = storeToRefs(store);
</script>
<template>DD</template>
