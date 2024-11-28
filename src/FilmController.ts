class FilmController {
  openDetails() {
    // Нет смысла объявлять переменную и не использовать ее в коде.
    // Лишняя трата ресурсов.

    // const popup = new Popup(); 
    this.popupOpened = true;
  }

  isPopupOpened() {
    return this.popupOpened;
  }
}
