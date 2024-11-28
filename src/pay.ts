// Название "e" не очень понятно, лучше использовать приближенное именование.
const pay = () => {
  for (let e of employees) {
    if (e.isPayday()) {
      // Можно значение переменной pay передать сразу в deliverPay, но сейчас выглядит более понятнее
      const pay = e.calculatePay();
      e.deliverPay(pay);
    }
  }
};
