// Модуль 1
// Лишние строчки кода. Лучше использовать reduce, делает код компактным, выполняет тоже самое.
const calculateTotalPrice = (items) => (items.reduce((total, item) => total + item.price, 0))
// Модуль 2
// Упростил функции для чистоты кода.
const applyDiscount = (totalPrice, discountPercentage) => (totalPrice * (1 - discountPercentage / 100))
