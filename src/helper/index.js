export function textSplit(data) {
    if (data === undefined) {
        return data;
    } else {
        return data.replace(/([.?*+^$[\]\\(){}|-])/g, ' ');
    }
}