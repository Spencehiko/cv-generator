<script setup lang="ts">
import { useMainStore } from "@/stores/main";
import { storeToRefs } from "pinia";
import InfoSection from "@/components/sections/Info.vue";
import DateSection from "@/components/sections/Date.vue";
import ListSection from "@/components/sections/List.vue";
import RankSection from "@/components/sections/Rank.vue";
import TextSection from "@/components/sections/Text.vue";
import ReferenceSection from "@/components/sections/Reference.vue";

const store = useMainStore();
const { sections } = storeToRefs(store);
const { deleteItem } = store;
</script>

<template>
    <div v-for="(section, index) in sections" :key="index" class="px-10 py-4">
        <div class="flex flex-row border-b-2 pb-1">
            <h4 class="font-bold">{{ section.header }}</h4>
            <div class="ml-auto flex flex-row gap-3">
                <button v-if="section.type !== 'text' && section.type !== 'info'" class="rounded border border-green-500 p-1 hover:bg-green-500 hover:text-white transition duration-500">
                    Add {{ section.name }}
                </button>
                <button class="rounded border border-red-500 p-1 hover:bg-red-500 hover:text-white transition duration-500">Delete Section</button>
            </div>
        </div>
        <InfoSection v-if="section.type === 'info'" class="my-2" :sectionIndex="index" @deleteItem="deleteItem" />
        <DateSection v-if="section.type === 'date'" class="my-2" :sectionIndex="index" @deleteItem="deleteItem" />
        <ListSection v-if="section.type === 'list'" class="my-2" :sectionIndex="index" @deleteItem="deleteItem" />
        <RankSection v-if="section.type === 'rank'" class="my-2" :sectionIndex="index" @deleteItem="deleteItem" />
        <TextSection v-if="section.type === 'text'" class="my-2" :sectionIndex="index" @deleteItem="deleteItem" />
        <ReferenceSection v-if="section.type === 'reference'" class="my-2" :sectionIndex="index" @deleteItem="deleteItem" />
    </div>
</template>
