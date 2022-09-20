import { faL } from "@fortawesome/free-solid-svg-icons";
import { defineStore } from "pinia";

interface Input {
    type: String;
    name: String;
    label: String;
}

interface Section {
    header: String;
    type: String;
    name: String;
    inputs: Array<Input>;
    data: Array<any>;
}

const defaultSections = [
    {
        header: "General Info",
        type: "info",
        name: "Info",
        inputs: [
            {
                type: "input",
                name: "key",
                label: "Name",
                value: "",
            },
            {
                type: "input",
                name: "value",
                label: "Value",
                value: "",
            },
        ],
        data: [
            {
                key: "Name",
                value: "John Doe",
                iconClass: "fa-solid fa-id-badge",
            },
            {
                key: "Title",
                value: "Frontend Developer",
                iconClass: "fa-solid fa-briefcase",
            },
            {
                key: "Pronoun",
                value: "He/Him",
                iconClass: "fa-solid fa-venus-mars",
            },
            {
                key: "Location",
                value: "Some Location",
                iconClass: "fa-solid fa-location-dot",
            },
            {
                key: "Phone",
                value: "+90 500 000 00 00",
                iconClass: "fa-solid fa-phone",
            },
            {
                key: "Email",
                value: "mailname@mail.com",
                iconClass: "fa-solid fa-envelope",
            },
            {
                key: "Portfolio",
                value: "portfolio.com",
                iconClass: "fa-solid fa-house",
            },
            {
                key: "Github",
                value: "github.com/githubname",
                iconClass: "fa-brands fa-github",
            },
            {
                key: "LinkedIn",
                value: "linkedin.com/linkedinname",
                iconClass: "fa-brands fa-linkedin",
            },
            {
                key: "Twitter",
                value: "twitter.com/twittername",
                iconClass: "fa-brands fa-twitter",
            },
            {
                key: "Facebook",
                value: "facebook.com/facebookname",
                iconClass: "fa-brands fa-facebook",
            },
            {
                key: "Instagram",
                value: "instagram.com/instagramname",
                iconClass: "fa-brands fa-instagram",
            },
            {
                key: "Youtube",
                value: "youtube.com/youtubename",
                iconClass: "fa-brands fa-youtube",
            },
            {
                key: "Discord",
                value: "discord.com/discordname",
                iconClass: "fa-brands fa-discord",
            },
        ],
    },
    {
        header: "Summary",
        type: "text",
        name: "Summary",
        inputs: [
            {
                type: "textarea",
                name: "",
                label: "Summary",
                value: "",
            },
        ],
        data: ["This is a summary example. You can edit or delete this section."],
    },
    {
        header: "Work Experience",
        type: "date",
        name: "Experience",
        inputs: [
            {
                type: "input",
                name: "company",
                label: "Company",
                value: "",
            },
            {
                type: "input",
                name: "title",
                label: "Title",
                value: "",
            },
            {
                type: "input",
                name: "startDate",
                label: "Start Date",
                value: "",
            },
            {
                type: "input",
                name: "endDate",
                label: "End Date",
                value: "",
            },
            {
                type: "textarea",
                name: "summary",
                label: "Summary",
                value: "",
            },
        ],
        data: [
            {
                company: "Last Company",
                title: "Frontend Developer",
                startDate: {
                    month: 7,
                    year: 2022,
                },
                endDate: null,
                summary: "In this company, I worked as a Frontend Developer and I participated in many projects.",
            },
            {
                company: "First Company",
                title: "Junior Frontend Developer",
                startDate: {
                    month: 7,
                    year: 2021,
                },
                endDate: {
                    month: 11,
                    year: 2021,
                },
                summary: "In this first company, I worked as a Junior Frontend Developer and I participated in many projects.",
            },
        ],
    },
    {
        header: "Education",
        type: "date",
        name: "Education",
        inputs: [
            {
                type: "input",
                name: "school",
                label: "School",
                value: "",
            },
            {
                type: "input",
                name: "department",
                label: "Department",
                value: "",
            },
            {
                type: "input",
                name: "startDate",
                label: "Start Date",
                value: "",
            },
            {
                type: "input",
                name: "endDate",
                label: "End Date",
                value: "",
            },
            {
                type: "input",
                name: "gpa",
                label: "GPA",
                value: "",
            },
        ],
        data: [
            {
                school: "Some University",
                department: "Some Engineering",
                startDate: {
                    month: 5,
                    year: 2018,
                },
                endDate: {
                    month: 1,
                    year: 2022,
                },
                gpa: "3.14",
            },
        ],
    },
    {
        header: "Skills",
        type: "rank",
        name: "Skill",
        inputs: [
            {
                type: "input",
                name: "name",
                label: "Name",
                value: "",
            },
            {
                type: "input",
                name: "value",
                label: "Grade",
                value: "",
            },
            {
                type: "textarea",
                name: "summary",
                label: "Summary",
                value: "",
            },
        ],
        data: [
            {
                name: "Vue.js",
                value: 9,
                summary: "I worked with Vue.js for many years.",
            },
            {
                name: "TypeScript",
                value: 6,
                summary: "I worked with TypeScript for many years.",
            },
            {
                name: "Tailwind CSS",
                value: 3,
                summary: "I am a beginner in Tailwind CSS.",
            },
        ],
    },
    {
        header: "Languages",
        type: "rank",
        name: "Language",
        inputs: [
            {
                type: "input",
                name: "name",
                label: "Name",
                value: "",
            },
            {
                type: "input",
                name: "value",
                label: "Grade",
                value: "",
            },
        ],
        data: [
            {
                name: "Turkish",
                value: 10,
            },
            {
                name: "English",
                value: 9,
            },
            {
                name: "Chinese",
                value: 2,
            },
        ],
    },
    {
        header: "Hobbies",
        type: "list",
        name: "Hobby",
        inputs: [
            {
                type: "list",
                name: "name",
                label: "Hobby Name",
                value: "",
            },
        ],
        data: ["Video games", "Algorithm problems", "Sports", "Yoga"],
    },
    {
        header: "Certificates",
        type: "date",
        name: "Certificate",
        inputs: [
            {
                type: "input",
                name: "company",
                label: "Company",
                value: "",
            },
            {
                type: "input",
                name: "title",
                label: "Title",
                value: "",
            },
            {
                type: "input",
                name: "startDate",
                label: "Date",
                value: "",
            },
            {
                type: "textarea",
                name: "summary",
                label: "Summary",
                value: "",
            },
        ],
        data: [
            {
                company: "A Company",
                title: "First Certificate",
                startDate: {
                    month: 2,
                    year: 2019,
                },
                summary: "I earned this certificate in a course in A Company.",
            },
            {
                company: "B Company",
                title: "Second Certificate",
                startDate: {
                    month: 8,
                    year: 2019,
                },
                summary: "I earned this certificate in a course in B Company.",
            },
        ],
    },
    {
        header: "References",
        type: "reference",
        name: "Reference",
        inputs: [
            {
                type: "input",
                name: "name",
                label: "Name",
                value: "",
            },
            {
                type: "input",
                name: "title",
                label: "Title",
                value: "",
            },
            {
                type: "input",
                name: "contact",
                label: "Contact",
                value: "",
            },
        ],
        data: [
            {
                name: "Name Surname",
                title: "CEO at Company H",
                contact: "reference@mail.com",
            },
            {
                name: "Second Reference",
                title: "CTO at Company Y",
                contact: "second@mail.com",
            },
        ],
    },
];

