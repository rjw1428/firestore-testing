import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { ItemListComponent } from './item-list/item-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';
import { EditListComponent } from './edit-list/edit-list.component'
import { ItemsServiceService } from './items-service.service';
import { Item2Component } from './item2/item2.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ItemListComponent,
    EditComponent,
    EditListComponent,
    Item2Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [ItemsServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
