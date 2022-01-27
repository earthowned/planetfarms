import { model } from "./config";

export const isCodeRequested = (values) => values[model.codeRequested.name];

export const secondaryButtonTitle = (values) =>
  isCodeRequested(values) ? "Resend Code" : "I already have code";

export const primaryButtonTitle = (values) =>
  isCodeRequested(values) ? "Change Password" : "Send Code";
