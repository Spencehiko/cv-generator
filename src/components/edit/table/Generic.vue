<script setup lang="ts">
import { useMainStore } from "@/stores/main";
import { storeToRefs } from "pinia";

const props = defineProps(["sectionIndex"]);
const store = useMainStore();
const { sections } = storeToRefs(store);

const dataToShow = sections.value[props.sectionIndex].data;
Object.keys(dataToShow).filter((k: any) => (dataToShow[k] === null || dataToShow[k] === undefined || dataToShow[k] === "") && delete dataToShow[k]);
</script>
<template>
    <div class="w-full text-left mt-5 break-words">
        <div>
            <div v-for="(value, key) in dataToShow" :key="key" class="flex flex-col mt-3 sm:flex-row sm:justify-between sm:mr-auto">
                <div class="sm:w-1/3 font-bold">{{ sections[sectionIndex].inputs[key].inputLabel }}</div>
                <div class="sm:w-2/3">
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
                </div>
            </div>
        </div>
    </div>
</template>
