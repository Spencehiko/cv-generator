<script setup lang="ts">
import { workStyleOptions } from "@/stores/main";
import Header from "@/components/preview/dark/general/Header.vue";
import Education from "@/components/preview/dark/sections/Education.vue";

const props = defineProps(["sections", "sectionIndex"]);
</script>
<template>
    <div>
        <Header :header="sections[sectionIndex].header" />
        <div class="flex flex-row justify-between mt-3 page-break-inside-avoid print:mt-1.5" v-for="(data, index) in sections[sectionIndex].data" :key="index">
            <div class="flex flex-col gap-1 w-full print:gap-0">
                <div class="flex flex-row flex-nowrap justify-between">
                    <span class="font-semibold text-xl">
                        {{ data["companyName"] }}
                        <span class="text-gray-400"> - {{ (workStyleOptions as any)[data.workStyle] }}</span>
                    </span>
                    <div class="flex flex-row gap-1 items-center">
                        <span class="text-gray-400 text-lg">
                            {{ (data["startDate"].month + 1 < 10 ? "0" + (data["startDate"].month + 1) : data["startDate"].month + 1) + "/" + data["startDate"].year }}
                        </span>
                        <span>-</span>
                        <span v-if="data['endDate']" class="text-gray-400 text-lg">
                            {{ (data["endDate"].month + 1 < 10 ? "0" + (data["endDate"].month + 1) : data["endDate"].month + 1) + "/" + data["endDate"].year }}
                        </span>
                        <span v-else class="text-gray-400 text-lg"> NOW </span>
                    </div>
                </div>
                <span class="text-lg">{{ data["title"] }}</span>
                <p class="text-gray-400">{{ data["summary"] }}</p>
                <div class="flex flex-row gap-10">
                    <span v-if="data.companyLocation">Location: {{ data.companyLocation }}</span>
                    <span v-if="data.companyWebsite"
                        >Website: <a :href="data.companyWebsite" target="_blank" class="text-blue-500">{{ data.companyWebsite }}</a></span
                    >
                </div>
            </div>
        </div>
        <Education class="mt-6 print:mt-1" :sections="sections" />
    </div>
</template>
