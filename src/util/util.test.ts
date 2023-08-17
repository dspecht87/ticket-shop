import { getDateString, getTimeString } from "./util.ts";

describe("utils", () => {
  describe("formats date correctly", () => {
    it("formats date correctly", () => {
      const date = new Date("2023-08-17T12:34:56Z");
      const formattedDate = getDateString(date);
      expect(formattedDate).toMatch(/Do. 17.08.2023/); // Assuming "dd.mm.yyyy" format
    });
  });

  describe("formats time correctly", () => {
    it("formats time correctly", () => {
      const date = new Date("2023-08-17T12:34:56Z");
      const formattedTime = getTimeString(date);
      expect(formattedTime).toMatch(/14:34/); // Assuming "hh:mm" format
    });
  });
});
