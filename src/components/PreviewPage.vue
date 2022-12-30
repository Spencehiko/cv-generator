<script setup lang="ts">
import { useMainStore } from "@/stores/main";

/* basic */
import basicGeneral from "@/components/preview/basic/sections/General.vue";
import basicPersonal from "@/components/preview/basic/sections/Personal.vue";
import basicExperience from "@/components/preview/basic/sections/Experience.vue";
import basicSkill from "@/components/preview/basic/sections/Skill.vue";
import basicLanguage from "@/components/preview/basic/sections/Language.vue";
import basicReference from "@/components/preview/basic/sections/Reference.vue";
import basicCertificate from "@/components/preview/basic/sections/Certificate.vue";
import basicProject from "@/components/preview/basic/sections/Project.vue";

/* dark */
import darkGeneral from "@/components/preview/dark/sections/General.vue";
import darkPersonal from "@/components/preview/dark/sections/Personal.vue";
import darkExperience from "@/components/preview/dark/sections/Experience.vue";
import darkSkill from "@/components/preview/dark/sections/Skill.vue";
import darkLanguage from "@/components/preview/dark/sections/Language.vue";
import darkReference from "@/components/preview/dark/sections/Reference.vue";
import darkCertificate from "@/components/preview/dark/sections/Certificate.vue";
import darkProject from "@/components/preview/dark/sections/Project.vue";

/* simple */
import simpleGeneral from "@/components/preview/simple/sections/General.vue";
import simplePersonal from "@/components/preview/simple/sections/Personal.vue";
import simpleExperience from "@/components/preview/simple/sections/Experience.vue";
import simpleSkill from "@/components/preview/simple/sections/Skill.vue";
import simpleLanguage from "@/components/preview/simple/sections/Language.vue";
import simpleReference from "@/components/preview/simple/sections/Reference.vue";
import simpleCertificate from "@/components/preview/simple/sections/Certificate.vue";
import simpleProject from "@/components/preview/simple/sections/Project.vue";

/* sidebar */
import sidebarGeneral from "@/components/preview/sidebar/sections/General.vue";
import sidebarPersonal from "@/components/preview/sidebar/sections/Personal.vue";
import sidebarExperience from "@/components/preview/sidebar/sections/Experience.vue";
import sidebarSkill from "@/components/preview/sidebar/sections/Skill.vue";
import sidebarLanguage from "@/components/preview/sidebar/sections/Language.vue";
import sidebarReference from "@/components/preview/sidebar/sections/Reference.vue";
import sidebarCertificate from "@/components/preview/sidebar/sections/Certificate.vue";
import sidebarProject from "@/components/preview/sidebar/sections/Project.vue";

const allSections: any = {
    basicGeneral,
    basicPersonal,
    basicExperience,
    basicSkill,
    basicLanguage,
    basicReference,
    basicCertificate,
    basicProject,
    darkGeneral,
    darkPersonal,
    darkExperience,
    darkSkill,
    darkLanguage,
    darkReference,
    darkCertificate,
    darkProject,
    simpleGeneral,
    simplePersonal,
    simpleExperience,
    simpleSkill,
    simpleLanguage,
    simpleReference,
    simpleCertificate,
    simpleProject,
    sidebarGeneral,
};

const store = useMainStore();
const { sections, activeTheme } = store;
const deepCloneSections = JSON.parse(JSON.stringify(sections));
deepCloneSections.filter((element: any, index: any) => {
    if (!element.data.length) {
        Object.keys(element.data).forEach((key) => {
            if (!element.data[key]) {
                delete deepCloneSections[index].data[key];
            }
        });
    }
});
</script>

<template>
    <div
        class="p-2 h-full border-t-2 break-words sm:px-5 lg:px-20 print:px-10 print:border-none print:m-0"
        :class="[activeTheme === 'dark' ? 'bg-slate-900 text-white print:bg-slate-900 border-white' : 'border-black']"
    >
        <div class="w-full h-full hidden page-break-always sm:block print:block print:p-5">
            <div
                v-for="(section, index) in deepCloneSections"
                :key="index"
                :class="[section.name !== 'Experience' ? 'mt-5 print:mt-1' : '', section.name !== 'General' ? 'mb-5 print:mb-1' : ' mb-3 print:mb-0']"
            >
                <component
                    v-if="!section.isHidden && section.previewComponent"
                    :is="(allSections[activeTheme + section.previewComponent as any])"
                    :class="[section.name !== 'Experience' ? 'mt-3 print:mt-1' : '', section.name !== 'General' ? 'mb-3 print:mb-1 print:text-sm' : ' mb-1']"
                    :sectionIndex="index"
                    :sections="deepCloneSections"
                ></component>
            </div>
        </div>
        <div class="text-center w-full font-bold sm:hidden print:hidden">Cannot preview on small screens</div>
        <!-- <div class="hidden text-xs w-full text-center italic mt-5 print:block">This CV is created with <a href="https://cv.hicaku.com/" class="text-blue-500">cv.hicaku.com</a></div> -->
    </div>
</template>
<style lang="css">
.page-break-inside-avoid {
    page-break-inside: avoid;
}
.page-break-always {
    page-break-after: always;
}
</style>
