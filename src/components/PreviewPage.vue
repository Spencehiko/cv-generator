<script setup lang="ts">
import { useMainStore } from "@/stores/main";
import { onMounted } from "vue";

import General from "@/components/preview/sections/General.vue";
import Personal from "@/components/preview/sections/Personal.vue";
import Experience from "@/components/preview/sections/Experience.vue";
import Skill from "@/components/preview/sections/Skill.vue";
import Language from "@/components/preview/sections/Language.vue";
import Reference from "@/components/preview/sections/Reference.vue";
import Project from "@/components/preview/sections/Project.vue";

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
const { sections } = store;
</script>

<template>
    <div>
        <div
            v-for="(section, index) in sections"
            :key="index"
            :class="[section.name !== 'Experience' ? 'mt-5 print:mt-1.5' : '', section.name !== 'General' ? 'mb-5 print:mb-1.5' : ' mb-3 print:mb-0']"
        >
            <component
                v-if="!section.isHidden && section.previewComponent"
                :is="(allSections[section.previewComponent as any])"
                :class="[section.name !== 'Experience' ? 'mt-3 print:mt-1.5' : '', section.name !== 'General' ? 'mb-3 print:mb-1.5' : ' mb-1.5']"
                :sectionIndex="index"
            ></component>
        </div>
        <span class="hidden text-xs w-full text-center italic mt-16 print:block">This CV is created with <a href="https://cv.hicaku.com/" class="text-blue-500">cv.hicaku.com</a></span>
    </div>
</template>
<style lang="css">
.page-break-inside-avoid {
    page-break-inside: avoid;
}
</style>
