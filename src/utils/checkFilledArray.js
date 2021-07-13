export function checkArrayForFilledValue(arr) {
    let empty = 0;
    arr.forEach(el => {
        if(el.type === "subjective") {
            console.log(el.type)
            if(!el.question) empty++
            console.log(empty)
        }
        
        if(el.type === "mcq") {
            console.log(el.type)
            if (!el.question || !el.answer || el.options.includes('')) empty++
            console.log(empty)
        }
    })
    console.log(empty)
    if (empty === 0) {
        return true;
    }
    return false;
}