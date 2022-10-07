<script setup lang="ts">
import { useMainStore } from "@/stores/main";
import { storeToRefs } from "pinia";

const props = defineProps(["sectionIndex"]);
const store = useMainStore();
const { sections } = storeToRefs(store);
</script>
<template>
    <div>
        <div class="flex flex-row items-center gap-1">
            <span class="whitespace-nowrap font-bold text-xl">{{ sections[sectionIndex].header }}</span>
            <hr class="w-full border rounded-lg" />
        </div>
    </div>
</template>
