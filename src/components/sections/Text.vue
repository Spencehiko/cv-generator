<script setup lang="ts">
import { useMainStore } from "@/stores/main";
import { storeToRefs } from "pinia";

const props = defineProps(["sectionData", "sectionIndex"]);
const store = useMainStore();
// const { sections } = storeToRefs(store);
</script>
<template>
    <div>
        {{ sectionData }}
        {{ sectionIndex }}
    </div>
</template>
