const createPayment = (isToken: Boolean) => {
  if (isToken) {
    // Убрал slice(), нет смысла его использовать
    const token = getUrl();
    system.createTransaction(token).setTransaction();
  } else {
    const cardNumber = account.getCardNumber();
    userAccount.createCardPayment(cardNumber).postTransactionToServer();
  }
};
