import Circle from "./Circle";
import Close from "./Close";

export function Symbol({name, color}) {
    if(name === null || color === null) {
        return null;
    }

    if(name === 'circle') {
        return <Circle color={color} />
    } else if(name === 'close') {
        return <Close color={color} />
    }
    return null;
}