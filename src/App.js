export const add = (x, y) => {
    return (x + y);
};

export const total = (shipping, subtotal) => {
    const sum = add(shipping, subtotal);
    return `$${sum}`;
}