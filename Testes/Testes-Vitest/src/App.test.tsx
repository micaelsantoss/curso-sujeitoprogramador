import { test } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

test("App component", () => {
    render( <App/> )

    screen.getByText("Testeee")

})


