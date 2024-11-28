class Car2 {
  // public не нужен, применяется по-умолчанию
  static readonly COLORS = ['red', 'blue', 'green'];
  static isColorAvailable(color: string): boolean {
    return Car2.COLORS.includes(color); // нельзя из static метода обращаться через this, поэтому обращаюсь к Car2 напрямую
  }
}