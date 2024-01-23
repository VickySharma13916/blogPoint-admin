import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const mobileRegExp = /^([0|+[0-9]{1,5})?([7-9][0-9]{9})$/;

export const loginRules = yupResolver(
  Yup.object({
    email: Yup.string().email().required(),
    password: Yup.string().required(),
  }).required()
);

export const signUpRules = yupResolver(
  Yup.object({
    email: Yup.string().email().required(),
    password: Yup.string().required(),
    firstName: Yup.string().required(),
    lastName: Yup.string().required(),
    mobileNumber: Yup.string().required(),
  }).required()
);

export const InviteAdminRules = yupResolver(
  Yup.object({
    name: Yup.string().required(),
    password: Yup.string().required(),
    confirmpassword: Yup.string().required(),
  }).required()
);

export const verifyLoginOTPRules = yupResolver(
  Yup.object({
    otp: Yup.string().required(),
  }).required()
);

export const verifyAdminSession = yupResolver(
  Yup.object({
    password: Yup.string().required(),
  }).required()
);

export const verifyAdminSessionOtp = yupResolver(
  Yup.object({
    passcode: Yup.number().typeError("Passcode is required.").required(),
  }).required()
);

export const inviteRules = yupResolver(
  Yup.object({
    firstName: Yup.string().required(),
    lastName: Yup.string().required(),
    countryCode: Yup.string().required(),
    mobile: Yup.string().test(
      "is-mobile",
      "Mobile number is not valid",
      function (value) {
        if (!value) return true;
        return mobileRegExp.test(value);
      }
    ),
    password: Yup.string().required(),
    confirmPassword: Yup.string().test(
      "passwords-match",
      "Passwords must match",
      function (value) {
        return this.parent.password === value;
      }
    ),
  })
);

export const addMemberRules = yupResolver(
  Yup.object({
    email: Yup.string().email().required(),
    role: Yup.string().required(),
  }).required()
);

export const createRoleRules = yupResolver(
  Yup.object({
    name: Yup.string().required(),
    description: Yup.string().required(),
    isSuperAdmin: Yup.boolean(),
  }).required()
);

export const resetPasswordRules = yupResolver(
  Yup.object({
    password: Yup.string().required(),
    confirmPassword: Yup.string().test(
      "passwords-match",
      "Passwords must match",
      function (value) {
        return this.parent.password === value;
      }
    ),
  })
);

export const forgotPasswordRules = yupResolver(
  Yup.object({
    email: Yup.string().email().required(),
  }).required()
);

export const addCountryRules = yupResolver(
  Yup.object({
    name: Yup.string().required(),
    isoCode: Yup.string().required(),
    financialStartDate: Yup.string().required(),
    financialQuarterOne: Yup.string().required(),
    financialQuarterTwo: Yup.string().required(),
    financialQuarterThree: Yup.string().required(),
    financialQuarterFour: Yup.string().required(),
  }).required()
);

export const addBucketRules = yupResolver(
  Yup.object({
    name: Yup.string(),
    dateFormat: Yup.string().required(),
    distanceUnit: Yup.string().required(),
  }).required()
);

export const addStateRules = yupResolver(
  Yup.object({
    name: Yup.string().required(),
    isoCode: Yup.string().required(),
    countryCode: Yup.string().required(),
  }).required()
);

export const addCityRules = yupResolver(
  Yup.object({
    name: Yup.string().required(),
    countryCode: Yup.string().required(),
    stateCode: Yup.string().required(),
  }).required()
);

export const addTagRules = yupResolver(
  Yup.object({
    name: Yup.string().required(),
  }).required()
);

export const addPlanIOSRules = yupResolver(
  Yup.object({
    name: Yup.string().required(),
    amount: Yup.number()
      .typeError("Plan Price is required.")
      .required("Plan Price is required.")
      .test(
        "maxDigitsAfterDecimal",
        "Plan Price field must have 2 digits after decimal or less.",
        (number) => /^\d+(\.\d{1,2})?$/.test(number)
      ),
    total: Yup.number().required(),
    description: Yup.string().required(),
  }).required()
);

export const addPlanAndroidRules = yupResolver(
  Yup.object({
    name: Yup.string().required(),
    amount: Yup.number()
      .typeError("Plan Price is required.")
      .required("Plan Price is required.")
      .test(
        "maxDigitsAfterDecimal",
        "Plan Price field must have 2 digits after decimal or less.",
        (number) => /^\d+(\.\d{1,2})?$/.test(number)
      ),
    total: Yup.number().required(),
    description: Yup.string().required(),
  }).required()
);

export const addAvailCountryRules = yupResolver(
  Yup.object({
    name: Yup.string().required(),
    isoCode: Yup.string().required(),
    phonecode: Yup.string().required(),
    currency: Yup.string().required(),
  }).required()
);

export const createNotificationRules = yupResolver(
  Yup.object({
    title: Yup.string().required(),
    content: Yup.string().required(),
  }).required()
);

export const trailRules = yupResolver(
  Yup.object({
    value: Yup.number().required(),
  }).required()
);
