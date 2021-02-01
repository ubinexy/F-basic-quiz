export const mockHtml = jest.fn();

const mockJquery = jest.fn(() => {
  return {
    html: mockHtml,
  };
});

export default mockJquery;
