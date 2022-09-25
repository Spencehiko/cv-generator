<script setup lang="ts">
import { useMainStore } from "@/stores/main";
import { storeToRefs } from "pinia";

const props = defineProps(["sectionIndex"]);
const store = useMainStore();
const { sections } = storeToRefs(store);
</script>
<template>
    <table class="border border-slate-300 w-1/2 text-left mt-5">
        <thead>
            <tr>
                <th class="border p-3">Language Name</th>
                <th class="border text-center p-3">Proficiency (Out of 10)</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(data, index) in sections[sectionIndex].data" :key="index">
                <td class="border p-3">{{ data.name }}</td>
                <td class="border text-center p-3">{{ data.value }}</td>
            </tr>
        </tbody>
    </table>
</template>
