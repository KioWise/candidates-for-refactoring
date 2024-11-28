class Calendar {
  addEvent(event) {
    // some logic to add event
  }
}

class Director {
  private calendar: Calendar; // Добавил модификатор доступа private, незачем всем смотреть календарь директора :)

  constructor(calendar: Calendar) {
    this.calendar = calendar;
  }

  scheduleMeeting(event) {
    this.calendar.addEvent(event);
  }
}
