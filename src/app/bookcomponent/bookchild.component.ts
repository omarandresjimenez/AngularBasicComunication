import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
@Component({
    selector: 'app-child',
    templateUrl: './bookchild.html',
})
export class BookChildComponent {
  @Input()
  public category = '';
  @Output()
  public onCounterChanged = new EventEmitter<number>();
  private books: any[] = [
    { 'category': 'Action', 'name': 'Action Book 1', 'year': 2015, 'desc': 'Action Book for testing', 'author': 'Jhon Doe Book 1' },
    { 'category': 'Action', 'name': 'Action Book 2', 'year': 2000, 'desc': 'Action Book No 2 for testing', 'author': 'Mark Twain Book 2' },
    { 'category': 'Action', 'name': 'Action Book 3', 'year': 2010, 'desc': 'Action Book No 3 for testing',
      'author': 'Gabriel Garcia Book 3' },
    { 'category': 'Comedy', 'name': 'Comedy Book 1', 'year': 2017,  'desc': 'Comedy Book for testing', 'author': 'Jhon Doe Book 1' },
    { 'category': 'Comedy', 'name': 'Comedy Book 2', 'year': 2016, 'desc': 'Comedy Book No 2 for testing', 'author': 'Jhon Doe Book 2' },
    { 'category': 'Comedy', 'name': 'Comedy Book 3', 'year': 2015, 'desc': 'Comedy Book No 3 for testing', 'author': 'Jhon Doe Book 3' },
    { 'category': 'Others', 'name': 'Others Book 1', 'year': 2014, 'desc': 'Others Book for testing', 'author': 'Jhon Doe Book 1' },
    { 'category': 'Others', 'name': 'Others Book 2', 'year': 2013, 'desc': 'Others Book No 2 for testing', 'author': 'Jhon Doe Book 2' },
    { 'category': 'Others', 'name': 'Others Book 3', 'year': 2012, 'desc': 'Others Book No 3 for testing', 'author': 'Jhon Doe Book 3' },
                       ];
  private booksToShow: any[] = [];
  private selectedNum = 0;

  public ngOnChanges() {
    this.selectedNum = 0;
    this.booksToShow = [];
    this.selectBooks();
  }

  private selectBooks() {
        console.log(this.category);
        if ( !this.category ) { return; }
        this.books.forEach((key: any ) => {
          if ( key.category === this.category) {
            key['selected'] = 0;
            this.booksToShow.push(key);
          }
        });
  }

  private onSelectBook(name: string) {
        this.booksToShow.forEach((key: any) => {
          if ( key.name === name && key.selected === 0) {
            this.selectedNum++;
            key.selected = 1;
            this.onCounterChanged.emit(this.selectedNum);
          } else  if ( key.name === name && key.selected === 1) {
            this.selectedNum--;
            key.selected = 0;
            this.onCounterChanged.emit(this.selectedNum);
          }
        });
  }
}
