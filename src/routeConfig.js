import { get } from "lodash-es";
import paths from "path";
import React from "react";
import { hierarchize } from "./utils/hierarchical";

const keyName = "key";
const pathName = "path";
const uniqueKeyName = "uniqueKey";

function pathGenerator(node, parent) {
  const parentUniqueKey = get(parent, uniqueKeyName);
  const uniqueKey = parentUniqueKey
    ? parentUniqueKey + "." + node[keyName]
    : node[keyName];
  const parentPath = get(parent, pathName, "");
  const path = get(node, pathName, paths.join(parentPath, node[keyName]));
  node[uniqueKeyName] = uniqueKey;
  node[pathName] = path;
}

const routeConfig = hierarchize(
  {
    key: "dashboard",
    name: "Dashboard",
    path: "/",
    exact: true,
    component: React.lazy(() => import("./containers/Dashboard")),
    children: [
      {
        key: "login",
        name: "Login",
        isPublic: true,
        isHidden: true,
        exact: true,
        component: React.lazy(() => import("./containers/Auth/Login/index")),
        validateRole: false,
      },
      {
        key: "signup",
        name: "SignUp",
        isPublic: true,
        isHidden: true,
        exact: true,
        component: React.lazy(() => import("./containers/Auth/SignUp")),
        validateRole: false,
      },
      {
        key: "emailverification/token=:invitetoken",
        name: "Emailverification",
        isPublic: true,
        isHidden: true,
        component: React.lazy(() =>
          import("./containers/Auth/InviteAdmin/index")
        ),
        exact: true,
        validateRole: false,
      },
      {
        key: "forgot-password",
        name: "Forgot Password",
        isPublic: true,
        isHidden: true,
        exact: true,
        component: React.lazy(() => import("./containers/Auth/ForgotPassword")),
        validateRole: false,
      },
      {
        key: "reset-password/:id/:resetPasswordToken",
        name: "Reset Password",
        isPublic: true,
        isHidden: true,
        exact: true,
        component: React.lazy(() => import("./containers/Auth/ResetPassword")),
        validateRole: false,
      },
      {
        key: "dashboard",
        name: "Dashboard",
        exact: true,
        component: React.lazy(() => import("./containers/Dashboard")),
        validateRole: false,
      },
      {
        key: "dynamicForm",
        name: "Dynamic Form",
        exact: true,
        component: React.lazy(() => import("./containers/DynamicForm")),
        validateRole: false,
        children: [
          {
            key: "addDynamicForm",
            name: "Dynamic Form",
            isHidden: true,
            component: React.lazy(() =>
              import("./partials/DynamicForm/AddDynamicForm")
            ),
            validateRole: false,
            exact: true,
          },
          {
            key: "viewDynamicForm",
            name: "Dynamic Form",
            isHidden: true,
            component: React.lazy(() => import("./components/InputShow")),
            validateRole: false,
            exact: true,
          },
          {
            key: ":id/edit",
            name: "Dynamic Form",
            isHidden: true,
            component: React.lazy(() =>
              import("./partials/DynamicForm/EditDynamicForm")
            ),
            validateRole: false,
            exact: true,
          },
        ],
      },
      {
        key: "media",
        name: "Media",
        exact: true,
        component: React.lazy(() => import("./containers/Media")),
        validateRole: false,
        children: [
          {
            key: "addMedia",
            name: "Media",
            isHidden: true,
            component: React.lazy(() => import("./partials/Media/AddMedia")),
            validateRole: false,
            exact: true,
          },
        ],
      },
      {
        key: "admin",
        name: "Admin",
        exact: true,
        component: React.lazy(() => import("./containers/Admin")),
        validateRole: false,
        children: [
          {
            key: "addAdmin",
            name: "Admin",
            isHidden: true,
            component: React.lazy(() => import("./partials/Admin/AddAdmin")),
            validateRole: false,
            exact: true,
          },
          {
            key: ":id/edit",
            name: "Admin",
            isHidden: true,
            component: React.lazy(() => import("./partials/Admin/EditAdmin")),
            validateRole: false,
            exact: true,
          },
          {
            key: ":id/change-password",
            name: "Admin",
            isHidden: true,
            component: React.lazy(() =>
              import("./partials/Admin/changePassword")
            ),
            validateRole: false,
            exact: true,
          },
        ],
      },
      {
        key: "account",
        name: "Account",
        isHidden: true,
        component: React.lazy(() => import("./containers/Account")),
        validateRole: false,
        exact: true,
        children: [
          {
            key: "edit",
            name: "Account",
            isHidden: true,
            component: React.lazy(() =>
              import("./partials/Account/EditProfile")
            ),
            validateRole: false,
            exact: true,
          },
          {
            key: "change-password",
            name: "Account",
            isHidden: true,
            component: React.lazy(() =>
              import("./partials/Account/ChangePassword")
            ),
            validateRole: false,
            exact: true,
          },
        ],
      },
      {
        key: "user",
        name: "User",
        isHidden: true,
        exact: true,
        component: React.lazy(() => import("./containers/User")),
        children: [
          {
            key: "adduser",
            name: "User",
            isHidden: true,
            component: React.lazy(() => import("./partials/User/AddUser")),
            validateRole: false,
            exact: true,
          },
          {
            key: ":id/edit",
            name: "User",
            isHidden: true,
            component: React.lazy(() => import("./partials/User/EditUser")),
            validateRole: false,
            exact: true,
          },
        ],
        validateRole: false,
      },
      {
        key: "announcement",
        name: "Announcement",
        isHidden: true,
        exact: true,
        component: React.lazy(() => import("./containers/Announcement")),
        children: [
          {
            key: "addAnnouncement",
            name: "Announcement",
            isHidden: true,
            component: React.lazy(() =>
              import("./partials/Annoucement/AddAnnouncement")
            ),
            validateRole: false,
            exact: true,
          },
          {
            key: ":id/edit",
            name: "Announcement",
            isHidden: true,
            component: React.lazy(() =>
              import("./partials/Annoucement/EditAnnouncement")
            ),
            validateRole: false,
            exact: true,
          },
        ],
        validateRole: false,
      },
      {
        key: "pressRelease",
        name: "Press Release",
        isHidden: true,
        exact: true,
        component: React.lazy(() => import("./containers/pressRelease")),
        children: [
          {
            key: "addPressRelease",
            name: "Press Release",
            isHidden: true,
            component: React.lazy(() =>
              import("./partials/pressRelease/AddPressRelease")
            ),
            validateRole: false,
            exact: true,
          },
          {
            key: ":id/edit",
            name: "Press Release",
            isHidden: true,
            component: React.lazy(() =>
              import("./partials/pressRelease/EditPressRelease")
            ),
            validateRole: false,
            exact: true,
          },
        ],
        validateRole: false,
      },
      {
        key: "seodata",
        name: "SEO Data",
        isHidden: true,
        exact: true,
        component: React.lazy(() => import("./containers/seodata")),
        children: [
          {
            key: "addSeoData",
            name: "SEO Data",
            isHidden: true,
            component: React.lazy(() =>
              import("./partials/seodata/AddSeodata")
            ),
            validateRole: false,
            exact: true,
          },
          {
            key: ":id/edit",
            name: "SEO Data",
            isHidden: true,
            component: React.lazy(() =>
              import("./partials/seodata/EditSeodata")
            ),
            validateRole: false,
            exact: true,
          },
        ],
        validateRole: false,
      },
      {
        key: "footer",
        name: "Footer",
        isHidden: true,
        exact: true,
        component: React.lazy(() => import("./containers/Footer")),
        children: [
          {
            key: "AddFooter",
            name: "Footer",
            isHidden: true,
            component: React.lazy(() => import("./partials/Footer/AddFooter")),
            validateRole: false,
            exact: true,
          },
          {
            key: ":id/edit",
            name: "Footer",
            isHidden: true,
            component: React.lazy(() => import("./partials/Footer/EditFooter")),
            validateRole: false,
            exact: true,
          },
        ],
        validateRole: false,
      },
      {
        key: "service",
        name: "service",
        isHidden: true,
        exact: true,
        component: React.lazy(() => import("./containers/service")),
        children: [
          {
            key: "Addservice",
            name: "service",
            isHidden: true,
            component: React.lazy(() =>
              import("./partials/Service/AddService")
            ),
            validateRole: false,
            exact: true,
          },
          {
            key: ":id/edit",
            name: "service",
            isHidden: true,
            component: React.lazy(() =>
              import("./partials/Service/EditService")
            ),
            validateRole: false,
            exact: true,
          },
        ],
        validateRole: false,
      },
      {
        key: "headerAdd",
        name: "HederAdd",
        isHidden: true,
        exact: true,
        component: React.lazy(() => import("./containers/HeaderAdd")),
        children: [
          {
            key: "AddHeaderAdd",
            name: "HederAdd",
            isHidden: true,
            component: React.lazy(() =>
              import("./partials/HeaderAdd/AddHeaderAdd")
            ),
            validateRole: false,
            exact: true,
          },
          {
            key: ":id/edit",
            name: "HederAdd",
            isHidden: true,
            component: React.lazy(() =>
              import("./partials/HeaderAdd/EditHeaderAdd")
            ),
            validateRole: false,
            exact: true,
          },
        ],
        validateRole: false,
      },
      {
        key: "header",
        name: "Header",
        isHidden: true,
        exact: true,
        component: React.lazy(() => import("./containers/Header")),
        children: [
          {
            key: "AddHeader",
            name: "Header",
            isHidden: true,
            component: React.lazy(() => import("./partials/Header/AddHeader")),
            validateRole: false,
            exact: true,
          },
          {
            key: ":id/edit",
            name: "Header",
            isHidden: true,
            component: React.lazy(() => import("./partials/Header/Editheader")),
            validateRole: false,
            exact: true,
          },
        ],
        validateRole: false,
      },
      {
        key: "inputCategory",
        name: "Input Category",
        isHidden: true,
        exact: true,
        component: React.lazy(() => import("./containers/InputCategory")),
        children: [
          {
            key: "AddInputCategory",
            name: "Input Category",
            isHidden: true,
            component: React.lazy(() =>
              import("./partials/inputCategory/AddInputCategory")
            ),
            validateRole: false,
            exact: true,
          },
          {
            key: ":id/edit",
            name: "Input Category",
            isHidden: true,
            component: React.lazy(() =>
              import("./partials/inputCategory/EditInputCategory")
            ),
            validateRole: false,
            exact: true,
          },
        ],
        validateRole: false,
      },
      {
        key: "post",
        name: "POST",
        isHidden: true,
        exact: true,
        component: React.lazy(() => import("./containers/post")),
        children: [
          {
            key: "whitepapers",
            name: "Whitepapers",
            exact: true,
            isHidden: true,
            component: React.lazy(() => import("./containers/Whitepapers")),
            validateRole: false,
            children: [
              {
                key: "addwhitepaper",
                name: "Whitepapers",
                isHidden: true,
                component: React.lazy(() =>
                  import("./partials/Post/Whitepaper/AddWhitepaper")
                ),
                validateRole: false,
                exact: true,
              },
              {
                key: ":id/edit",
                name: "Whitepapers",
                isHidden: true,
                component: React.lazy(() =>
                  import("./partials/Post/Whitepaper/EditWhitepaper")
                ),
                validateRole: false,
                exact: true,
              },
            ],
          },
          {
            key: "casestudies",
            name: "Case Studies",
            isHidden: true,
            exact: true,
            component: React.lazy(() => import("./containers/CaseStudies")),
            validateRole: false,
            children: [
              {
                key: "addCaseStudies",
                name: "Case Studies",
                isHidden: true,
                component: React.lazy(() =>
                  import("./partials/Post/CaseStudies/AddCaseStudies")
                ),
                validateRole: false,
                exact: true,
              },
              {
                key: ":id/edit",
                name: "Case Studies",
                isHidden: true,
                component: React.lazy(() =>
                  import("./partials/Post/CaseStudies/EditCaseStudies")
                ),
                validateRole: false,
                exact: true,
              },
            ],
          },
          {
            key: "newsletter",
            name: "Newsletter",
            isHidden: true,
            exact: true,
            component: React.lazy(() => import("./containers/Newsletter")),
            validateRole: false,
            children: [
              {
                key: "addNewsletter",
                name: "Newsletter",
                isHidden: true,
                component: React.lazy(() =>
                  import("./partials/Post/Newsletter/AddNewsletter")
                ),
                validateRole: false,
                exact: true,
              },
              {
                key: ":id/edit",
                name: "Newsletter",
                isHidden: true,
                component: React.lazy(() =>
                  import("./partials/Post/Newsletter/EditNewsletter")
                ),
                validateRole: false,
                exact: true,
              },
            ],
          },
          {
            key: "blogs",
            name: "Blogs",
            exact: true,
            isHidden: true,
            component: React.lazy(() => import("./containers/Blogs")),
            validateRole: false,
            children: [
              {
                key: "addblogs",
                name: "Blogs",
                isHidden: true,
                component: React.lazy(() =>
                  import("./partials/Post/Blogs/AddBlogs")
                ),
                validateRole: false,
                exact: true,
              },
              {
                key: ":id/edit",
                name: "Blogs",
                isHidden: true,
                component: React.lazy(() =>
                  import("./partials/Post/Blogs/EditBlogs")
                ),
                validateRole: false,
                exact: true,
              },
            ],
          },
        ],
        validateRole: false,
      },
      {
        key: "form",
        name: "Forms",
        isHidden: true,
        exact: true,
        component: React.lazy(() => import("./containers/Forms")),
        children: [
          {
            key: "whitepapers",
            name: "Whitepapers",
            exact: true,
            isHidden: true,
            component: React.lazy(() =>
              import("./partials/Forms/whitepaper/ListWhitepaper")
            ),
            validateRole: false,
            children: [
              {
                key: "userDetail",
                name: "Whitepapers",
                isHidden: true,
                component: React.lazy(() =>
                  import("./partials/Forms/whitepaper/ViewUserDetailWhitepaper")
                ),
                validateRole: false,
                exact: true,
              },
            ],
          },
          {
            key: "newsletter",
            name: "Newsletter",
            exact: true,
            isHidden: true,
            component: React.lazy(() =>
              import("./partials/Forms/Newsletter/ListNewsletter")
            ),
            validateRole: false,
            children: [
              {
                key: "userDetail",
                name: "Newsletter",
                isHidden: true,
                component: React.lazy(() =>
                  import("./partials/Forms/Newsletter/viewUserDetail")
                ),
                validateRole: false,
                exact: true,
              },
            ],
          },
          {
            key: "carrer",
            name: "Carrer",
            exact: true,
            isHidden: true,
            component: React.lazy(() =>
              import("./partials/Forms/Carrer/ListCarrer")
            ),
            validateRole: false,
            children: [
              {
                key: "userDetail",
                name: "Carrer",
                isHidden: true,
                component: React.lazy(() =>
                  import("./partials/Forms/Carrer/ViewUserDetail")
                ),
                validateRole: false,
                exact: true,
              },
            ],
          },
          {
            key: "CaseStudies",
            name: "CaseStudies",
            exact: true,
            isHidden: true,
            component: React.lazy(() =>
              import("./partials/Forms/CaseStudies/ListCaseStudies")
            ),
            validateRole: false,
            children: [
              {
                key: "userDetail",
                name: "CaseStudies",
                isHidden: true,
                component: React.lazy(() =>
                  import("./partials/Forms/CaseStudies/ViewUserDetail")
                ),
                validateRole: false,
                exact: true,
              },
            ],
          },
          {
            key: "dynamicRegister",
            name: "Dynamic Register",
            exact: true,
            isHidden: true,
            component: React.lazy(() =>
              import("./partials/Forms/DynamicRegister/ListDynamicRegister")
            ),
            validateRole: false,
          },
          {
            key: "contact",
            name: "Contact",
            exact: true,
            isHidden: true,
            component: React.lazy(() =>
              import("./partials/Forms/Contact/ListContact")
            ),
            validateRole: false,
          },
          {
            key: "newsletter-Subscription",
            name: "Newsletter Subscription",
            exact: true,
            isHidden: true,
            component: React.lazy(() =>
              import(
                "./partials/Forms/NewsletterSubscription/ListNewsLetterSubscription"
              )
            ),
            validateRole: false,
          },
          {
            key: "requestProposal",
            name: "Request Proposal",
            exact: true,
            isHidden: true,
            component: React.lazy(() => import("./containers/RequestProposal")),
            validateRole: false,
          },
        ],
        validateRole: false,
      },
      {
        key: "page",
        name: "Page",
        exact: true,
        isHidden: true,
        component: React.lazy(() => import("./containers/Page")),
        validateRole: false,
        children: [
          {
            key: "courses",
            name: "Courses",
            isHidden: true,
            exact: true,
            component: React.lazy(() => import("./containers/Courses")),
            validateRole: false,
            children: [
              {
                key: "addcourses",
                name: "Courses",
                isHidden: true,
                component: React.lazy(() =>
                  import("./partials/Page/Courses/AddCourses")
                ),
                validateRole: false,
                exact: true,
              },
              {
                key: ":id/edit",
                name: "Courses",
                isHidden: true,
                component: React.lazy(() =>
                  import("./partials/Page/Courses/EditCourses")
                ),
                validateRole: false,
                exact: true,
              },
              {
                key: ":id/viewCourse",
                name: "Courses",
                isHidden: true,
                component: React.lazy(() =>
                  import("./partials/Page/Courses/coursetab/viewCourse")
                ),
                validateRole: false,
                exact: true,
              },
              {
                key: ":id/viewCourse/addAccordionCourse",
                name: "Courses",
                isHidden: true,
                component: React.lazy(() =>
                  import(
                    "./partials/Page/Courses/coursetab/accordionSection/AddAccordion"
                  )
                ),
                validateRole: false,
                exact: true,
              },
              {
                key: ":id/viewCourse/addTrainerProfile",
                name: "Courses",
                isHidden: true,
                component: React.lazy(() =>
                  import(
                    "./partials/Page/Courses/coursetab/trainingProfile/AddTrainingProfile"
                  )
                ),
                validateRole: false,
                exact: true,
              },
              {
                key: ":id/viewCourse/addTestimonial",
                name: "Courses",
                isHidden: true,
                component: React.lazy(() =>
                  import(
                    "./partials/Page/Courses/coursetab/testimonial/AddTestimonial"
                  )
                ),
                validateRole: false,
                exact: true,
              },
              {
                key: ":id/viewCourse/addJoinImageSlider",
                name: "Courses",
                isHidden: true,
                component: React.lazy(() =>
                  import(
                    "./partials/Page/Courses/coursetab/courseJoinImageSlider/AddJoinImageSlider"
                  )
                ),
                validateRole: false,
                exact: true,
              },
              {
                key: ":id/viewCourse/addOtherLink",
                name: "Courses",
                isHidden: true,
                component: React.lazy(() =>
                  import(
                    "./partials/Page/Courses/coursetab/courseOtherLink/AddOtherLink"
                  )
                ),
                validateRole: false,
                exact: true,
              },
              {
                key: ":id/viewCourse/addBriefAbout",
                name: "Courses",
                isHidden: true,
                component: React.lazy(() =>
                  import(
                    "./partials/Page/Courses/coursetab/briefAbout/AddBriefAbout"
                  )
                ),
                validateRole: false,
                exact: true,
              },
              {
                key: ":id/viewCourse/:id/editAccordionCourse",
                name: "Courses",
                isHidden: true,
                component: React.lazy(() =>
                  import(
                    "./partials/Page/Courses/coursetab/accordionSection/EditAccordion"
                  )
                ),
                validateRole: false,
                exact: true,
              },
              {
                key: ":id/viewCourse/:id/editTrainerProfile",
                name: "Courses",
                isHidden: true,
                component: React.lazy(() =>
                  import(
                    "./partials/Page/Courses/coursetab/trainingProfile/EditTrainingProfile"
                  )
                ),
                validateRole: false,
                exact: true,
              },
              {
                key: ":id/viewCourse/:id/editTestimonial",
                name: "Courses",
                isHidden: true,
                component: React.lazy(() =>
                  import(
                    "./partials/Page/Courses/coursetab/testimonial/EditTestimonial"
                  )
                ),
                validateRole: false,
                exact: true,
              },
              {
                key: ":id/viewCourse/:id/editJoinSlider",
                name: "Courses",
                isHidden: true,
                component: React.lazy(() =>
                  import(
                    "./partials/Page/Courses/coursetab/courseJoinImageSlider/EditJoinImageSlider"
                  )
                ),
                validateRole: false,
                exact: true,
              },
              {
                key: ":id/viewCourse/:id/editOtherCourseLink",
                name: "Courses",
                isHidden: true,
                component: React.lazy(() =>
                  import(
                    "./partials/Page/Courses/coursetab/courseOtherLink/EditOtherLink"
                  )
                ),
                validateRole: false,
                exact: true,
              },
              {
                key: ":id/viewCourse/:id/editBriefAbout",
                name: "Courses",
                isHidden: true,
                component: React.lazy(() =>
                  import(
                    "./partials/Page/Courses/coursetab/briefAbout/EditBriefAbout"
                  )
                ),
                validateRole: false,
                exact: true,
              },
            ],
          },
          {
            key: "webinars",
            name: "Webinar",
            exact: true,
            isHidden: true,
            component: React.lazy(() => import("./containers/Webinar")),
            validateRole: false,
            children: [
              {
                key: "addWebinar",
                name: "Webinar",
                isHidden: true,
                component: React.lazy(() =>
                  import("./partials/Page/Webinar/AddWebinar")
                ),
                validateRole: false,
                exact: true,
              },
              {
                key: ":id/edit",
                name: "Webinar",
                isHidden: true,
                component: React.lazy(() =>
                  import("./partials/Page/Webinar/EditWebinar")
                ),
                validateRole: false,
                exact: true,
              },
              {
                key: ":id/viewWebinar",
                name: "Webinar",
                isHidden: true,
                component: React.lazy(() =>
                  import("./partials/Page/Webinar/webinarTab/viewWebinar")
                ),
                validateRole: false,
                exact: true,
              },
              {
                key: ":id/viewWebinar/addAccordion",
                name: "Webinar",
                isHidden: true,
                component: React.lazy(() =>
                  import(
                    "./partials/Page/Webinar/webinarTab/AccordionSection/AddAccordion"
                  )
                ),
                validateRole: false,
                exact: true,
              },
              {
                key: ":id/viewWebinar/addBriefAbout",
                name: "Webinar",
                isHidden: true,
                component: React.lazy(() =>
                  import(
                    "./partials/Page/Webinar/webinarTab/briefAbout/AddBriefAbout"
                  )
                ),
                validateRole: false,
                exact: true,
              },
              {
                key: ":id/viewWebinar/addTestimonial",
                name: "Webinar",
                isHidden: true,
                component: React.lazy(() =>
                  import(
                    "./partials/Page/Webinar/webinarTab/testimonial/AddTestimonial"
                  )
                ),
                validateRole: false,
                exact: true,
              },
              {
                key: ":id/viewWebinar/addTrainerProfile",
                name: "Webinar",
                isHidden: true,
                component: React.lazy(() =>
                  import(
                    "./partials/Page/Webinar/webinarTab/trainerProfile/AddTrainerProfile"
                  )
                ),
                validateRole: false,
                exact: true,
              },
              {
                key: ":id/viewWebinar/addJoinImageSlider",
                name: "Webinar",
                isHidden: true,
                component: React.lazy(() =>
                  import(
                    "./partials/Page/Webinar/webinarTab/JoinImageSlider/AddJoinImageSlider"
                  )
                ),
                validateRole: false,
                exact: true,
              },
              {
                key: ":id/viewWebinar/addOtherLink",
                name: "Webinar",
                isHidden: true,
                component: React.lazy(() =>
                  import(
                    "./partials/Page/Webinar/webinarTab/webinarOtherLink/AddOtherLink"
                  )
                ),
                validateRole: false,
                exact: true,
              },
              {
                key: ":id/viewWebinar/:id/editAccordion",
                name: "Webinar",
                isHidden: true,
                component: React.lazy(() =>
                  import(
                    "./partials/Page/Webinar/webinarTab/AccordionSection/EditAccordion"
                  )
                ),
                validateRole: false,
                exact: true,
              },
              {
                key: ":id/viewWebinar/:id/editBriefAbout",
                name: "Webinar",
                isHidden: true,
                component: React.lazy(() =>
                  import(
                    "./partials/Page/Webinar/webinarTab/briefAbout/EditBriefAbout"
                  )
                ),
                validateRole: false,
                exact: true,
              },
              {
                key: ":id/viewWebinar/:id/editTrainerProfile",
                name: "Webinar",
                isHidden: true,
                component: React.lazy(() =>
                  import(
                    "./partials/Page/Webinar/webinarTab/trainerProfile/EditTrainerProfile"
                  )
                ),
                validateRole: false,
                exact: true,
              },
              {
                key: ":id/viewWebinar/:id/editOtherLink",
                name: "Webinar",
                isHidden: true,
                component: React.lazy(() =>
                  import(
                    "./partials/Page/Webinar/webinarTab/webinarOtherLink/EditOtherLink"
                  )
                ),
                validateRole: false,
                exact: true,
              },
              {
                key: ":id/viewWebinar/:id/editTestimonial",
                name: "Webinar",
                isHidden: true,
                component: React.lazy(() =>
                  import(
                    "./partials/Page/Webinar/webinarTab/testimonial/EditTestimonial"
                  )
                ),
                validateRole: false,
                exact: true,
              },
              {
                key: ":id/viewWebinar/:id/editJoinSlider",
                name: "Webinar",
                isHidden: true,
                component: React.lazy(() =>
                  import(
                    "./partials/Page/Webinar/webinarTab/JoinImageSlider/EditJoinImageSlider"
                  )
                ),
                validateRole: false,
                exact: true,
              },
            ],
          },
          {
            key: "workshops",
            name: "Workshop",
            exact: true,
            isHidden: true,
            component: React.lazy(() => import("./containers/Workshop")),
            validateRole: false,
            children: [
              {
                key: "addworkshop",
                name: "Workshop",
                isHidden: true,
                component: React.lazy(() =>
                  import("./partials/Page/Workshop/AddWorkshop")
                ),
                validateRole: false,
                exact: true,
              },
              {
                key: ":id/edit",
                name: "Workshop",
                isHidden: true,
                component: React.lazy(() =>
                  import("./partials/Page/Workshop/EditWorkshop")
                ),
                validateRole: false,
                exact: true,
              },
              {
                key: ":id/viewWorkshop",
                name: "Workshop",
                isHidden: true,
                component: React.lazy(() =>
                  import("./partials/Page/Workshop/workshopTab/viewWorkshop")
                ),
                validateRole: false,
                exact: true,
              },
              {
                key: ":id/viewWorkshop/addAccordion",
                name: "Workshop",
                isHidden: true,
                component: React.lazy(() =>
                  import(
                    "./partials/Page/Workshop/workshopTab/AccordionSection/AddAccordion"
                  )
                ),
                validateRole: false,
                exact: true,
              },
              {
                key: ":id/viewWorkshop/addBriefAbout",
                name: "Workshop",
                isHidden: true,
                component: React.lazy(() =>
                  import(
                    "./partials/Page/Workshop/workshopTab/briefAbout/AddBriefAbout"
                  )
                ),
                validateRole: false,
                exact: true,
              },
              {
                key: ":id/viewWorkshop/addTestimonial",
                name: "Workshop",
                isHidden: true,
                component: React.lazy(() =>
                  import(
                    "./partials/Page/Workshop/workshopTab/testimonial/AddTestimonial"
                  )
                ),
                validateRole: false,
                exact: true,
              },
              {
                key: ":id/viewWorkshop/addTrainerProfile",
                name: "Workshop",
                isHidden: true,
                component: React.lazy(() =>
                  import(
                    "./partials/Page/Workshop/workshopTab/trainerProfile/AddTrainerProfile"
                  )
                ),
                validateRole: false,
                exact: true,
              },
              {
                key: ":id/viewWorkshop/addJoinImageSlider",
                name: "Workshop",
                isHidden: true,
                component: React.lazy(() =>
                  import(
                    "./partials/Page/Workshop/workshopTab/JoinImageSlider/AddjoinImageSlider"
                  )
                ),
                validateRole: false,
                exact: true,
              },
              {
                key: ":id/viewWorkshop/addOtherLink",
                name: "Workshop",
                isHidden: true,
                component: React.lazy(() =>
                  import(
                    "./partials/Page/Workshop/workshopTab/workshopOtherLink/AddOtherLink"
                  )
                ),
                validateRole: false,
                exact: true,
              },
              {
                key: ":id/viewWorkshop/:id/editAccordion",
                name: "Workshop",
                isHidden: true,
                component: React.lazy(() =>
                  import(
                    "./partials/Page/Workshop/workshopTab/AccordionSection/EditAccordion"
                  )
                ),
                validateRole: false,
                exact: true,
              },
              {
                key: ":id/viewWorkshop/:id/editBriefAbout",
                name: "Workshop",
                isHidden: true,
                component: React.lazy(() =>
                  import(
                    "./partials/Page/Workshop/workshopTab/briefAbout/EditBriefAbout"
                  )
                ),
                validateRole: false,
                exact: true,
              },
              {
                key: ":id/viewWorkshop/:id/editTrainerProfile",
                name: "Workshop",
                isHidden: true,
                component: React.lazy(() =>
                  import(
                    "./partials/Page/Workshop/workshopTab/trainerProfile/EditTrainerProfile"
                  )
                ),
                validateRole: false,
                exact: true,
              },
              {
                key: ":id/viewWorkshop/:id/editOtherLink",
                name: "Workshop",
                isHidden: true,
                component: React.lazy(() =>
                  import(
                    "./partials/Page/Workshop/workshopTab/workshopOtherLink/EditOtherLink"
                  )
                ),
                validateRole: false,
                exact: true,
              },
              {
                key: ":id/viewWorkshop/:id/editTestimonial",
                name: "Workshop",
                isHidden: true,
                component: React.lazy(() =>
                  import(
                    "./partials/Page/Workshop/workshopTab/testimonial/EditTestimonial"
                  )
                ),
                validateRole: false,
                exact: true,
              },
              {
                key: ":id/viewWorkshop/:id/editJoinSlider",
                name: "Workshop",
                isHidden: true,
                component: React.lazy(() =>
                  import(
                    "./partials/Page/Workshop/workshopTab/JoinImageSlider/EditJoinImageSlider"
                  )
                ),
                validateRole: false,
                exact: true,
              },
            ],
          },
        ],
      },
      {
        key: "event",
        name: "Events",
        exact: true,
        isHidden: true,
        component: React.lazy(() => import("./containers/Events")),
        validateRole: false,
        children: [
          {
            key: "eventConference",
            name: "Event Conference",
            exact: true,
            isHidden: true,
            component: React.lazy(() =>
              import("./partials/Event/eventConference/ListEventConference")
            ),
            validateRole: false,
            children: [
              {
                key: "addEventConference",
                name: "Event Conference",
                isHidden: true,
                component: React.lazy(() =>
                  import("./partials/Event/eventConference/AddEventConference")
                ),
                validateRole: false,
                exact: true,
              },
              {
                key: ":id/edit",
                name: "Event Conference",
                isHidden: true,
                component: React.lazy(() =>
                  import("./partials/Event/eventConference/EditEventConference")
                ),
                validateRole: false,
                exact: true,
              },
            ],
          },
          {
            key: "webinarConference",
            name: "Webinar Conference",
            exact: true,
            isHidden: true,
            component: React.lazy(() =>
              import("./partials/Event/webinarConference/ListWebinarConference")
            ),
            validateRole: false,
            children: [
              {
                key: "addWebinarConference",
                name: "Webinar Conference",
                isHidden: true,
                component: React.lazy(() =>
                  import(
                    "./partials/Event/webinarConference/AddWebinarConference"
                  )
                ),
                validateRole: false,
                exact: true,
              },
              {
                key: ":id/edit",
                name: "Webinar Conference",
                isHidden: true,
                component: React.lazy(() =>
                  import(
                    "./partials/Event/webinarConference/EditWebinarConference"
                  )
                ),
                validateRole: false,
                exact: true,
              },
            ],
          },
        ],
      },
      {
        key: "homepage",
        name: "Homepage",
        isHidden: true,
        exact: true,
        component: React.lazy(() => import("./containers/Homepage")),
        children: [
          {
            key: "addHomepage",
            name: "Homepage",
            isHidden: true,
            component: React.lazy(() =>
              import("./partials/Homepage/AddHomepage")
            ),
            validateRole: false,
            exact: true,
          },
          {
            key: "AddClient",
            name: "Homepage",
            isHidden: true,
            component: React.lazy(() =>
              import("./partials/Homepage/AddClient")
            ),
            validateRole: false,
            exact: true,
          },
          {
            key: ":id/edit",
            name: "Homepage",
            isHidden: true,
            component: React.lazy(() =>
              import("./partials/Homepage/EditHomepage")
            ),
            validateRole: false,
            exact: true,
          },
          {
            key: ":id/editClient",
            name: "Homepage",
            isHidden: true,
            component: React.lazy(() =>
              import("./partials/Homepage/EditClient")
            ),
            validateRole: false,
            exact: true,
          },
        ],
        validateRole: false,
      },
      {
        key: "about",
        name: "About",
        isHidden: true,
        exact: true,
        component: React.lazy(() => import("./containers/About")),
        children: [
          {
            key: "Addteam",
            name: "About",
            isHidden: true,
            component: React.lazy(() =>
              import("./partials/About/turacozteam/AddTuracozteam")
            ),
            validateRole: false,
            exact: true,
          },
          {
            key: "AddLifeAtTuracoz",
            name: "About",
            isHidden: true,
            component: React.lazy(() =>
              import("./partials/About/lifeAtTuracoz/AddLifeAtTuracoz")
            ),
            validateRole: false,
            exact: true,
          },
          {
            key: "AddImageTuracoz",
            name: "About",
            isHidden: true,
            component: React.lazy(() =>
              import("./partials/About/imageTuracoz/AddImageTuracoz")
            ),
            validateRole: false,
            exact: true,
          },
          {
            key: ":id/editTeam",
            name: "About",
            isHidden: true,
            component: React.lazy(() =>
              import("./partials/About/turacozteam/EditTuracozTeam")
            ),
            validateRole: false,
            exact: true,
          },
          {
            key: ":id/editLifeAtTuracoz",
            name: "About",
            isHidden: true,
            component: React.lazy(() =>
              import("./partials/About/lifeAtTuracoz/EditLifeAtTuracoz")
            ),
            validateRole: false,
            exact: true,
          },
          {
            key: ":id/editImageTuracoz",
            name: "About",
            isHidden: true,
            component: React.lazy(() =>
              import("./partials/About/imageTuracoz/EditIageTuracoz")
            ),
            validateRole: false,
            exact: true,
          },
        ],
        validateRole: false,
      },
      {
        key: "category",
        name: "Category",
        isHidden: true,
        exact: true,
        component: React.lazy(() => import("./containers/Category")),
        validateRole: false,
        children: [
          {
            key: "addCategory",
            name: "Category",
            isHidden: true,
            component: React.lazy(() =>
              import("./partials/category/AddCategory")
            ),
            validateRole: false,
            exact: true,
          },
          {
            key: ":id/edit",
            name: "Category",
            isHidden: true,
            component: React.lazy(() =>
              import("./partials/category/EditCategory")
            ),
            validateRole: false,
            exact: true,
          },
        ],
      },
      {
        key: "carrer",
        name: "Carrer",
        isHidden: true,
        exact: true,
        component: React.lazy(() => import("./containers/Carrer")),
        validateRole: false,
        children: [
          {
            key: "addCarrer",
            name: "Carrer",
            isHidden: true,
            component: React.lazy(() => import("./partials/Carrer/AddCarrer")),
            validateRole: false,
            exact: true,
          },
          {
            key: ":id/edit",
            name: "Carrer",
            isHidden: true,
            component: React.lazy(() => import("./partials/Carrer/EditCarrer")),
            validateRole: false,
            exact: true,
          },
        ],
      },
    ],
  },
  null,
  pathGenerator
);

export default routeConfig;
