import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class EnquiryService {

  constructor(private firebase: AngularFireDatabase) { }
  enquiryList: AngularFireList<any>;

  // creating an instance of a form and its properties
  form = new FormGroup({
    $key: new FormControl(null),
    fullName: new FormControl('', Validators.required),
    // email: new FormControl('', Validators.email),
    phoneNumber: new FormControl('', [Validators.required, Validators.minLength(8)]),
    location: new FormControl('', Validators.required),
    size: new FormControl(''),
    price: new FormControl(''),
  });

  // initializing and getting all the enquiries in the database
  getEnquiries() {
    this.enquiryList = this.firebase.list('enquiries');
    return this.enquiryList.snapshotChanges();
  }

  // inserting enquiries into the database
  insertEnquiry(enquiry) {
    this.enquiryList.push({
      fullName: enquiry.fullName,
      // email: enquiry.email,
      phoneNumber: enquiry.phoneNumber,
      location: enquiry.location,
      size: enquiry.size,
      price: enquiry.price
    });
  }

  // populate fields upon edit invoke
  populateForm(enquiry) {
    this.form.setValue(enquiry);
  }

  // update enquiry based on the key
  updateEnquiry(enquiry) {
    this.enquiryList.update(enquiry.$key, {
      fullName: enquiry.fullName,
      // email: enquiry.email,
      phoneNumber: enquiry.phoneNumber,
      location: enquiry.location,
      size: enquiry.size,
      price: enquiry.price
    });
  }

  // deleting enquiry
  deleteCustomer($key) {
    this.enquiryList.remove($key);
  }
}
