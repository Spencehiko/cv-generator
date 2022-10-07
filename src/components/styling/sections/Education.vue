<script setup lang="ts">
import { useMainStore } from "@/stores/main";

const store = useMainStore();
const { sections } = store as any;
</script>
<template>
    <div class="mt-2">
        <div class="flex flex-row items-center gap-1">
            <span class="whitespace-nowrap font-bold text-xl">Education Status</span>
            <hr class="w-full border rounded-lg" />
        </div>
        <div class="flex flex-row justify-between mt-4">
            <div class="flex flex-col">
                <span class="font-semibold text-lg">{{ sections[0].data["schoolStatus"] ? "Graduate" : "Undergraduate" }}</span>
                <span>{{ sections[0].data["schoolName"] + " - " + sections[0].data["schoolDepartmant"] }}</span>
                <span class="text-gray-500">{{ sections[0].data["schoolGpa"] }}</span>
            </div>
            <span class="text-gray-500 text-lg">
                {{
                    (sections[0].data["startDate"].month + 1 < 10 ? "0" + (sections[0].data["startDate"].month + 1) : sections[0].data["startDate"].month + 1) +
                    "/" +
                    sections[0].data["startDate"].year +
                    " - " +
                    (sections[0].data["graduationDate"].month + 1 < 10 ? "0" + (sections[0].data["graduationDate"].month + 1) : sections[0].data["graduationDate"].month + 1) +
                    "/" +
                    sections[0].data["graduationDate"].year
                }}
            </span>
        </div>
    </div>
</template>
