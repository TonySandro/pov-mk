import "react-i18next";
import addCourse from "./i18n/locales/pt/addCourse.json";
import common from "./i18n/locales/pt/common.json";
import adminPage from "./i18n/locales/pt/adminPage.json";

declare module "react-i18next" {
  interface Resources {
    common: typeof common;
    addCourse: typeof addCourse;
    adminPage: typeof adminPage;
  }
}
