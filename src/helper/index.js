export function textSplit(data){
    return data.replace(/([.?*+^$[\]\\(){}|-])/g, ' ');
}