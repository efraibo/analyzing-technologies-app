import { HttpClientModule, HttpClient } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

import { AppComponent } from "./app.component";

import { TagInputModule } from "ngx-chips";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"; // this is needed!
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { TagInputComponent } from "./tag-input/tag-input.component";
import { RouterModule, ROUTES } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AccordionModule } from "ngx-bootstrap/accordion";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { ToastrModule } from "ngx-toastr";

@NgModule({
  declarations: [AppComponent, TagInputComponent],
  imports: [
    BrowserModule,
    TagInputModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([]),
    AccordionModule.forRoot(),
    TooltipModule.forRoot(),
    ToastrModule.forRoot(),
    HttpClientModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
