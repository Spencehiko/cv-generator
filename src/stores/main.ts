import { defineStore } from "pinia";

interface Input {
    type: String;
    name: String;
    label: String;
}

interface Section {
    header: String;
    icon: String;
    name: String;
    component: String;
    buttons: Array<string>;
    inputs: any;
    data: Array<any>;
    isHidden: boolean;
}

export const experienceLevels = ["", "< 1 Year", "1-3 Years", "3-5 Years", "5+ Years"];
export const workStyleOptions = {
    fulltime: "Full Time",
    parttime: "Part Time",
    intern: "Intern",
    freelance: "Freelance",
};

export const defaultSections = [
    {
        header: "General Info",
        icon: "fa-solid fa-home",
        name: "General",
        component: "Generic",
        buttons: ["edit"],
        inputs: {
            firstName: {
                type: "input",
                inputType: "text",
                inputLabel: "First Name",
                required: true,
            },
            lastName: {
                type: "input",
                inputType: "text",
                inputLabel: "Last Name",
                required: true,
            },
            title: {
                type: "input",
                inputType: "text",
                inputLabel: "Job Title",
                required: true,
            },
            summary: {
                type: "input",
                inputType: "text",
                inputLabel: "Summary",
                required: true,
            },
            portfolio: {
                type: "input",
                inputType: "text",
                inputLabel: "Portfolio Link",
                required: false,
            },
            schoolStatus: {
                type: "input",
                inputType: "checkbox",
                inputLabel: "Are you graduated?",
                required: true,
            },
            schoolName: {
                type: "input",
                inputType: "text",
                inputLabel: "School Name",
                required: true,
            },
            schoolDepartmant: {
                type: "input",
                inputType: "text",
                inputLabel: "School Departmant",
                required: true,
            },
            graduationDate: {
                type: "input",
                inputType: "date",
                inputLabel: "Graduation Date",
                required: false,
            },
        },
        data: {
            firstName: "John",
            lastName: "Doe",
            title: "Frontend Developer",
            summary: "A passionate Frontend Developer that is keen to learn new technologies. Worked over 5 years in different scale of companies and developed big scaled projects.",
            portfolio: "https://hicaku.com",
            schoolStatus: true,
            schoolName: "Some University",
            schoolDepartmant: "Some Department",
            graduationDate: "01/2021",
        },
        isHidden: false,
    },
    {
        header: "Contact Info",
        icon: "fa-solid fa-envelope",
        name: "Contact",
        component: "Generic",
        buttons: ["edit"],
        inputs: {
            email: {
                type: "input",
                inputType: "text",
                inputLabel: "E-Mail",
                required: true,
            },
            phone: {
                type: "input",
                inputType: "text",
                inputLabel: "Phone Number",
                required: true,
            },
            address: {
                type: "input",
                inputType: "text",
                inputLabel: "Address",
                required: true,
            },
            github: {
                type: "input",
                inputType: "text",
                inputLabel: "GitHub Link",
                required: false,
            },
            linkedin: {
                type: "input",
                inputType: "text",
                inputLabel: "LinkedIn Link",
                required: false,
            },
            youtube: {
                type: "input",
                inputType: "text",
                inputLabel: "YouTube Link",
                required: false,
            },
            twitter: {
                type: "input",
                inputType: "text",
                inputLabel: "Twitter Link",
                required: false,
            },
        },
        data: {
            email: "johndoe@mail.com",
            phone: "+12 345 67 89",
            address: "Istanbul / Turkey",
            github: "",
            linkedin: "",
            youtube: "",
            twitter: "",
        },
        isHidden: false,
    },
    {
        header: "Personal Info",
        icon: "fa-solid fa-id-card",
        name: "Personal",
        component: "Generic",
        buttons: ["edit"],
        inputs: {
            birthOfDate: {
                type: "input",
                inputType: "date",
                inputLabel: "Birth of Date",
                required: false,
            },
            gender: {
                type: "input",
                inputType: "text",
                inputLabel: "Gender",
                required: false,
            },
            pronoun: {
                type: "input",
                inputType: "text",
                inputLabel: "Pronoun",
                required: false,
            },
            hobbies: {
                type: "input",
                inputType: "text",
                inputLabel: "Hobbies",
                required: false,
            },
        },
        data: {
            birthOfDate: "",
            gender: "",
            pronoun: "",
            hobbies: "",
        },
        isHidden: false,
    },
    {
        header: "Work Experience",
        icon: "fa-solid fa-briefcase",
        name: "Experience",
        component: "Experience",
        buttons: ["add"],
        inputs: {
            companyName: {
                type: "input",
                inputType: "text",
                inputLabel: "Company Name",
                required: true,
            },
            title: {
                type: "input",
                inputType: "text",
                inputLabel: "Job Title",
                required: true,
            },
            startDate: {
                type: "input",
                inputType: "date",
                inputLabel: "Start Date",
                required: true,
            },
            endDate: {
                type: "input",
                inputType: "date",
                inputLabel: "End Date",
                required: false,
            },
            companyLocation: {
                type: "input",
                inputType: "text",
                inputLabel: "Company Location",
                required: false,
            },
            companyWebsite: {
                type: "input",
                inputType: "text",
                inputLabel: "Company Website",
                required: false,
            },
            workStyle: {
                type: "input",
                inputType: "select",
                inputLabel: "Work Style",
                inputOptions: workStyleOptions,
                required: true,
            },
            summary: {
                type: "input",
                inputType: "textarea",
                inputLabel: "Summary",
                required: false,
            },
            isStillWorkingHere: {
                type: "input",
                inputType: "checkbox",
                inputLabel: "Are you still working here?",
                required: true,
            },
        },
        data: [
            {
                companyName: "3rd Company",
                title: "Frontend Developer",
                startDate: "01/2022",
                endDate: "",
                companyLocation: "Istanbul / Turkey",
                companyWebsite: "thirdcompany.abcd",
                workStyle: "fulltime",
                summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla justo sed tempor malesuada. Nam ex est, ornare nec massa.",
                isStillWorkingHere: true,
            },
            {
                companyName: "2nd Company",
                title: "Frontend Developer",
                startDate: "06/2021",
                endDate: "12/2021",
                companyLocation: "Istanbul / Turkey",
                companyWebsite: "secondcompany.abcd",
                workStyle: "fulltime",
                summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla justo sed tempor malesuada. Nam ex est, ornare nec massa.",
                isStillWorkingHere: false,
            },
            {
                companyName: "1st Company",
                title: "Junior Frontend Developer",
                startDate: "01/2021",
                endDate: "06/2021",
                companyLocation: "",
                companyWebsite: "firstcompany.abcd",
                workStyle: "fulltime",
                summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis magna urna, quis maximus risus vestibulum in. Aliquam erat volutpat.",
                isStillWorkingHere: false,
            },
        ],
        isHidden: false,
    },
    {
        header: "Skills",
        icon: "fa-solid fa-star",
        name: "Skill",
        component: "Skill",
        buttons: ["add"],
        inputs: {
            name: {
                type: "input",
                inputType: "text",
                inputLabel: "Skill Name",
                required: true,
            },
            skill: {
                type: "input",
                inputType: "range",
                inputLabel: "Skill Points (out of 10)",
                required: true,
            },
            experience: {
                type: "input",
                inputType: "select",
                inputLabel: "Experience",
                inputOptions: [
                    {
                        name: "< 1 Year",
                        value: 1,
                    },
                    {
                        name: "1-3 Years",
                        value: 2,
                    },
                    {
                        name: "3-5 Years",
                        value: 3,
                    },
                    {
                        name: "5+ Years",
                        value: 4,
                    },
                ],
                required: true,
            },
            summary: {
                type: "input",
                inputType: "textarea",
                inputLabel: "Summary",
                required: true,
            },
        },
        data: [
            {
                name: "Vue.js",
                skill: 7,
                experience: 2,
                summary: "Used Vue.js in many projects.",
            },
            {
                name: "TypeScript",
                skill: 6,
                experience: 2,
                summary: "Used TypeScript in many projects.",
            },
            {
                name: "JavaScript",
                skill: 8,
                experience: 3,
                summary: "Used JavaScript in many projects.",
            },
            {
                name: "Tailwind CSS",
                skill: 6,
                experience: 1,
                summary: "Used Tailwind CSS in many projects.",
            },
            {
                name: "HTML",
                skill: 9,
                experience: 3,
                summary: "Used HTML in many projects.",
            },
        ],
        isHidden: false,
    },
    {
        header: "Languages",
        icon: "fa-solid fa-language",
        name: "Language",
        component: "Language",
        buttons: ["add"],
        inputs: {
            name: {
                type: "input",
                inputType: "text",
                inputLabel: "Language",
                required: true,
            },
            value: {
                type: "input",
                inputType: "range",
                inputLabel: "Language Proficiency (out of 10)",
                required: true,
            },
        },
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
                value: 3,
            },
        ],
        isHidden: false,
    },
    {
        header: "Projects",
        icon: "fa-solid fa-folder",
        name: "Project",
        component: "Project",
        buttons: ["add"],
        inputs: {
            name: {
                type: "input",
                inputType: "text",
                inputLabel: "Project Name",
                required: true,
            },
            link: {
                type: "input",
                inputType: "text",
                inputLabel: "Link to Project",
                required: true,
            },
        },
        data: [
            {
                name: "1st Project Name",
                link: "https://firstproject.com/",
            },
            {
                name: "2nd Project Name",
                link: "https://secondproject.com/",
            },
        ],
        isHidden: false,
    },
    {
        header: "References",
        icon: "fa-solid fa-user-tie",
        name: "Reference",
        component: "Reference",
        buttons: ["add"],
        inputs: {
            name: {
                type: "input",
                inputType: "text",
                inputLabel: "Reference Name",
                required: true,
            },
            companyName: {
                type: "input",
                inputType: "text",
                inputLabel: "Company Name",
                required: true,
            },
            title: {
                type: "input",
                inputType: "text",
                inputLabel: "Title",
                required: true,
            },
            email: {
                type: "input",
                inputType: "text",
                inputLabel: "E-Mail",
                required: false,
            },
            phone: {
                type: "input",
                inputType: "text",
                inputLabel: "Phone Number",
                required: false,
            },
        },
        data: [
            {
                name: "Jane Doe",
                companyName: "1st Company",
                title: "CEO and Founder",
                email: "janedoe@mail.com",
                phone: "",
            },
            {
                name: "Allen Iverson",
                companyName: "2nd Company",
                title: "Team Lead",
                email: "alleniverson@mail.com",
                phone: "+21 543 76 98",
            },
        ],
        isHidden: false,
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
        // Header Button Actions
        exportCV() {
            console.log("Will be developed soon!");
        },
        // Table Header Button Actions
        openAddSectionDialog(index: number) {
            console.log("index", index);
        },
        openEditSectionDialog(index: number) {
            console.log("index", index);
        },
        toggleHideSection(index: number) {
            this.sections[index].isHidden = !this.sections[index].isHidden;
        },
        // Table Button Actions
        editData(sectionIndex: number, index: number) {
            console.log(sectionIndex);
            console.log(index);
        },
        deleteData(sectionIndex: number, index: number) {
            console.log(sectionIndex);
            console.log(index);
        },
        moveUpData(sectionIndex: number, index: number) {
            [this.sections[sectionIndex].data[index], this.sections[sectionIndex].data[index - 1]] = [this.sections[sectionIndex].data[index - 1], this.sections[sectionIndex].data[index]];
        },
        moveDownData(sectionIndex: number, index: number) {
            [this.sections[sectionIndex].data[index], this.sections[sectionIndex].data[index + 1]] = [this.sections[sectionIndex].data[index + 1], this.sections[sectionIndex].data[index]];
        },
    },
    persist: true,
});
