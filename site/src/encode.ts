const tags = [
    "block",
    "shadow",
    "value",
    "field",
    "next"
];

export function encodeProgram(xmlString: string) {
    // Strip IDs
    xmlString = xmlString.replace(/id="[^"]+"/gm, "");

    // Strip whitespace
    xmlString = xmlString.replace(/    /g, "");
    xmlString = xmlString.replace(/\n/g, "");

    // Replace common strings with shorter ones
    for (let i = 0; i < tags.length; i++) {
        xmlString = xmlString.replace(new RegExp(`<\/${tags[i]}>`, "g"), `</${tags[i][0]}>`);
        xmlString = xmlString.replace(new RegExp(`<${tags[i]} `, "g"), `<${tags[i][0]} `);
    }

    return btoa(encodeURIComponent(xmlString));
}

export function decodeProgram(encoded: string) {
    let xmlString = decodeURIComponent(atob(encoded));

    for (let i = 0; i < tags.length; i++) {
        xmlString = xmlString.replace(new RegExp(`<\/${tags[i][0]}>`, "g"), `</${tags[i]}>`);
        xmlString = xmlString.replace(new RegExp(`<${tags[i][0]} `, "g"), `<${tags[i]} `);
    }

    return xmlString;
}