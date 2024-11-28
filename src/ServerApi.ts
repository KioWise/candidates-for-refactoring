class ServerApi {
  // public processAddAccountRequest(url: string, account: TAccount) {
  //   return this.fetch('POST', url, account);
  // }

  // public sendDeleteAccountRequest(url: string, accountId: string) {
  //   return this.fetch('DELETE', url, accountId);
  // }

  // public requestAuth(url: string, credentials: TCredentials) {
  //   return this.fetch('GET', url, credentials);
  // }

  public request<T>(type: "POST" | "DELETE" | "GET", url: string, body: T) {
    return this.fetch(type, url, body)
  }
}
// Можно не плодить одинаковые методы, а создать один с параметрами для настройки fetch запросов
