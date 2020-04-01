import { INSC_COUNTER, DESC_COUNTER } from "./types";

export const inscCount = () => {
  return {
    type: INSC_COUNTER
  };
};

export const descCount = () => {
  return {
    type: DESC_COUNTER
  };
};
