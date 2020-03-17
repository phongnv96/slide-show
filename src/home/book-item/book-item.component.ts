import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {
@Input() width: number;
@Input() height: number;
@Input() left: string;
@Input() bookDetail;
@Input() zindex;
@Input() top;
@Input() index: number;
@Output() moveItem = new EventEmitter();

  isMoveItem: boolean;
  constructor() {
  }

  ngOnInit() {
  }

  onMoveItem() {
    if (this.index === 0) {
      this.isMoveItem = true;
    }
    this.moveItem.emit('moveDirection');
  }

}
