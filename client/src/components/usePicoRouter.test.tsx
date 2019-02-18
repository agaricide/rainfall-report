import React from 'react';
import usePicoRouter from './usePicoRouter';
import { render, cleanup, fireEvent, testHook } from 'react-testing-library';
import { act } from 'react-dom/test-utils';

afterEach(cleanup);

it('it provides a setRoute function that accepts a string', () => {
  let route: any;
  let setRoute: any;

  // https://bit.ly/2V7uuBh
  testHook(() => {
    // tslint:disable-next-line
    return ([route, setRoute] = usePicoRouter({ default: 'default' }));
  });

  expect(route).toBe('default');

  act(() => {
    setRoute('bar');
  });

  expect(route).toBe('bar');
});

test('setRoute pushes to the browser history api', () => {
  const Test = () => {
    const [_, setRoute] = usePicoRouter({ default: 'default' });
    return <button onClick={() => setRoute('foo')}></button>;
  };

  const { container } = render(<Test />);
  const button = container.querySelector('button') as HTMLElement;
  fireEvent.click(button);
  expect(history.state.route).toBe('foo');
});

it(`predictably propogates changes to route property during render`, () => {
  const Test = () => {
    const [route, setRoute] = usePicoRouter({ default: 'default' });
    return (
      <div>
        <button onClick={() => setRoute('bar')}></button>
        <div id='route'>{route}</div>
      </div>
    );
  };

  const { container } = render(<Test />);
  const button = container.querySelector('button') as HTMLElement;
  const route = container.querySelector('#route') as HTMLElement;
  fireEvent.click(button);
  expect(route.innerHTML).toBe('bar');
});

