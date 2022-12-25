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
    previewComponent: String;
    buttons: Array<string>;
    inputs: any;
    data: Array<any>;
    isHidden: boolean;
}

export const workStyleOptions = {
    fulltime: "Full Time",
    parttime: "Part Time",
    intern: "Intern",
    freelance: "Freelance",
};
export const experienceOptions: any = {
    1: "< 1 Year",
    2: "1-3 Years",
    3: "3-5 Years",
    4: "5+ Years",
};

export const defaultSections = [
    {
        header: "General Info",
        icon: "fa-solid fa-home",
        name: "General",
        component: "Generic",
        previewComponent: "General",
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
                type: "textarea",
                inputType: "",
                inputLabel: "Summary",
                required: false,
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
                required: false,
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
            schoolGpa: {
                type: "input",
                inputType: "text",
                inputLabel: "GPA",
                required: true,
            },
            startDate: {
                type: "date",
                inputType: "",
                inputLabel: "Start Date",
                required: true,
            },
            graduationDate: {
                type: "date",
                inputType: "",
                inputLabel: "Graduation Date",
                required: true,
            },
        },
        data: {
            firstName: "Hikmet Can",
            lastName: "Kufteoglu",
            title: "Frontend Developer",
            summary:
                "A passionate Frontend Developer who is keen to learn new technologies. Worked over 3 years in different scale of companies and developed big scaled projects. Open to new ideas and willing to use my skills combined with well-thought projects. Looking forward to taking my current skills to upper levels and benefit both myself and the company I am working.",
            portfolio: "https://hicaku.com",
            schoolStatus: true,
            schoolName: "Istanbul Technical University",
            schoolDepartmant: "Mathematics Engineering",
            schoolGpa: "2.97",
            startDate: { month: 5, year: 2016 },
            graduationDate: { month: 0, year: 2021 },
        },
        isHidden: false,
    },
    {
        header: "Contact Info",
        icon: "fa-solid fa-envelope",
        name: "Contact",
        component: "Generic",
        previewComponent: null,
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
                required: false,
            },
            address: {
                type: "input",
                inputType: "text",
                inputLabel: "Address",
                required: false,
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
            email: "hikmet.kufteoglu(at)gmail.com",
            phone: "",
            address: "",
            github: "github.com/Spencehiko",
            linkedin: "linkedin.com/in/hicaku/",
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
        previewComponent: "Personal",
        buttons: ["edit"],
        inputs: {
            dateOfBirth: {
                type: "date",
                inputType: "",
                inputLabel: "Date of Birth",
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
            dateOfBirth: null,
            gender: "",
            pronoun: "",
            hobbies: "",
        },
        isHidden: true,
    },
    {
        header: "Work Experience",
        icon: "fa-solid fa-briefcase",
        name: "Experience",
        component: "Experience",
        previewComponent: "Experience",
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
                type: "date",
                inputType: "",
                inputLabel: "Start Date",
                required: true,
            },
            endDate: {
                type: "date",
                inputType: "",
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
                type: "textarea",
                inputType: "",
                inputLabel: "Summary",
                required: true,
            },
            isStillWorkingHere: {
                type: "input",
                inputType: "checkbox",
                inputLabel: "Are you still working here?",
                required: false,
            },
        },
        data: [
            {
                companyName: "GoArt Metaverse",
                title: "Frontend Developer",
                startDate: { month: 0, year: 2023 },
                endDate: null,
                companyLocation: "Remote/Turkey",
                companyWebsite: "https://www.goartmetaverse.com/",
                workStyle: "fulltime",
                summary: "-",
                isStillWorkingHere: true,
            },
            {
                companyName: "Huawei",
                title: "Frontend Developer",
                startDate: { month: 0, year: 2021 },
                endDate: { month: 11, year: 2022 },
                companyLocation: "Remote/Turkey",
                companyWebsite: "https://huawei.com/",
                workStyle: "fulltime",
                summary:
                    "I worked in Huawei as a frontend Developer. We developed several tools for Petal Maps. Although we had a small team of developers, we managed to overcome tough obstacles on our way. I won a Future Star Award at the end of 2021.",
                isStillWorkingHere: false,
            },
            {
                companyName: "Firmasoft",
                title: "Junior Full Stack Developer",
                startDate: { month: 11, year: 2018 },
                endDate: { month: 4, year: 2021 },
                companyLocation: "",
                companyWebsite: "http://firmasoft.com/",
                workStyle: "parttime",
                summary:
                    "In Firmasoft, the aim was to build CMSs,websites and mobile apps for our clients. I developed many websites and CMSs with our small team. I worked full-time on holidays and part-time on the rest.",
                isStillWorkingHere: false,
            },
            {
                companyName: "Datapare",
                title: "Junior Frontend Developer",
                startDate: { month: 5, year: 2018 },
                endDate: { month: 10, year: 2018 },
                companyLocation: "Istanbul/Turkey",
                companyWebsite: "",
                workStyle: "parttime",
                summary: "I learnt basics of web development and working in a fast paced, agile team. It was a startup and I worked fulltime on holidays and part-time on the rest.",
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
        previewComponent: "Skill",
        buttons: ["add"],
        inputs: {
            name: {
                type: "input",
                inputType: "text",
                inputLabel: "Skill Name",
                required: true,
            },
            skill: {
                type: "range",
                inputType: "",
                inputLabel: "Skill Points (out of 10)",
                required: true,
            },
            experience: {
                type: "input",
                inputType: "select",
                inputLabel: "Experience",
                inputOptions: experienceOptions,
                required: true,
            },
            summary: {
                type: "textarea",
                inputType: "",
                inputLabel: "Summary",
                required: true,
            },
        },
        data: [
            {
                name: "Vue.js",
                skill: 7,
                experience: 2,
                summary:
                    "I have been working with Vue.js for my current company and also I am developing personal apps to improve myself. At work we use Vue 2 with Vuex and in my personal projects I use Vue 3 (Composition API) with Pinia.",
            },
            {
                name: "TypeScript",
                skill: 6,
                experience: 2,
                summary: "While using Vue.js I used TypeScript alongside and I have built global scale projects with it in my previous job experiences.",
            },
            {
                name: "JavaScript",
                skill: 8,
                experience: 3,
                summary: "For over 4 years, I have been working on this subject and I have built global scale projects with it in my previous job experiences.",
            },
            {
                name: "HTML/CSS",
                skill: 9,
                experience: 3,
                summary:
                    "For many years, I have worked with HTML and CSS. I have a really good understanding of the correlation between them and I can code a design for the web page easily. I worked with CSS Preprocessors like LESS and SCSS as well.",
            },
            {
                name: "Tailwind CSS",
                skill: 6,
                experience: 1,
                summary: "Almost for a year, I am using Tailwind CSS in my personal projects and I have built several apps with it.",
            },
            {
                name: "React.js",
                skill: 3,
                experience: 1,
                summary: "I used React.js for a short time in a company and I am trying to learn React.js on my own. Following a lecture from Udemy to improve my skills.",
            },
            {
                name: "GitHub",
                skill: 6,
                experience: 2,
                summary: "I have the knowledge of Git commands. I have been using Sourcetree to visualize these actions, but I can use them on command line as well.",
            },
            {
                name: "PHP & MySQL",
                skill: 7,
                experience: 2,
                summary:
                    "I have worked with PHP and MySQL for over 2 years and I have built several CMSs with it. I am familiar with OOP and API structures of PHP. Also I have the knowledge of queries and data management in MySQL ",
            },
            {
                name: "Testing Tools",
                skill: 4,
                experience: 1,
                summary: "I used Jest for unit testing and Cypress for end-to-end testing. I have the basic knowledge of them.",
            },
        ],
        isHidden: false,
    },
    {
        header: "Languages",
        icon: "fa-solid fa-language",
        name: "Language",
        component: "Language",
        previewComponent: "Language",
        buttons: ["add"],
        inputs: {
            name: {
                type: "input",
                inputType: "text",
                inputLabel: "Language",
                required: true,
            },
            skill: {
                type: "range",
                inputType: "",
                inputLabel: "Language Proficiency (out of 10)",
                required: true,
            },
        },
        data: [
            {
                name: "Turkish",
                skill: 10,
            },
            {
                name: "English",
                skill: 9,
            },
            {
                name: "Chinese",
                skill: 3,
            },
        ],
        isHidden: false,
    },
    {
        header: "Projects",
        icon: "fa-solid fa-folder",
        name: "Project",
        component: "Project",
        previewComponent: "Project",
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
                name: "CV Generator",
                link: "https://cv.hicaku.com/",
            },
            {
                name: "Infinite Wordle",
                link: "https://wordle.hicaku.com/",
            },
            {
                name: "Hikotify",
                link: "https://hikotify.hicaku.com/",
            },
            {
                name: "Solitaire",
                link: "https://solitaire.hicaku.com/",
            },
            {
                name: "Last 6000 Earthquakes Map",
                link: "https://earthquakes.hicaku.com/",
            },
            {
                name: "Tic Tac Toe",
                link: "https://tictactoe.hicaku.com/",
            },
            {
                name: "Pixselect Case Study",
                link: "https://pixcase.hicaku.com/",
            },
            {
                name: "Hibu",
                link: "https://hibu.hicaku.com/",
            },
            {
                name: "Calculator",
                link: "https://calculator.hicaku.com/",
            },
        ],
        isHidden: true,
    },
    {
        header: "Certificates",
        icon: "fa-solid fa-certificate",
        name: "Certificate",
        component: "Certificate",
        previewComponent: "Certificate",
        buttons: ["add"],
        inputs: {
            givenBy: {
                type: "input",
                inputType: "text",
                inputLabel: "Given By",
                required: true,
            },
            name: {
                type: "input",
                inputType: "text",
                inputLabel: "Certificate Name",
                required: true,
            },
            date: {
                type: "date",
                inputType: "",
                inputLabel: "Given Date",
                required: true,
            },
            id: {
                type: "input",
                inputType: "text",
                inputLabel: "Certificate ID",
                required: false,
            },
            link: {
                type: "input",
                inputType: "text",
                inputLabel: "Certificate Link",
                required: false,
            },
        },
        data: [
            {
                givenBy: "First Company",
                name: "Great Certificate",
                date: { month: 8, year: 2020 },
                id: "",
                link: "https://somelink.com/",
            },
            {
                givenBy: "Second Company",
                name: "Greater Certificate",
                date: { month: 3, year: 2021 },
                id: "",
                link: "",
            },
        ],
        isHidden: true,
    },
    {
        header: "References",
        icon: "fa-solid fa-user-tie",
        name: "Reference",
        component: "Reference",
        previewComponent: "Reference",
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
                required: true,
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
                name: "Salih Kesepara",
                companyName: "Huawei",
                title: "Frontend Team Lead",
                email: "salih.kesepara(at)huawei.com",
                phone: "",
            },
            {
                name: "Mustafa Tunç",
                companyName: "Firmasoft",
                title: "CEO and Founder",
                email: "mustafatunc(at)firmasoft.com",
                phone: "",
            },
            {
                name: "Serkan Uz",
                companyName: "Datapare",
                title: "CEO and Founder",
                email: "serkanuz(at)datapare.com",
                phone: "",
            },
        ],
        isHidden: false,
    },
] as Array<Section>;

