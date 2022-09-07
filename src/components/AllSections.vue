<script setup lang="ts">
import { useMainStore } from "@/stores/main";
import { storeToRefs } from "pinia";
import DateSection from "@/components/sections/Date.vue";
import ListSection from "@/components/sections/List.vue";
import RankSection from "@/components/sections/Rank.vue";
import TextSection from "@/components/sections/Text.vue";
import ReferenceSection from "@/components/sections/Reference.vue";

const store = useMainStore();
const { sections } = storeToRefs(store);
</script>

<template>
    <div>
        <div v-for="(section, index) in sections" :key="index" class="px-10 py-4">
            <h4 class="font-bold border-b-2 pb-1">{{ section.header }}</h4>
            <DateSection v-if="section.type === 'date'" :sectionData="section.data" :sectionIndex="index" class="py-2" />
            <ListSection v-if="section.type === 'list'" :sectionIndex="index" class="py-2" />
            <RankSection v-if="section.type === 'rank'" :sectionData="section.data" :sectionIndex="index" class="py-2" />
            <TextSection v-if="section.type === 'text'" :sectionData="section.data" :sectionIndex="index" class="py-2" />
            <ReferenceSection v-if="section.type === 'reference'" :sectionData="section.data" :sectionIndex="index" class="py-2" />
        </div>
    </div>
</template>
