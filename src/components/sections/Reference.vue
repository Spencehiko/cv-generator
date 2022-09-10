<script setup lang="ts">
import { useMainStore } from "@/stores/main";
import { storeToRefs } from "pinia";

const props = defineProps(["sectionIndex"]);
const store = useMainStore();
const { sections } = storeToRefs(store);
</script>
<template>
    <div>
        <div v-for="(reference, index) in sections[sectionIndex].data" :key="index" class="flex flex-col my-3">
            <div class="flex flex-row gap-5">
                <input v-model="reference['name']" class="border border-transparent pl-1 rounded outline-none font-bold hover:border-gray-400 focus:border-gray-800" />
                <span>-</span>
                <input v-model="reference['title']" class="border border-transparent pl-1 rounded outline-none hover:border-gray-400 focus:border-gray-800" />
            </div>
            <input v-model="reference['contact']" class="border border-transparent pl-1 rounded outline-none text-blue-600 hover:border-gray-400 focus:border-gray-800" />
        </div>
    </div>
</template>
