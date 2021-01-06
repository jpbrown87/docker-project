import { render, screen } from '@testing-library/react';
import { shallow } from 'enzyme'
import Book from './Book'


describe("Book component", () => {
    it("displays a list of books", () => {
        const bookWrapper = shallow(<Book />)
        const bookList = bookWrapper.find('li')
        expect(bookList).toBeDefined()
    })

    it("fetches a list of books from server", () => {
        const bookWrapper = shallow(<Book />)
        
    })

})