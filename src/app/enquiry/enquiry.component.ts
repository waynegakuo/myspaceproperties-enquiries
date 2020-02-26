import { Component, OnInit } from '@angular/core';

import { EnquiryService } from '../shared/enquiry.service';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.css']
})
export class EnquiryComponent implements OnInit {

  constructor(public enquiryService: EnquiryService) { }
  submitted: boolean;
  showSuccessMessage: boolean;
  formControls = this.enquiryService.form.controls;

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    if (this.enquiryService.form.valid) {
      if (this.enquiryService.form.get('$key').value == null) {
        // insert enquiry
        this.enquiryService.insertEnquiry(this.enquiryService.form.value);
      } else {
        this.enquiryService.updateEnquiry(this.enquiryService.form.value);
      }
      this.showSuccessMessage = true;
      setTimeout(() => this.showSuccessMessage = false, 3000); // disappear after 3 secs
      this.submitted = false;
      this.enquiryService.form.reset();
    }

  }

}
