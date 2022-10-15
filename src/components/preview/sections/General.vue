<script setup lang="ts">
import Contact from "@/components/preview/sections/Contact.vue";

const props = defineProps(["sections", "sectionIndex"]);
</script>
<template>
    <div>
        <div class="flex flex-row justify-between">
            <div class="flex flex-col gap-2 pr-5">
                <span class="text-5xl print:text-4xl font-bold">{{ sections[sectionIndex].data["firstName"] + " " + sections[sectionIndex].data["lastName"] }}</span>
                <span class="text-2xl text-gray-500">{{ sections[sectionIndex].data["title"] }}</span>
            </div>
            <div class="flex flex-col gap-1 pl-5 border-l justify-center">
                <div class="flex flex-row gap-2 items-center">
                    <span class="w-8"><font-awesome-icon icon="fa-solid fa-globe" /></span>
                    <a v-if="sections[sectionIndex].data['portfolio']" :href="sections[sectionIndex].data['portfolio']" target="_blank" class="text-blue-500">{{
                        sections[sectionIndex].data["portfolio"]
                    }}</a>
                </div>
                <Contact :sections="sections" />
            </div>
        </div>
        <p class="italic text-gray-800 mt-3">{{ sections[sectionIndex].data["summary"] }}</p>
    </div>
</template>
