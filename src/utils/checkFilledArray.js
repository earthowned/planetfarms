export function checkArrayForFilledValue(arr) {
    let empty = 0;
    arr.forEach(el => {
        if (!el.question || !el.answer || el.options.includes('')) {
            empty++
        }
    })

    if (empty > 0) {
        return false;
    } else {
        return true;
    }
}