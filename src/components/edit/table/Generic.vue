<script setup lang="ts">
import { useMainStore } from "@/stores/main";
import { storeToRefs } from "pinia";

const props = defineProps(["sectionIndex"]);
const store = useMainStore();
const { sections } = storeToRefs(store);
</script>
<template>
    <table class="w-full text-left mt-5">
        <tbody>
            <tr v-for="(value, key) in sections[sectionIndex].data" :key="key">
                <td class="w-1/3 p-3 font-bold">{{ sections[sectionIndex].inputs[key].inputLabel }}</td>
                <td class="p-3">
                    {{
                        sections[sectionIndex].inputs[key].inputType === "checkbox"
                            ? value
                                ? "Yes"
                                : "No"
                            : value === "" || value === null
                            ? "-"
                            : sections[sectionIndex].inputs[key].type === "date"
                            ? (value.month + 1 < 10 ? "0" + (value.month + 1) : value.month + 1) + "/" + value.year
                            : value
                    }}
                </td>
            </tr>
        </tbody>
    </table>
</template>
