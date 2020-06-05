import { total } from './App';
import { add } from './add'; // import a dependency

jest.mock('./add', () => ({ // mock the dependency (you don't want to test 3rd party APIs; you just want to test your code)
    add: jest.fn(() => 3)
}));

test('total', () => {
    const value = total(1, 2);
    expect(value).toBe(`$3`);
    expect(add).toHaveBeenCalledTimes(1);

    add.mockImplementation(() => 30);
});