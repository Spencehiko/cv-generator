<script setup lang="ts">
import { useMainStore } from "@/stores/main";
import { storeToRefs } from "pinia";

import Contact from "@/components/styling/sections/Contact.vue";

const props = defineProps(["sectionIndex"]);
const store = useMainStore();
const { sections } = storeToRefs(store) as any;
</script>
<template>
    <div class="flex flex-row justify-between border-b pb-5">
        <div class="flex flex-col gap-2">
            <span class="text-5xl font-bold">{{ sections[sectionIndex].data["firstName"] + " " + sections[sectionIndex].data["lastName"] }}</span>
            <span class="text-xl">{{ sections[sectionIndex].data["title"] }}</span>
        </div>
        <div class="flex flex-col gap-1 pl-5 border-l">
            <a v-if="sections[sectionIndex].data['portfolio']" :href="sections[sectionIndex].data['portfolio']" target="_blank" class="text-blue-500">{{ sections[sectionIndex].data["portfolio"] }}</a>
            <Contact />
        </div>
    </div>
</template>
