import { nationalityToCountryCode } from "./constants";

export const convertNationalityToCountryCode = (nationality: string) =>
  nationalityToCountryCode[nationality];
