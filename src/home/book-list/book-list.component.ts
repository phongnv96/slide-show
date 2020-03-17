import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  @Input() defaultWidth = 50;
  @Input() defaultHeight = 80;
  constructor() {}
  DUMY_BOOK = [
    {
      urlImage:
      'http://is2.mzstatic.com/image/thumb/Music18/v4/5a/42/0f/5a420f73-6490-abc9-bdcc-3001d5c4e9fc/source/400x40000bb.png',
    title: 'Harry Potter',
    author: 'Phongnv'
    },
    {
      urlImage:
        'http://is3.mzstatic.com/image/thumb/Music49/v4/b6/b0/a1/b6b0a1dd-998d-9786-ca2f-87470be15250/source/400x40000bb.png',
      title: 'Ngôi Nhà nhỏ',
      author: 'Phongnv'
    },
    {
      urlImage:
        'http://is4.mzstatic.com/image/thumb/Music62/v4/93/8f/75/938f7536-0188-f9ba-4585-0a77ceaebf0a/source/400x40000bb.png',
      title: 'Anh yêu ai rồi!',
      author: 'Phongnv'
    },
    {
      urlImage:
        'http://is4.mzstatic.com/image/thumb/Music30/v4/9b/2e/e1/9b2ee13e-35fd-0cc1-d203-e65b4beafc7f/source/400x40000bb.png',
      title: 'Harry Potter',
      author: 'Phongnv'
    },
    {
      urlImage:
        'http://is2.mzstatic.com/image/thumb/Music18/v4/5a/42/0f/5a420f73-6490-abc9-bdcc-3001d5c4e9fc/source/400x40000bb.png',
      title: 'Harry Potter',
      author: 'Phongnv'
    }
  ];
  PERCENT_REDUTION = 3 / 10;
  NUM_ITEM_DISPLAY = 3;
  DEFAULT_LEFT = -15;
  SPACE_ITEM = 5;
  itemHidden = {
    urlImage:
      'http://is2.mzstatic.com/image/thumb/Music18/v4/5a/42/0f/5a420f73-6490-abc9-bdcc-3001d5c4e9fc/source/400x40000bb.png',
    title: 'Harry Potter',
    author: 'Phongnv'
  };
  ngOnInit() {}

  public get getItemLength(): number {
    return this.DUMY_BOOK.length;
  }

  public get getIndexCenterItems(): number {
    // tslint:disable-next-line:radix
    return parseInt('' + this.DUMY_BOOK.length / 2);
  }

  public get getDefaultLeft() {
    let totalWidth = 0;
    let startWidth = 0;
    for (let i = 0; i < this.NUM_ITEM_DISPLAY; i++) {
      if (i === 0) {
        startWidth = this.getWidth(i);
      }
      totalWidth += this.getWidth(i);
    }
    const defaultLeft = -startWidth + (100 - totalWidth) / 2;
    return defaultLeft;
  }

  nextItem() {
    this.DUMY_BOOK.shift();
    this.DUMY_BOOK.push({...this.DUMY_BOOK[0]});
  }

  preItem() {
    const item = this.DUMY_BOOK.pop();
    this.DUMY_BOOK.unshift(item);
  }

  onMoveItem($event) {
  }

  getZindex(index) {
    if (index <= this.getIndexCenterItems) {
      return index;
    }
    return Math.abs(index - (this.getItemLength - 1));
  }

  getLeft(index) {
    let left = this.getDefaultLeft;
    for (let i = 0; i < index; i++) {
      left += this.getWidth(i);
    }
    return left;
  }

  getTop(index) {
    return (
      (this.defaultHeight *
        Math.abs(this.getIndexCenterItems - this.getZindex(index)) *
        this.PERCENT_REDUTION) /
      2
    );
  }

  getHeight(index) {
    return (
      this.defaultHeight *
      (1 -
        Math.abs(this.getIndexCenterItems - this.getZindex(index)) *
          this.PERCENT_REDUTION)
    );
  }

  getWidth(index) {
    return (
      this.defaultWidth *
      (1 -
        Math.abs(this.getIndexCenterItems - this.getZindex(index)) *
          this.PERCENT_REDUTION)
    );
  }

}
