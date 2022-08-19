import App from "@/app.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas, faDownload, faLink } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faTwitter,
  faItchIo,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import FontAwesomeIcon from "@/components/FontAwesomeIcon.vue";

library.add(
  fas,
  faDownload,
  faTwitter,
  faInstagram,
  faItchIo,
  faGithub,
  faLinkedin,
  faLink
);

export default FontAwesomeIcon;
