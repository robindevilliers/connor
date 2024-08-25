export function radians(degrees) {
    return degrees * Math.PI / 180;
}

export function sin(angle) {
    return Math.sin(radians(angle))
}

export function cos(angle) {
    return Math.cos(radians(angle))
}

export function round(x) {
    return Math.round(x);
}