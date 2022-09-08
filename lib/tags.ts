export function tagify(tag): string {
    return tag.toLowerCase().split(" ").join("-");
}

export function untagify(tag): string {
    return tag.split("-").join(" ");
}