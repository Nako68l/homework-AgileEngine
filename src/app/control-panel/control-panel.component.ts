import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FONT_STYLE } from '../models/format.model';
import { TextService } from '../text-service/text.service';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ControlPanelComponent implements OnInit {
  fontStyle = FONT_STYLE;
  highlights$;

  constructor(private textService: TextService) {
  }

  ngOnInit(): void {
    this.highlights$ = this.textService.highlightsChange;
  }

  toggleFontStyle(style: FONT_STYLE) {
    this.textService.toggleStyle(style);
  }
}
