export default function convertSpecialCharacters(strToDecode: string) {
    const parser = new DOMParser();
    return parser.parseFromString(strToDecode, 'text/html').body.textContent;
}
