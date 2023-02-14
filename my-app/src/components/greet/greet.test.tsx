import {render, screen} from '@testing-library/react';
import { Greet } from './greet';

describe('first', () => {         
    test('greet renders correctly', ()=>{
        render(<Greet name='justin'/>);
        const textElement = screen.getByText('Hello justin');
        expect(textElement).toBeInTheDocument();
    });
});


describe('nested', () => {
    test('greet renders with a name', () => { 
        render(<Greet name='jissmon'/>)
        const textElement = screen.getByText('Hello jissmon')
        expect(textElement).toBeInTheDocument()
    });
})
