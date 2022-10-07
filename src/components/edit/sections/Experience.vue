<script setup lang="ts">
import { useMainStore, workStyleOptions } from "../../../stores/main";
import { storeToRefs } from "pinia";
import EditButton from "../../edit/table/EditButton.vue";
import DeleteButton from "../../edit/table/DeleteButton.vue";

const props = defineProps(["sectionIndex"]);
const store = useMainStore();
const { sections } = storeToRefs(store);
</script>
<template>
    <table class="w-full">
        <tr v-for="(data, index) in sections[sectionIndex].data" :key="index">
            <td class="w-2/5 inline-flex flex-col text-right">
                <span>{{ data.title }}</span>
                <span>{{
                    (data.startDate.month + 1 < 10 ? "0" + (data.startDate.month + 1) : data.startDate.month + 1) +
                    "/" +
                    data.startDate.year +
                    " - " +
                    (data.endDate ? (data.endDate.month + 1 < 10 ? "0" + (data.endDate.month + 1) : data.endDate.month + 1) + "/" + data.endDate.year : "Now")
                }}</span>
            </td>
            <td
                class="w-1/2 border-l-4 inline-flex flex-col relative ml-4 pl-4 py-8 before:w-3 before:h-3 before:absolute before:rounded-full before:-left-2 before:top-1/2 before:-translate-y-1/2"
                :class="[data.isStillWorkingHere ? ' before:bg-green-400' : ' before:bg-green-800']"
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
