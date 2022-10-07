<script setup lang="ts">
import { useMainStore } from "@/stores/main";

import Contact from "@/components/styling/sections/Contact.vue";
import Education from "@/components/styling/sections/Education.vue";

const props = defineProps(["sectionIndex"]);
const store = useMainStore();
const { sections } = store as any;
</script>
<template>
    <div class="flex flex-row justify-between pb-5">
        <div class="flex flex-col gap-2 pr-5">
            <span class="text-5xl font-bold">{{ sections[sectionIndex].data["firstName"] + " " + sections[sectionIndex].data["lastName"] }}</span>
            <span class="text-xl">{{ sections[sectionIndex].data["title"] }}</span>
            <p class="italic text-gray-800">{{ sections[sectionIndex].data["summary"] }}</p>
        </div>
        <div class="flex flex-col gap-1 pl-5 border-l justify-center">
            <div class="flex flex-row gap-2 items-center">
                <span class="w-8"><font-awesome-icon icon="fa-solid fa-globe" /></span>
                <a v-if="sections[sectionIndex].data['portfolio']" :href="sections[sectionIndex].data['portfolio']" target="_blank" class="text-blue-500">{{
                    sections[sectionIndex].data["portfolio"]
                }}</a>
            </div>
            <Contact />
        </div>
    </div>
    <Education />
</template>
