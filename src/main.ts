import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import App from "./App.vue";

import "./index.css";

/*  Font Awesome    */
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faIdBadge, faBriefcase, faPhone, faEnvelope, faLocationDot, faHouse, faFileExport, faRotateLeft, faVenusMars } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faFacebook, faInstagram, faLinkedin, faGithub, faDiscord, faYoutube } from "@fortawesome/free-brands-svg-icons";

library.add(
    // Solid
    faIdBadge,
    faBriefcase,
    faPhone,
    faEnvelope,
    faLocationDot,
    faHouse,
    faFileExport,
    faRotateLeft,
    faVenusMars,
    // Brands
    faTwitter,
    faFacebook,
    faInstagram,
    faLinkedin,
    faGithub,
    faDiscord,
    faYoutube
);
/*  Font Awesome    */

const app = createApp(App).component("font-awesome-icon", FontAwesomeIcon);
const pinia = createPinia();

pinia.use(piniaPluginPersistedstate);
app.use(pinia);

app.mount("#app");
