import { useMemo } from "react";
import { Equal, Expect } from "../helpers/type-utils";

export const Component = () => {
  /**
   * Evene if we do not provide any generic to useMemo, whaever function passed to it returns, is assigned to 
   * that genric.if we return number from fnction, useMemo returns number.
   * 
   * Recommneded way is to either use this or use way3.
   */
  const autoGeneratedIds = useMemo(() => {
    // generate 100 random string uuid's
    return Array.from({ length: 100 }, () =>
      Math.random().toString(36).substr(2, 9)
    );
  }, []);

  type test = Expect<Equal<typeof autoGeneratedIds, string[]>>;
};