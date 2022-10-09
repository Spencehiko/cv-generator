<script setup lang="ts">
import { useMainStore } from "@/stores/main";
import { storeToRefs } from "pinia";

import Generic from "@/components/edit/table/Generic.vue";
import Experience from "@/components/edit/sections/Experience.vue";
import Skill from "@/components/edit/sections/Skill.vue";
import Language from "@/components/edit/sections/Language.vue";
import Reference from "@/components/edit/sections/Reference.vue";
import Project from "@/components/edit/sections/Project.vue";

const allSections: any = {
    Generic,
    Experience,
    Skill,
    Language,
    Reference,
    Project,
};

const store = useMainStore();
const { sections } = storeToRefs(store);
const { toggleHideSection, openAddDialog, openEditSectionDialog } = store;
</script>

<template>
    <div v-for="(section, index) in sections" :key="index" class="px-5 py-4 m-10 border border-black rounded-lg sm:px-10">
        <div class="flex flex-col gap-5 sm:flex-row sm:gap-0 border-b-2 pb-1">
            <h4 class="text-xl text-center font-bold sm:text-left"><font-awesome-icon :icon="section.icon" /> {{ section.header }}</h4>
            <div class="flex flex-row justify-center gap-3 sm:ml-auto">
                <button
                    v-if="section.buttons.includes('add')"
                    class="ml-1 rounded border border-green-500 p-1 hover:bg-green-500 hover:text-white transition duration-500"
                    @click="openAddDialog(index)"
                >
                    Add
                </button>
                <button
                    v-if="section.buttons.includes('edit')"
                    class="ml-1 rounded border border-yellow-500 p-1 hover:bg-yellow-500 hover:text-white transition duration-500"
                    @click="openEditSectionDialog(index)"
                >
                    Edit
                </button>
                <button
                    class="ml-1 rounded border hover:text-white transition duration-500"
                    :class="[section.isHidden ? ' border-green-500 p-1 hover:bg-green-500' : ' border-red-500 p-1 hover:bg-red-500']"
                    @click="toggleHideSection(index)"
                >
                    {{ section.isHidden ? "Show Section" : "Hide Section" }}
                </button>
            </div>
        </div>
        <component :is="(allSections[section.component as any])" class="my-5 transition-all duration-500" :sectionIndex="index" :class="[section.isHidden ? ' blur-sm' : '']"></component>
    </div>
</template>
