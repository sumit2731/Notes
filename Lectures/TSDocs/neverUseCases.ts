/* 

1)never also appears when TypeScript determines there’s nothing left in a union.

  this can be used to ensure that all cases are handled in function which accepts a union type.
  (discriminated union).never also appears when TypeScript determines there’s nothing left in a union.

2)never is the only type that will “factor out” in a type union, which makes it indispensable for 
    certain cases, as we will see in the next section.

    a)Giving type to promise that rejects.
3)This can be used in conditional types
  never is used as an escape hatch because, combined with other types, it will disappear.
    a)utilities to get argument type, return type from function
    b)Conditional pruning is also useful for narrowing union types. TypeScript’s libraries include the
        NonNullable<T> type (source), which removes null and undefined from a union type.
        NonNullable<T> produces a potentially narrowed type using never to prune unwanted union branches.
        see lecture 4 in mattPocock folder (also used in Extract and Exclude utility types)
4)Ensuring that a property does not exist on a object. there are 2 ways to do that -
  making a property optional and giving it value of undefined
  while using mapped type when proeprtyName evaluates to never (see ts docs of mapped type, In total TS course see lecture 32 of section 1)

5)type for function that never actually returns

6)Total type script, see exercise 22 (we return never from conditional types)
  Never is a way of signaling to your types that something should never happen.
  This pattern though of returning never allows your conditional types to specify 
  their else logic without having to worry too much about what it is.
  Really, never is a way of saying this should never happen. It's very useful in conditional types, a 
  very common pattern to basically say, "OK, this value isn't allowed," or "This should never happen."
*/

//1

interface Square {
  kind: "square";
  size: number;
}

interface Rectangle {
  kind: "rectangle";
  width: number;
  height: number;
}
type Shape = Square | Rectangle;

function calculateArea(s: Shape) {
  switch (s.kind) {
    case "square": {
      return s.size * s.size;
    }
    case "rectangle": {
      return s.height * s.width;
    }
  }

  const _ensureAllcasesAreHandled: never = s;
}

//2

function timeout(ms: number): Promise<never> {
  return new Promise((_, reject) =>
    setTimeout(() => reject(new Error("Timeout elapsed")), ms)
  );
}
function fetchStock(ms: string): Promise<{ price: number }> {
  return new Promise((resolve, reject) =>
    setTimeout(() => resolve({ price: 1000 }), 1000)
  );
}

async function fetchPriceWithTimeout(tickerSymbol: string): Promise<number> {
  const stock = await Promise.race([
    fetchStock(tickerSymbol), // returns `Promise<{ price: number }>`
    timeout(3000),
  ]);
  return stock.price;
}

//4
type demoObject = {
  [prop: string]: any;
  name?: never;
};
