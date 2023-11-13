import { Component } from '@angular/core';
import { requestsService } from '../requests/requests.service';

@Component({
  selector: 'app-new-request',
  templateUrl: './new-request.component.html',
  styleUrls: ['./new-request.component.css'],
})
export class NewRequestComponent {

  constructor(private reqSv: requestsService) {}

  onAddRequest(form: any) {
    if (form.form.status === 'VALID') {
      this.reqSv.addRequest(form.form.value.requestName);
    } else {
      console.log(form);
    }
  }
}
