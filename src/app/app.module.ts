// our root app component
import {Component, NgModule, VERSION} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BookParentComponent} from './bookcomponent/bookparent.component';
import {BookChildComponent} from './bookcomponent/bookchild.component';

@Component({
  selector: 'app-my-app',
  templateUrl: './app.component.html',
})
export class AppComponent {

}

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent, BookParentComponent, BookChildComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
