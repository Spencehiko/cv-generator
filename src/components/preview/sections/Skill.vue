<script setup lang="ts">
import { useMainStore, experienceOptions } from "@/stores/main";
import Header from "@/components/preview/general/Header.vue";

const props = defineProps(["sectionIndex"]);
const store = useMainStore();
const { sections } = store as any;
</script>
<template>
    <div class="mt-2">
        <Header :header="sections[sectionIndex].header" />
        <div class="flex flex-row justify-between mt-3 w-full print:mt-1.5 page-break-inside-avoid" v-for="(data, index) in sections[sectionIndex].data" :key="index">
            <div class="flex flex-col gap-1 w-80">
                <span class="font-semibold text-lg">
                    {{ data["name"] }}
                </span>
                <span class="text-lg text-gray-500">Experience: {{ experienceOptions[data["experience"]] }} </span>
            </div>
            <div class="flex flex-col gap-1 w-full">
                <div class="flex flex-row gap-1">
                    <span v-for="index in 10" :key="index">
                        <font-awesome-icon :icon="index <= data['skill'] ? 'fa-solid fa-star' : 'fa-regular fa-star'" class="text-3xl print:text-2xl" />
                    </span>
                </div>
                <p class="text-gray-500">{{ data["summary"] }}</p>
            </div>
        </div>
    </div>
</template>
