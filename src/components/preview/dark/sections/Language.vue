<script setup lang="ts">
import { experienceOptions } from "@/stores/main";
import Header from "@/components/preview/dark/general/Header.vue";

const props = defineProps(["sections", "sectionIndex"]);
</script>
<template>
    <div class="mt-2">
        <Header :header="sections[sectionIndex].header" />
        <div class="flex flex-row justify-between mt-3 w-full page-break-inside-avoid print:mt-2" v-for="(data, index) in sections[sectionIndex].data" :key="index">
            <div class="flex flex-col gap-1 w-80">
                <span class="font-semibold text-lg">
                    {{ data["name"] }}
                </span>
            </div>
            <div class="flex flex-col gap-1 w-full">
                <div class="flex flex-row gap-1">
                    <span v-for="index in 10" :key="index">
                        <font-awesome-icon :icon="index <= data['skill'] ? 'fa-solid fa-star' : 'fa-regular fa-star'" class="text-3xl print:text-2xl" />
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>
