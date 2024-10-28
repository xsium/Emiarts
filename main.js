import { moduleFooter } from "./scripts/footer";
import { moduleHeaderEC } from "./scripts/headerEC";
import { moduleHeaderEP } from "./scripts/headerEP";
import "./style.css";

console.log(document.getElementById("headEC"));
if (document.getElementById("headEC")) {
  moduleHeaderEC();
}
if (document.getElementsByTagName("headEP")) {
  moduleHeaderEP();
}

if (document.getElementsByTagName("footer")) {
  moduleFooter();
}
