
// Для удобства лучше создать переменную и один раз получить значения, а не обращаться постоянно к объекту
const { age, employmentStatus, criminalRecord } = user
if (age >= 18 && age <= 65 && employmentStatus === 'employed' && !criminalRecord)
  approveLoan();

// Я бы вынес проверки в одтельную функцию, упрощает читаемость кода и делает его переиспользуемым
