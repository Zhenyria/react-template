import {render} from '@testing-library/react';
import App from './App';
import {unmountComponentAtNode} from "react-dom";

test('renders learn react link', () => {
    const div = document.createElement('div');
    render(<App/>, div);
    unmountComponentAtNode(div);
});
