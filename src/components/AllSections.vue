<script setup lang="ts">
import { useMainStore } from "@/stores/main";
import { storeToRefs } from "pinia";

import GeneralSection from "@/components/sections/General.vue";
import ContactSection from "@/components/sections/Contact.vue";
import PersonalSection from "@/components/sections/Personal.vue";
import ExperienceSection from "@/components/sections/Experience.vue";
import SkillSection from "@/components/sections/Skill.vue";
import LanguageSection from "@/components/sections/Language.vue";
import ReferenceSection from "@/components/sections/Reference.vue";

const store = useMainStore();
const { sections } = storeToRefs(store);
</script>

<template>
    <div v-for="(section, index) in sections" :key="index" class="px-10 py-4 m-10 border border-black rounded-lg">
        <div class="flex flex-row border-b-2 pb-1">
            <h4 class="text-xl font-bold">{{ section.header }}</h4>
            <div class="ml-auto flex flex-row gap-3">
                <button v-if="section.buttons.indexOf('add') !== -1" class="rounded border border-green-500 p-1 hover:bg-green-500 hover:text-white transition duration-500">Add</button>
                <button v-if="section.buttons.indexOf('edit') !== -1" class="rounded border border-yellow-500 p-1 hover:bg-yellow-500 hover:text-white transition duration-500">Edit</button>
                <button v-if="section.buttons.indexOf('delete') !== -1" class="rounded border border-red-500 p-1 hover:bg-red-500 hover:text-white transition duration-500">Delete</button>
            </div>
        </div>
        <GeneralSection v-if="section.name === 'General'" class="my-2" :sectionIndex="index" />
        <ContactSection v-if="section.name === 'Contact'" class="my-2" :sectionIndex="index" />
        <PersonalSection v-if="section.name === 'Personal'" class="my-2" :sectionIndex="index" />
        <ExperienceSection v-if="section.name === 'Experience'" class="my-2" :sectionIndex="index" />
        <SkillSection v-if="section.name === 'Skill'" class="my-2" :sectionIndex="index" />
        <LanguageSection v-if="section.name === 'Language'" class="my-2" :sectionIndex="index" />
        <ReferenceSection v-if="section.name === 'Reference'" class="my-2" :sectionIndex="index" />
    </div>
</template>
