<script setup lang="ts">
import { useMainStore } from "@/stores/main";
import { storeToRefs } from "pinia";

import General from "@/components/styling/sections/General.vue";
import Personal from "@/components/styling/sections/Personal.vue";
import Experience from "@/components/styling/sections/Experience.vue";
import Skill from "@/components/styling/sections/Skill.vue";
import Language from "@/components/styling/sections/Language.vue";
import Reference from "@/components/styling/sections/Reference.vue";
import Project from "@/components/styling/sections/Project.vue";

const allSections: any = {
    General,
    Personal,
    Experience,
    Skill,
    Language,
    Reference,
    Project,
};

const store = useMainStore();
const { sections } = storeToRefs(store);
</script>

<template>
    <div v-for="(section, index) in sections" :key="index" :class="{ 'px-10 py-4 m-10': section.stylingComponent !== 'Contact' }">
        <component :is="(allSections[section.stylingComponent as any])" class="my-5 transition-all duration-500" :sectionIndex="index" :class="[section.isHidden ? ' blur-sm' : '']"></component>
    </div>
</template>
