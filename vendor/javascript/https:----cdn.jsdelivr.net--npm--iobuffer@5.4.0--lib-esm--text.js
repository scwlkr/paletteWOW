// https://cdn.jsdelivr.net/npm/iobuffer@5.4.0/lib-esm/text@5.4.0 downloaded from https://cdn.jsdelivr.net/npm/iobuffer@5.4.0/lib-esm/text.js

export function decode(bytes, encoding = 'utf8') {
    const decoder = new TextDecoder(encoding);
    return decoder.decode(bytes);
}
const encoder = new TextEncoder();
export function encode(str) {
    return encoder.encode(str);
}
