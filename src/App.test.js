import { shallow } from 'enzyme'
import App from './App';
import Book from './components/Book'

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
describe('App', () =>{
  it("should display a Book", () =>{
    const appWrapper = shallow(<App />)
    const book = appWrapper.find(Book)
    expect(book).toHaveLength(1);
  })
})