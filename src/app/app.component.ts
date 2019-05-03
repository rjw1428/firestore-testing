import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ItemsServiceService } from './items-service.service';
import { Item } from './item/item.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  timeDelay = 1; //IN MINUTES
  resetHour = 13;
  editForm = false;
  editItem: Item;
  constructor(private service: ItemsServiceService) {

  }

  ngOnInit() {
    var time = Observable.interval(60000 * this.timeDelay)
      .subscribe(x => {
        var date = new Date()
        if (date.getHours() == this.resetHour && date.getMinutes() >= 0) {
          console.log("COUNTDOWN TO REFRESH STARTED")
          setTimeout(() => this.refresh(), 60000 * 100);
        }
      })
  }

  refresh() {
    window.location.reload(true)
  }

  parseCharacters(title: string) {
    let result = title.toLowerCase()
    result = result.replace(/ü/g, "u")
    result = result.replace(/ä/g, "a")
    result = result.replace(/ö/g, "o")
    result = result.replace(/ß/g, "ss")
    result = result.replace(/ñ/g, "n")
    result = result.replace(/ë/g, "e")
    console.log(result)
  }

  closeEdit(item: { item: Item }) {
    this.editForm = false;
    //this.service.itemEdit()
  }

  openEdit(item: { item: Item }) {
    this.editItem = item.item;
    this.editForm = true;
  }

  toggleEditMode() {
    this.service.editMode ? this.service.editMode = false : this.service.editMode = true
  }

  toggleTableMode() {
    this.service.tableMode ? this.service.tableMode = false : this.service.tableMode = true
  }
}
