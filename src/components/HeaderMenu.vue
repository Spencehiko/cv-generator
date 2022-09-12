<script setup lang="ts">
import { useMainStore } from "@/stores/main";
import { storeToRefs } from "pinia";
import { pages } from "@/constants";

const store = useMainStore();
const { activeHeader } = storeToRefs(store);
const { showResetDialog, exportCV } = store;
</script>

<template>
    <div class="h-20 bg-slate-900 text-white flex flex-row justify-between items-center">
        <span class="ml-5">CV Generator</span>
        <div class="flex flex-row justify-center gap-5 ml-auto">
            <button
                v-for="page in pages"
                :key="page.name"
                class="border-b-2 h-fit my-auto p-2 transition-all duration-500 ml-5"
                :class="{ 'border-white': activeHeader === page.class, 'border-transparent': activeHeader !== page.class }"
                @click="activeHeader = page.class"
            >
                {{ page.name }}
            </button>
        </div>
        <div class="ml-auto flex flex-row gap-5 mr-5">
            <button class="group border rounded border-white text-white h-fit my-auto p-2 transition-all duration-500 hover:text-slate-900 hover:bg-white" @click="showResetDialog()">
                <font-awesome-icon icon="fa-solid fa-rotate-left" class="w-12 h-4 py-1 hidden group-hover:block" />
                <span class="w-12 block group-hover:hidden">Reset</span>
            </button>
            <button class="group border rounded border-yellow-300 text-yellow-300 h-fit my-auto p-2 transition-all duration-500 hover:text-slate-900 hover:bg-yellow-300" @click="exportCV()">
                <font-awesome-icon icon="fa-solid fa-file-export" class="w-12 h-4 py-1 hidden group-hover:block" />
                <span class="w-12 block group-hover:hidden">Export</span>
            </button>
        </div>
    </div>
</template>
