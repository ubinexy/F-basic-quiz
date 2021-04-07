
const location = window.location;

beforeAll(() => {
  delete window.location;
});

afterAll( () => {
  window.location = location;
});

describe("getUserFromUrl", () => {
  test("should get url from url", () => {
    window.location = {
      pathname: "/users/111",
    };
    const userId = getUserIdFromURL();
    expect(userId).toBe("111");
  });
});
