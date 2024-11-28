interface Modem {
  dial: (phoneNumber: string) => boolean;
  disconnect: () => boolean;
  // Не понимаю что такое "с", лучше писать всё словами
  send: (c: string) => boolean;
  recv: () => string;
  getConnectedPhoneNumber: () => string;
}
