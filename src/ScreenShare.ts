class ScreenShare {
  // Поднял методы, удобнее читать код.
  stopPresentation() { }
  startPresentation(mediaStream: MediaStream) { }
  muteAudio() { }

  startPresentationWithoutSound(mediaStream: MediaStream, isExistsAudioTracks: boolean) {
    // Не совсем понимаю, зачем перед началом останавливать процесс презентации. Только если обезопасить поток, убедиться что ничего не запущенно.
    this.stopPresentation();

    this.startPresentation(mediaStream);

    if (isExistsAudioTracks) {
      this.muteAudio();
    }
  }

}