export const defaultAddDialog = {
    show: false,
    inputs: [],
    sectionIndex: -1,
};

export const useMainStore = defineStore({
    id: "store",
    state: () => ({
        activeHeader: "edit" as "edit" | "preview",
        sections: [] as Array<Section>,
        alert: {
            show: false as boolean,
            message: "" as String,
            duration: 0 as number,
            type: null as null | "success" | "error",
        },
        confirm: {
            show: false as boolean,
            message: "" as String,
            onSuccess: null as any,
            onError: null as any,
        },
        deleteSectionIndex: -1 as number,
        addDialog: {
            show: false as boolean,
            inputs: [] as Array<any>,
            sectionIndex: -1 as number,
        },
        newItems: [] as Array<any>,
    }),
    getters: {},
    actions: {
        exportCV() {
            console.log("Will be developed soon!");
        },
        resetSections() {
            this.sections = JSON.parse(JSON.stringify(defaultSections));
            this.confirm.show = false;
            this.confirm.message = "";
        },
        deleteSection() {
            this.sections.splice(this.deleteSectionIndex, 1);
            this.confirm.show = false;
            this.confirm.message = "";
            this.deleteSectionIndex = -1;
        },
        deleteItem(sectionIndex: number, itemIndex: number) {
            this.sections[sectionIndex].data.splice(itemIndex, 1);
        },
        addItem() {
            this.sections[this.addDialog.sectionIndex].data.push(this.newItems);
            for (const input of this.sections[this.addDialog.sectionIndex].inputs) {
                (input as any).value = "";
            }
            this.addDialog.inputs = [];
            this.addDialog.sectionIndex = -1;
            this.addDialog.show = false;
            this.confirm.show = false;
        },
        closeConfirmDialog() {
            this.confirm.show = false;
        },
        closeConfirmDialogAndReopenAddDialog() {
            this.confirm.show = false;
            this.addDialog.show = true;
        },
        showAlert(message: String, duration: number, alertType: null | "success" | "error") {
            clearTimeout(this.alert.duration);
            this.alert.message = message;
            this.alert.type = alertType;
            this.alert.duration = setTimeout(() => {
                this.alert.message = "";
            }, duration);
        },
        showResetDialog() {
            this.confirm = {
                show: true,
                message: "Are you sure to reset all your progress?",
                onSuccess: this.resetSections,
                onError: this.closeConfirmDialog,
            };
        },
        showConfirmDialog() {
            this.addDialog.show = false;
            this.confirm = {
                show: true,
                message: "Some areas are left blank. Are you sure to continue?",
                onSuccess: this.addItem,
                onError: this.closeConfirmDialogAndReopenAddDialog,
            };
        },
        showDeleteSectionDialog(index: number) {
            this.deleteSectionIndex = index;
            this.confirm = {
                show: true,
                message: "Are you sure to delete this section?",
                onSuccess: this.deleteSection,
                onError: this.closeConfirmDialog,
            };
        },
        showAddDialog(sectionIndex: number, inputs: Array<any>) {
            this.addDialog.inputs = inputs;
            this.addDialog.sectionIndex = sectionIndex;
            this.addDialog.show = true;
        },
    },
    persist: true,
});
