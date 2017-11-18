import { Component } from '@angular/core';
@Component({
    selector: 'app-header',
    templateUrl: './bookparent.html',
})
export class BookParentComponent {
    private numBooks = 0;
    private categories: string[] = ['Action', 'Comedy', 'Others'];
    private selectedCategory = 'Select Category';

    constructor() {
    }
   private onGetCounter( input: number ) {
        this.numBooks = input;
    }

    private onChangeCategory( category: string ) {
      this.selectedCategory = category;
      this.numBooks = 0;
    }

}
