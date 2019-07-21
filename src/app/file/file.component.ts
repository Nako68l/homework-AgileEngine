import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TextService } from '../text-service/text.service';
import { SynonymService } from '../synonym-service/synonym.service';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FileComponent implements OnInit {
  text$: Promise<string>;

  constructor(
    private textService: TextService,
    private synonymsService: SynonymService,
  ) {
  }

  ngOnInit() {
    this.text$ = this.textService.getMockText();
  }

  onDbClick(): void {
    this.textService.saveSelection();
    this.synonymsService.findForWord(this.textService.selectedText);
  }
}
