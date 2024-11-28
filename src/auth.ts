type TPayment = {
  amount: number;
  rcCode: number;
};

type TGatewayService = {
  sendAuth: (payment: TPayment) => number;
};

const auth = (payment: TPayment, gateway: TGatewayService) => {
  // Лучше сразу сделать запись, а не дробить на переменные, лишнее трата ресурсов
  payment.rcCode = gateway.sendAuth(payment);
};
