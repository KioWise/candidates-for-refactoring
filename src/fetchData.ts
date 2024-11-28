function fetchData(url: string) {
  const DEFAULT_TIMEOUT = 5000;
  // Незачем создавать переменную вне тела функции, если использоваться будет только в ней.
  // Можно перенести переменную в функцию fetchData.
  // Так код выглядит чище.

  // Используем значение по умолчанию для таймаута
  fetch(url, { timeout: DEFAULT_TIMEOUT })
    .then((response) => console.log(response))
    .catch((error) => console.error(error));
}
