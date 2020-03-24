import { Error } from "../types/error";

export const generateError = (message: string, code: number): Error => {
  return {
    message,
    errorCode: code
  };
};
