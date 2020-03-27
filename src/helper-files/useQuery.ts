import { useLocation } from "react-router";
import { english, allLanguages } from "../translations/letterCodes";

export const useQuery = (): string => {
  const language = useLocation().search.split("?")[1];
  if (allLanguages.includes(language)) {
    return language;
  } else {
    return english;
  }
};
