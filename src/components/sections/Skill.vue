<script setup lang="ts">
import { useMainStore, experienceLevels } from "@/stores/main";
import { storeToRefs } from "pinia";

const props = defineProps(["sectionIndex"]);
const store = useMainStore();
const { sections } = storeToRefs(store);
const { editData, moveUpData, moveDownData } = store;
</script>
<template>
    <table class="border border-slate-300 w-full text-left mt-5">
        <thead>
            <tr>
                <th class="border p-3">Skill Name</th>
                <th class="border text-center p-3">Proficiency (Out of 10)</th>
                <th class="border p-3">Experience</th>
                <th class="border p-3">Summary</th>
                <th class="border p-3 text-center">Edit</th>
                <th class="border p-3 text-center">Sort</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(data, index) in sections[sectionIndex].data" :key="index">
                <td class="border p-3">{{ data.name }}</td>
                <td class="border text-center p-3">{{ data.skill }}</td>
                <td class="border p-3">{{ experienceLevels[data.experience] }}</td>
                <td class="border p-3">{{ data.summary }}</td>
                <td class="border text-center">
                    <button @click="editData(sectionIndex, index)" class="text-center w-10 h-10 text-yellow-400 border-2 rounded-full"><font-awesome-icon icon="fa-solid fa-pen" /></button>
                </td>
                <td class="border text-center flex flex-col items-center gap-1 py-1">
                    <button v-if="index !== 0" @click="moveUpData(sectionIndex, index)" class="text-center w-10 h-10 text-green-400 border-2 rounded-full">
                        <font-awesome-icon icon="fa-solid fa-caret-up" />
                    </button>
                    <button v-if="index !== sections[sectionIndex].data.length - 1" @click="moveDownData(sectionIndex, index)" class="text-center w-10 h-10 text-red-400 border-2 rounded-full">
                        <font-awesome-icon icon="fa-solid fa-caret-down" />
                    </button>
                </td>
            </tr>
        </tbody>
    </table>
</template>
