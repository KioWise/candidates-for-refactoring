class SomeClass2 {
  // private unusedVariable: number; // Свойство не используется, значит не место в коде

  // Если верить console.log, то constructor не нужен, его можно убрать
  constructor() {
    console.log('Constructor is unnecessary if not initializing anything');
  }

  public someMethod(): void {
    console.log('This method performs a useful action');
  }
}
