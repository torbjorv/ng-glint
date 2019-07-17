import { Component, ViewChild } from '@angular/core';
import { ShinyFrameComponent } from './shiny-frame/shiny-frame.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'directive-experiment';

  @ViewChild('shiny', { static: false })
  private _shiny: ShinyFrameComponent;

  public flash() {
    this._shiny.highlight();
  }
}
