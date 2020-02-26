import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { EnquiryListComponent } from './enquiry-list/enquiry-list.component';
import { EnquiryService } from './shared/enquiry.service';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    EnquiryComponent,
    EnquiryListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [
    EnquiryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
