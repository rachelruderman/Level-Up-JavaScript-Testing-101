const add = jest.fn(() => 3);

test('add', () => {
    const value = add(1, 2);
    expect(value).toBe(3);
    expect(add).toHaveBeenCalledTimes(1);
});