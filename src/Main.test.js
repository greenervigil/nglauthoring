import React from 'react';
import Main from './Main';
import { cleanup, render } from '@testing-library/react';

afterEach(cleanup)

test('<App/>', () => {
  const app = render(<Main />);
  
  expect(app).toBeDefined();
});
