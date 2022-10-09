<script setup lang="ts">
import { useMainStore, workStyleOptions } from "@/stores/main";
import { storeToRefs } from "pinia";
import EditButton from "@/components/edit/table/EditButton.vue";
import DeleteButton from "@/components/edit/table/DeleteButton.vue";
import SortButton from "@/components/edit/table/SortButton.vue";

const props = defineProps(["sectionIndex"]);
const store = useMainStore();
const { sections } = storeToRefs(store);
</script>
<template>
    <table class="w-full overflow-x-auto block">
        <tr v-for="(data, index) in sections[sectionIndex].data" :key="index">
            <SortButton class="border p-2 text-center w-20" :sectionIndex="sectionIndex" :index="index" />
            <td class="sm:w-1/4 inline-flex sm:flex-col text-right px-2">
                <span class="font-semibold">{{ data.title }}</span>
                <span>{{
                    (data.startDate.month + 1 < 10 ? "0" + (data.startDate.month + 1) : data.startDate.month + 1) +
                    "/" +
                    data.startDate.year +
                    " - " +
                    (data.endDate ? (data.endDate.month + 1 < 10 ? "0" + (data.endDate.month + 1) : data.endDate.month + 1) + "/" + data.endDate.year : "Now")
                }}</span>
            </td>
            <td
                class="sm:w-2/3 sm:border-l-4 inline-flex flex-col relative ml-4 pl-4 py-8 sm:before:w-3 sm:before:h-3 sm:before:absolute sm:before:rounded-full sm:before:-left-2 sm:before:top-1/2 sm:before:-translate-y-1/2"
                :class="[data.isStillWorkingHere ? ' sm:before:bg-green-400' : ' sm:before:bg-green-800']"
            >
                <div class="my-1">
                    <span class="font-bold">{{ sections[sectionIndex].inputs.companyName.inputLabel + ":" }}</span> <span>{{ data.companyName }}</span>
                </div>
                <div v-if="data.companyLocation" class="my-1">
                    <span class="font-bold">{{ sections[sectionIndex].inputs.companyLocation.inputLabel + ":" }}</span> <span>{{ data.companyLocation }}</span>
                </div>
                <div class="my-1">
                    <span class="font-bold">{{ sections[sectionIndex].inputs.companyWebsite.inputLabel + ":" }}</span> <span>{{ data.companyWebsite }}</span>
                </div>
                <div class="my-1">
                    <span class="font-bold">{{ sections[sectionIndex].inputs.workStyle.inputLabel + ":" }}</span> <span>{{ (workStyleOptions as any)[data.workStyle] }}</span>
                </div>
                <div class="my-1">
                    <span class="font-bold">{{ sections[sectionIndex].inputs.summary.inputLabel + ":" }}</span> <span>{{ data.summary }}</span>
                </div>
            </td>
            <EditButton class="text-center w-20" :sectionIndex="sectionIndex" :index="index" />
            <DeleteButton class="text-center w-20" :sectionIndex="sectionIndex" :index="index" />
        </tr>
    </table>
</template>
