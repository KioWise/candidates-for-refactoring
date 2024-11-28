class A {
  // ...
  getB() {
    return new B();
  }
  // Я бы добавил ещё один метод, для конкретной работы с doSomething()
  // actionC() {
  //   const b = this.getB();
  //   const c = b.getC();
  //   c.doSomething();
  // }
}

class B {
  // ...
  getC() {
    return new C();
  }
}

class C {
  // ...
  doSomething() {
    // Логика
  }
}

// Использование транзитивного обращения

//  Достаточно вызвать один метод actionC(), для упрощения кода. Проще вызвать один метод, чем бегать по class
const a = new A();
a.actionC();

