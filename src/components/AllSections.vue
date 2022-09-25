<script setup lang="ts">
import { useMainStore } from "@/stores/main";
import { storeToRefs } from "pinia";

import Generic from "@/components/table/Generic.vue";
import Experience from "@/components/sections/Experience.vue";
import Skill from "@/components/sections/Skill.vue";
import Language from "@/components/sections/Language.vue";
import Reference from "@/components/sections/Reference.vue";
import Project from "@/components/sections/Project.vue";

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
const { toggleHideSection, openAddSectionDialog, openEditSectionDialog } = store;
</script>

<template>
    <div v-for="(section, index) in sections" :key="index" class="px-10 py-4 m-10 border border-black rounded-lg">
        <div class="flex flex-row border-b-2 pb-1">
            <h4 class="text-xl font-bold"><font-awesome-icon :icon="section.icon" /> {{ section.header }}</h4>
            <div class="ml-auto flex flex-row gap-3">
                <button
                    v-if="section.buttons.includes('add')"
                    class="rounded border border-green-500 p-1 hover:bg-green-500 hover:text-white transition duration-500"
                    @click="openAddSectionDialog(index)"
                >
                    Add
                </button>
                <button
                    v-if="section.buttons.includes('edit')"
                    class="rounded border border-yellow-500 p-1 hover:bg-yellow-500 hover:text-white transition duration-500"
                    @click="openEditSectionDialog(index)"
                >
                    Edit
                </button>
                <button
                    class="rounded border hover:text-white transition duration-500"
                    :class="[section.isHidden ? ' border-green-500 p-1 hover:bg-green-500' : ' border-red-500 p-1 hover:bg-red-500']"
                    @click="toggleHideSection(index)"
                >
                    {{ section.isHidden ? "Show" : "Hide" }}
                </button>
            </div>
        </div>
        <component :is="(allSections[section.component as any])" class="my-5 transition-all duration-500" :sectionIndex="index" :class="[section.isHidden ? ' blur-sm' : '']"></component>
    </div>
</template>
