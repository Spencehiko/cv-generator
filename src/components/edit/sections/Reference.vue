<script setup lang="ts">
import { useMainStore } from "@/stores/main";
import { storeToRefs } from "pinia";
import SortButton from "@/components/edit/table/SortButton.vue";
import EditButton from "@/components/edit/table/EditButton.vue";
import DeleteButton from "@/components/edit/table/DeleteButton.vue";

const props = defineProps(["sectionIndex"]);
const store = useMainStore();
const { sections } = storeToRefs(store);
</script>
<template>
    <table class="w-full text-left mt-5 overflow-x-auto block">
        <thead>
            <tr>
                <th class="border p-3 text-center w-20">Sort</th>
                <th class="border p-3">Reference Name</th>
                <th class="border p-3">Company</th>
                <th class="border p-3">Title</th>
                <th class="border p-3">E-Mail</th>
                <th class="border p-3 w-min">Phone</th>
                <th class="border p-3 text-center w-20">Edit</th>
                <th class="border p-3 text-center w-20">Delete</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(data, index) in sections[sectionIndex].data" :key="index">
                <SortButton class="border p-2 text-center w-20" :sectionIndex="sectionIndex" :index="index" />
                <td class="border p-3">{{ data.name }}</td>
                <td class="border p-3">{{ data.companyName }}</td>
                <td class="border p-3">{{ data.title }}</td>
                <td class="border p-3 text-blue-400">
                    <a target="_blank" :href="'mailto:' + data.email"> {{ data.email }}</a>
                </td>
                <td class="border p-3 whitespace-nowrap">{{ data.phone }}</td>
                <EditButton class="border text-center w-20" :sectionIndex="sectionIndex" :index="index" />
                <DeleteButton class="border text-center w-20" :sectionIndex="sectionIndex" :index="index" />
            </tr>
        </tbody>
    </table>
</template>
