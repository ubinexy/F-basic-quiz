export const mockHtml = jest.fn();
export const mockAttr = jest.fn();

const mockJquery = jest.fn(() => {
  return {
    html: mockHtml,
    attr: mockAttr,
  };
});

export default mockJquery;
