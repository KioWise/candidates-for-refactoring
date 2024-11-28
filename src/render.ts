const render = (size: number) => {
  const html = new StringBuffer('<hr');

  if (size > 0) {
    // Можно один раз выполнить html.append. Не стоит вызывать его 3 раза, если можно выполнить один раз и всё записать
    html.append(` size="${size + 1}"`)
  }
  html.append('>');

  return html.toString();
};
