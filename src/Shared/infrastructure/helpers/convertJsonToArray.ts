export function jsonToArray(json: any) {
    const result: any = [];
    const keys = Object.keys(json);
    keys.forEach((key: string) => {
        result.push(json[key]);
    });
    return result;
}
