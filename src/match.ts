const match = rawHeaderLine.match(headerPattern);

headers.set(match[1].toLowerCase(), match[2]);
// Ничего не увидел, вроде все хорошо