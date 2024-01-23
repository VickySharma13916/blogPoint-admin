import { combineReducers } from "redux";

import accountReducer from "./accountReducer";
import alertReducer from "./alertReducer";
import authReducer from "./authReducer";
import blogReducer from "./blogReducer";
import caseStudiesReducer from "./caseStudiesReducer";
import userReducer from "./userReducer";
import homepageReducer from "./homepageReducer";
import whitepaperReducer from "./whitepaperReducer";
import NewsletterReducer from "./newsletterReducer";
import aboutReducer from "./aboutReducer";
import courseReducer from "./courseReducer";
import webinarReducer from "./webinarReducer";
import WorkshopReducer from "./workshopReducer";
import carrerReducer from "./carrerReducer";
import requestReducer from "./requestProposalReducer";
import categoryReducer from "./categoryReducer";
import ContactReducer from "./contactReducer";
import HeaderAddReducer from "./headerReducer";
import seoDataReducer from "./seodataReducer";
import subscriptionReducer from "./newsletterSubscriptionReducer";
import announcementReducer from "./announcementReducer";
import pressReleaseReducer from "./pressReleaseReducer";
import footerReducer from "./footerReducer";
import headerReducer from "./headerlinkReducer";
import mediaReducer from "./mediaReducer";
import eventConferenceReducer from "./eventConferenceReducer";
import webinarConferenceReducer from "./webinarConferenceReducer";
import inputCategoryReducer from "./inputCategoryReducer";
import dynamicFormReducer from "./dynamicFormReducer";
import DynamicRegisterFormReducer from "./dynamicRegisterReducer";
import serviceReducer from "./serviceReducer";

export default combineReducers({
  auth: authReducer,
  alert: alertReducer,
  about: aboutReducer,
  blog: blogReducer,
  account: accountReducer,
  course: courseReducer,
  user: userReducer,
  caseStudies: caseStudiesReducer,
  category: categoryReducer,
  carrer: carrerReducer,
  homepage: homepageReducer,
  request: requestReducer,
  whitepaper: whitepaperReducer,
  newsletter: NewsletterReducer,
  webinar: webinarReducer,
  workshop: WorkshopReducer,
  contact: ContactReducer,
  headerAdd: HeaderAddReducer,
  seodata: seoDataReducer,
  subscription: subscriptionReducer,
  announcement: announcementReducer,
  pressRelease: pressReleaseReducer,
  footer: footerReducer,
  header: headerReducer,
  media: mediaReducer,
  eventConference: eventConferenceReducer,
  webinarConference: webinarConferenceReducer,
  inputCategory: inputCategoryReducer,
  dynamicForm: dynamicFormReducer,
  dynamicRegister: DynamicRegisterFormReducer,
  service: serviceReducer,
});
