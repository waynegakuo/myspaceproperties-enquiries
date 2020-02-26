import { Component, OnInit } from '@angular/core';
import {EnquiryService} from '../shared/enquiry.service';

@Component({
  selector: 'app-enquiry-list',
  templateUrl: './enquiry-list.component.html',
  styleUrls: ['./enquiry-list.component.css']
})
export class EnquiryListComponent implements OnInit {

  constructor( private enquiryService: EnquiryService) { }
  enquiryArray = [];
  showDeleteMessage: boolean;
  searchText: '';

  ngOnInit() {
    this.enquiryService.getEnquiries().subscribe(
      list => {
        this.enquiryArray = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          };
        });
      }
    );
  }

  onDelete($key) {
    if (confirm('Are you sure you want to delete this record?')) {
      this.enquiryService.deleteCustomer($key);
      this.showDeleteMessage = true;
      setTimeout(() => this.showDeleteMessage = false, 3000);
    }
  }

  filterCondition(enquiry) {
    // tslint:disable-next-line: triple-equals
    return enquiry.fullName.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1;
  }
}
