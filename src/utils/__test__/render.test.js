import jquery, { mockHtml, mockAttr } from "jquery";
import { fetchAndRenderHeader } from "../render";
import * as module from "../url";

jest.mock("jquery");

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        name: "KAMIL",
        age: 24,
        avatar: "https://inews.gtimg.com/newsapp_match/0/3581582328/0",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, non, dolorem, cumque distinctio magni quam expedita velit laborum sunt amet facere tempora ut fuga aliquam ad asperiores voluptatem dolorum! Quasi.",
      }),
  })
);

describe("app", () => {
  it("fetch and render name", async () => {
    module.getUserIdFromURL = jest.fn().mockReturnValue(1);

    await fetchAndRenderHeader("http://localhost:3000/users");

    expect(jquery).toHaveBeenCalledWith("#name");
    expect(jquery).toHaveBeenCalledWith("#age");
    expect(jquery).toHaveBeenCalledWith("#avatar");
    expect(mockHtml).toHaveBeenCalledWith("KAMIL");
    expect(mockAttr).toHaveBeenCalledWith(
      "src",
      "https://inews.gtimg.com/newsapp_match/0/3581582328/0"
    );
    expect(mockHtml).toHaveBeenCalledWith(24);
  });
});
