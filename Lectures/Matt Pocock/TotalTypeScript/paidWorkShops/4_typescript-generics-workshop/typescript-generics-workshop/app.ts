import { Equal, Expect } from "../helpers/type-utils";

// export const makeSelectors = <
//   TSource,
//   TSelectors extends Record<string, (source: TSource) => any>
// >(
//   selectors: TSelectors
// ) => {
//   return selectors;
// };

export const makeSelectors =
  <TSource>() =>
  <TSelectors extends Record<string, (source: TSource) => any>>(
    selectors: TSelectors
  ) => {
    return selectors;
  };

interface Source {
  firstName: string;
  middleName: string;
  lastName: string;
}

const selectors = makeSelectors<Source>()({
  getFullName: (source) =>
    `${source.firstName} ${source.middleName} ${source.lastName}`,
  getFirstAndLastName: (source) => `${source.firstName} ${source.lastName}`,
  getFirstNameLength: (source) => source.firstName.length,
});
const fun1 = makeSelectors<Source>();

const result = fun1({
  getFullName: (source) =>
    `${source.firstName} ${source.middleName} ${source.lastName}`,
  getFirstAndLastName: (source) => `${source.firstName} ${source.lastName}`,
  getFirstNameLength: (source) => source.firstName.length,
});

type tests = [
  Expect<Equal<(typeof selectors)["getFullName"], (source: Source) => string>>,
  Expect<
    Equal<(typeof selectors)["getFirstAndLastName"], (source: Source) => string>
  >,
  Expect<
    Equal<(typeof selectors)["getFirstNameLength"], (source: Source) => number>
  >
];
