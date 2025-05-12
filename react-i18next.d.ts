import "react-i18next";
import addCourse from "./src/i18n/locales/pt/addCourse.json";
import common from "./src/i18n/locales/pt/common.json";

declare module "react-i18next" {
  interface Resources {
    common: typeof common;
    addCourse: typeof addCourse;
  }
}
