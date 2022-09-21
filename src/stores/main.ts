import { defineStore } from "pinia";

interface Input {
    type: String;
    name: String;
    label: String;
}

interface Section {
    header: String;
    name: String;
    buttons: Array<string>;
    data: Array<any>;
}

export const defaultSections = [
    {
        header: "General Info",
        name: "General",
        buttons: ["edit"],
        data: [
            {
                name: "firstName",
                value: "John",
                type: "input",
                inputType: "text",
                inputLabel: "First Name",
                required: true,
            },
            {
                name: "lastName",
                value: "Doe",
                type: "input",
                inputType: "text",
                inputLabel: "Last Name",
                required: true,
            },
            {
                name: "title",
                value: "Frontend Developer",
                type: "input",
                inputType: "text",
                inputLabel: "Your Title",
                required: true,
            },
            {
                name: "summary",
                value: "A passionate Frontend Developer that is keen to learn new technologies. Worked over 5 years in different scale of companies and developed big scaled projects.",
                type: "textarea",
                inputType: "",
                inputLabel: "Summary",
                required: true,
            },
            {
                title: "schoolStatus",
                value: true,
                type: "input",
                inputType: "checkbox",
                inputLabel: "Are you graduated?",
                required: true,
            },
            {
                name: "schoolName",
                value: "Some University",
                type: "input",
                inputType: "text",
                inputLabel: "School Name",
                required: true,
            },
            {
                name: "schoolDepartmant",
                value: "Some Department",
                type: "input",
                inputType: "text",
                inputLabel: "School Departmant",
                required: true,
            },
        ],
    },
    {
        header: "Contact Info",
        name: "Contact",
        buttons: ["edit", "delete", "add"],
        data: [
            {
                name: "email",
                value: "johndoe@mail.com",
                type: "input",
                inputType: "text",
                inputLabel: "E-Mail",
                required: true,
            },
            {
                name: "phone",
                value: "+12 345 67 89",
                type: "input",
                inputType: "text",
                inputLabel: "Phone Number",
                required: true,
            },
            {
                name: "address",
                value: "Istanbul / Turkey",
                type: "input",
                inputType: "text",
                inputLabel: "Address",
                required: true,
            },
            {
                name: "github",
                value: "",
                type: "input",
                inputType: "text",
                inputLabel: "GitHub",
                required: false,
            },
            {
                name: "linkedin",
                value: "",
                type: "input",
                inputType: "text",
                inputLabel: "LinkedIn",
                required: false,
            },
            {
                name: "youtube",
                value: "",
                type: "input",
                inputType: "text",
                inputLabel: "YouTube",
                required: false,
            },
            {
                name: "twitter",
                value: "",
                type: "input",
                inputType: "text",
                inputLabel: "Twitter",
                required: false,
            },
        ],
    },
    {
        header: "Personal Info",
        name: "Personal",
        buttons: ["edit", "delete"],
        data: [
            {
                name: "birthOfDate",
                value: "01/01/1970",
                type: "input",
                inputType: "date",
                inputLabel: "Birth of Date",
                required: false,
            },
            {
                name: "gender",
                value: "",
                type: "input",
                inputType: "text",
                inputLabel: "Gender",
                required: false,
            },
            {
                name: "pronoun",
                value: "",
                type: "input",
                inputType: "text",
                inputLabel: "Pronoun",
                required: false,
            },
            {
                name: "hobbies",
                value: "",
                type: "input",
                inputType: "text",
                inputLabel: "Hobbies",
                required: false,
            },
        ],
    },
    {
        header: "Work Experience",
        name: "Experience",
        buttons: ["add", "delete"],
        data: [
            {
                name: "companyName",
                value: "Some Company",
                type: "input",
                inputType: "text",
                inputLabel: "Company Name",
                required: true,
            },
            {
                name: "title",
                value: "Frontend Developer",
                type: "input",
                inputType: "text",
                inputLabel: "Title",
                required: true,
            },
            {
                name: "companyLocation",
                value: "",
                type: "input",
                inputType: "text",
                inputLabel: "Company Location",
                required: false,
            },
            {
                name: "companyWebsite",
                value: "",
                type: "input",
                inputType: "text",
                inputLabel: "Company Website",
                required: false,
            },
            {
                name: "workStyle",
                value: "Full-time",
                type: "input",
                inputType: "text",
                inputLabel: "Work Style",
                required: false,
            },
        ],
    },
    {
        header: "Skills",
        name: "Skill",
        buttons: ["edit"],
        data: [],
    },
    {
        header: "Languages",
        name: "Language",
        buttons: ["edit", "delete"],
        data: [],
    },
    {
        header: "References",
        name: "Reference",
        buttons: ["add"],
        data: [],
    },
] as Array<Section>;

export const useMainStore = defineStore({
    id: "store",
    state: () => ({
        activeHeader: "edit" as "edit" | "preview",
        sections: [] as Array<Section>,
        deleteSectionIndex: -1 as number,
    }),
    getters: {},
    actions: {
        setDefaultSections() {
            this.sections = defaultSections;
        },
        exportCV() {
            console.log("Will be developed soon!");
        },
        deleteSection() {
            this.sections.splice(this.deleteSectionIndex, 1);
            this.deleteSectionIndex = -1;
        },
    },
    persist: true,
});
