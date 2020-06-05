import { add } from './add';

export const total = (shipping, subtotal) => {
    const sum = add(shipping, subtotal);
    return `$${sum}`;
}