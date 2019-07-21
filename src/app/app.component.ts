import { Component } from '@angular/core';
import { TextService } from './text-service/text.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Simple Text Editor';

  constructor(
    private textService: TextService
  ) {
  }

  onSynonymPick(synonym: string): void {
    this.textService.replaceSelection(synonym);
  }
}
