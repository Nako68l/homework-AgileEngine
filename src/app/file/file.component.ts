import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { TextService } from '../text-service/text.service';
import { DOCUMENT } from '@angular/common';

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
    @Inject(DOCUMENT) private doc: any
  ) {
  }

  ngOnInit() {
    this.text$ = this.textService.getMockText();
  }

  onDbClick(): void {
    this.textService.saveSelection();
  }
}
