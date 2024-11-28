class LowLevelModule {
  // Можно добавить модификатор static, чтобы не создавать экземпляр, а напрямую использовать метод.
  static doSomething() {
    // реализация
  }
}

class HighLevelModule {
  doSomethingElse() {
    LowLevelModule.doSomething() // Использование метода напрямую
  }
}
