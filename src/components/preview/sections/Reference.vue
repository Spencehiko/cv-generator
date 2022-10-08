<script setup lang="ts">
import { useMainStore } from "@/stores/main";
import Header from "@/components/preview/general/Header.vue";

const props = defineProps(["sectionIndex"]);
const store = useMainStore();
const { sections } = store as any;
</script>
<template>
    <div class="mt-2">
        <Header :header="sections[sectionIndex].header" />
        <div class="flex flex-row justify-between mt-3 w-full print:mt-1.5 page-break-inside-avoid" v-for="(data, index) in sections[sectionIndex].data" :key="index">
            <div class="flex flex-col gap-1 w-full">
                <span class="font-semibold text-lg">
                    {{ data["name"] + " - " + [data["title"]] + " at " + [data["companyName"]] }}
                </span>
                <div class="flex flex-row">
                    <span v-if="data['email']" class="text-blue-500">{{ data["email"] }}</span>
                    <span v-if="data['email'] && data['phone']">-</span>
                    <span v-if="data['phone']">{{ data["phone"] }}</span>
                </div>
            </div>
        </div>
    </div>
</template>
