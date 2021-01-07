import { shallow } from "enzyme";
import App from "./App";
import Book from "./components/Book";

describe("App", () => {
  it("should display a Book", () => {
    const appWrapper = shallow(<App />);
    const book = appWrapper.find(Book);
    expect(book).toHaveLength(1);
  });

  // it("fetches a list of books from server", () => {
  //   const bookWrapper = shallow(<Book />);
  //   const mockFetch = jest.fn();
  //   const mockCDM = mockFetch.mockImplementation("componentDidMount")
  //   expect(mockCDM).toBeCalled();
  // });
});