export const themes = {
    basic: {
        name: "Basic",
        type: "light",
        photoPath: "basic.png",
        hasPhotoArea: false,
    },
    dark: {
        name: "Dark",
        type: "dark",
        photoPath: "basic.png",
        hasPhotoArea: false,
    },
    simple: {
        name: "Simple",
        type: "light",
        photoPath: "basic.png",
        hasPhotoArea: false,
    },
    simpleDark: {
        name: "Simple Dark",
        type: "dark",
        photoPath: "basic.png",
        hasPhotoArea: false,
    },
} as any;

export const useMainStore = defineStore({
    id: "store",
    state: () => ({
        activeHeader: "edit" as "edit" | "preview",
        sections: [] as Array<Section>,
        scrollPosition: 0 as number,
        activeTheme: "basic" as String,
        // edit section
        activeSectionIndex: -1 as number,
        activeSectionData: [] as Array<any>,
        // edit data
        activeDataSectionIndex: -1 as number,
        activeDataIndex: -1 as number,
        activeData: [] as Array<any>,
        // add data
        activeAddSectionIndex: -1 as number,
        activeAddData: [] as Array<any>,
        // delete data
        activeDeleteSectionIndex: -1 as number,
        activeDeleteDataIndex: -1 as number,
    }),
    getters: {},
    actions: {
        setDefaultSections() {
            this.sections = JSON.parse(JSON.stringify(defaultSections));
        },
        // Header Button Actions
        exportCV() {
            window.print();
        },
        // Scroll
        scrollToPosition() {
            setTimeout(() => {
                window.scrollTo(0, this.scrollPosition);
            }, 0);
        },
        // Edit Section
        openEditSectionDialog(index: number) {
            this.scrollPosition = window.scrollY;
            this.activeSectionData = JSON.parse(JSON.stringify(this.sections[index].data));
            this.activeSectionIndex = index;
        },
        saveChanges() {
            this.sections[this.activeSectionIndex].data = this.activeSectionData;
            this.activeSectionData = [];
            this.activeSectionIndex = -1;
            this.scrollToPosition();
        },
        closeEditSectionDialog() {
            this.activeSectionData = [];
            this.activeSectionIndex = -1;
            this.scrollToPosition();
        },
        toggleHideSection(index: number) {
            this.sections[index].isHidden = !this.sections[index].isHidden;
        },
        // Edit Data
        openEditDataDialog(sectionIndex: number, index: number) {
            this.scrollPosition = window.scrollY;
            this.activeDataSectionIndex = sectionIndex;
            this.activeDataIndex = index;
            this.activeData = JSON.parse(JSON.stringify(this.sections[sectionIndex].data[index]));
        },
        saveChangesOnData() {
            this.sections[this.activeDataSectionIndex].data[this.activeDataIndex] = this.activeData;
            this.activeDataSectionIndex = -1;
            this.activeDataIndex = -1;
            this.activeData = [];
            this.scrollToPosition();
        },
        closeEditDataDialog() {
            this.activeDataSectionIndex = -1;
            this.activeDataIndex = -1;
            this.activeData = [];
            this.scrollToPosition();
        },
        // Delete Data
        deleteData(sectionIndex: number, index: number) {
            this.sections[sectionIndex].data.splice(index, 1);
        },
        // Add Data,
        openAddDialog(sectionIndex: number) {
            this.scrollPosition = window.scrollY;
            this.activeAddSectionIndex = sectionIndex;
        },
        addData() {
            this.sections[this.activeAddSectionIndex].data.push(Object.assign({}, this.activeAddData));
            this.closeAddDialog();
        },
        closeAddDialog() {
            this.activeAddSectionIndex = -1;
            this.activeAddData = [];
            this.scrollToPosition();
        },
        // Table Button Actions
        moveUpData(sectionIndex: number, index: number) {
            [this.sections[sectionIndex].data[index], this.sections[sectionIndex].data[index - 1]] = [this.sections[sectionIndex].data[index - 1], this.sections[sectionIndex].data[index]];
        },
        moveDownData(sectionIndex: number, index: number) {
            [this.sections[sectionIndex].data[index], this.sections[sectionIndex].data[index + 1]] = [this.sections[sectionIndex].data[index + 1], this.sections[sectionIndex].data[index]];
        },
    },
    persist: true,
});
