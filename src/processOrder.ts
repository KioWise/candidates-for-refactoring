// Если в коде будет использоваться item, и не известно какой будет использоваться тип, то лучше тогда использовать дженерики
// В противном случае, я не понимаю для чего он здесь нужен
function processOrder(item: unknown, isExpress: boolean) {
  // Логика обработки заказа с учетом экспресс-доставки
  if (isExpress) {
    // Логика для экспресс-доставки
  } else {
    // Логика для стандартной доставки
  }
}
