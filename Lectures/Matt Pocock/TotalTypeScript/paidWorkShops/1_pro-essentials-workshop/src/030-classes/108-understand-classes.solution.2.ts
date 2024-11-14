import { expect, it } from "vitest";

class CanvasNode {
  readonly x: number;
  readonly y: number;
  /**
   * Either you have initial value for  aproperty or you initialize it in constructor
   */
  constructor() {
    this.x = 0;
    this.y = 0;
  }
}

it("Should store some basic properties", () => {
  const canvasNode = new CanvasNode();

  expect(canvasNode.x).toEqual(0);
  expect(canvasNode.y).toEqual(0);

  // @ts-expect-error Property is readonly
  canvasNode.x = 10;

  // @ts-expect-error Property is readonly
  canvasNode.y = 20;
});
