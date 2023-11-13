export class requestsService {
  private requests = ["test 1", "test 2"]

  getRequests () {
    return [...this.requests]
  }
}