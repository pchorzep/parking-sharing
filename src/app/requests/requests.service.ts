export class requestsService {
  private requests = ['request 1', 'request 2'];

  addRequest(requestName: string) {
    this.requests.push(requestName);
  }

  resolveRequest(requestName: string) {
    this.requests = this.requests.filter((req) => req !== requestName);
  }

  getRequests() {
    return [...this.requests];
  }
}
