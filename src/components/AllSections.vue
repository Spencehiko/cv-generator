<script setup lang="ts">
import { useMainStore, themes } from "@/stores/main";
import { storeToRefs } from "pinia";

import Generic from "@/components/edit/table/Generic.vue";
import Experience from "@/components/edit/sections/Experience.vue";
import Skill from "@/components/edit/sections/Skill.vue";
import Language from "@/components/edit/sections/Language.vue";
import Reference from "@/components/edit/sections/Reference.vue";
import Certificate from "@/components/edit/sections/Certificate.vue";
import Project from "@/components/edit/sections/Project.vue";

const allSections: any = {
    Generic,
    Experience,
    Skill,
    Language,
    Reference,
    Certificate,
    Project,
};

const store = useMainStore();
const { sections, activeTheme } = storeToRefs(store);
const { toggleHideSection, openAddDialog, openEditSectionDialog } = store;
</script>

<template>
    <div>
        <div class="px-5 py-4 m-10 border border-black rounded-lg sm:px-10">
            <div class="flex flex-col gap-5 sm:flex-row sm:gap-0 border-b-2 pb-1">
                <h4 class="text-xl text-center font-bold sm:text-left"><font-awesome-icon icon="fa-solid fa-brush" /> Theme Selection</h4>
            </div>
            <div class="my-5">
                <div class="flex flex-row flex-wrap gap-5">
                    <button v-for="(theme, index) in themes" :key="index" class="border rounded-lg w-1/4-5 group relative" @click="activeTheme = index.toString()">
                        <div class="p-5 group-hover:opacity-0 duration-500 transition-all">
                            <img :src="theme.photoPath" class="w-full h-auto" />
                        </div>
                        <div
                            class="p-5 flex flex-col gap-5 opacity-0 group-hover:opacity-100 duration-500 transition-all w-full text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                        >
                            <font-awesome-icon v-if="theme.type === 'light'" icon="fa-solid fa-sun" />
                            <font-awesome-icon v-else icon="fa-solid fa-moon" />
                            <span>{{ theme.hasPhotoArea ? "Has" : "Has Not" }} Photo Area</span>
                        </div>
                        <button class="w-full border-t rounded-b-lg text-white" :class="[activeTheme !== index.toString() ? 'bg-blue-600' : 'bg-green-600']" @click="activeTheme = index.toString()">
                            {{ activeTheme !== index.toString() ? theme.name : "SELECTED" }}
                        </button>
                    </button>
                </div>
            </div>
        </div>
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
    </div>
</template>
