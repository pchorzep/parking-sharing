import { Component, OnInit } from '@angular/core';
import { requestsService } from './requests.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css'],
})
export class RequestsComponent implements OnInit {
  reqs: string[] = [];

  constructor(private reqSv: requestsService) {}

  ngOnInit() {
    this.reqs = this.reqSv.getRequests();
  }

  onClicked(reqName: string) {
    this.reqSv.resolveRequest(reqName);
    this.reqs = this.reqSv.getRequests();
  }
}
