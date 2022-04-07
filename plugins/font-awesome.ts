import App from "@/app.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faTwitter,
  faItchIo,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import FontAwesomeIcon from "@/components/FontAwesomeIcon.vue";

library.add(fas, faTwitter, faInstagram, faItchIo, faGithub);

//App.component("fa", FontAwesomeIcon);

export default FontAwesomeIcon;
