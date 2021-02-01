import { getUserIdFromURL } from "../url";

const { location } = window;

beforeAll(() => {
  delete window.location;
});

afterAll(() => {
  window.location = location;
});

describe("handleUrl", () => {
  test("should return correct user id", () => {
    window.location = {
      pathname: "/users/111",
    };
    expect(getUserIdFromURL()).toBe("111");
  });

  test("should return undefined if url is invalid", () => {
    window.location = {
      pathname: "/comments/111",
    };
    expect(getUserIdFromURL()).toBeUndefined();
  });
});
