<script setup lang="ts">
import { useMainStore, experienceLevels } from "@/stores/main";
import { storeToRefs } from "pinia";
import SortButton from "@/components/table/SortButton.vue";
import EditButton from "@/components/table/EditButton.vue";
import DeleteButton from "@/components/table/DeleteButton.vue";

const props = defineProps(["sectionIndex"]);
const store = useMainStore();
const { sections } = storeToRefs(store);
</script>
<template>
    <table class="w-full text-left mt-5 overflow-x-auto block">
        <thead>
            <tr>
                <th class="border p-3 text-center w-20">Sort</th>
                <th class="border p-3">Skill Name</th>
                <th class="border p-3 text-center">Proficiency</th>
                <th class="border p-3">Experience</th>
                <th class="border p-3">Summary</th>
                <th class="border p-3 text-center w-20">Edit</th>
                <th class="border p-3 text-center w-20">Delete</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(data, index) in sections[sectionIndex].data" :key="index">
                <SortButton class="border p-2 text-center w-20" :sectionIndex="sectionIndex" :index="index" />
                <td class="border p-3">{{ data.name }}</td>
                <td class="border text-center p-3">{{ data.skill + " / 10" }}</td>
                <td class="border p-3">{{ experienceLevels[data.experience] }}</td>
                <td class="border p-3">{{ data.summary }}</td>
                <EditButton class="border text-center w-20" :sectionIndex="sectionIndex" :index="index" />
                <DeleteButton class="border text-center w-20" :sectionIndex="sectionIndex" :index="index" />
            </tr>
        </tbody>
    </table>
</template>
