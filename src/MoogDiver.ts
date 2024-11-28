class MoogDiver {
  gradient: Gradient;
  splines: List<Spline>;

  private saturateGradient() {
    this.gradient = // some logic
  }

  private reticulateSplines() {
    // some logic
    this.splines = this.gradient.getSplines();
  }

  private diveForMoog(reason: string) {
    // some logic

    if (reason === 'ok') {
      this.splines.doOk();
    } else {
      this.splines.doNotOk();
    }
  }

  // Не увидел проблем, все функции выполняют свои задачи и после выполняются в методе dive. Только бы спустил его вниз, для читаемости кода
  public dive(reason: string) {
    this.saturateGradient();
    this.reticulateSplines();
    this.diveForMoog(reason);
  }
}

