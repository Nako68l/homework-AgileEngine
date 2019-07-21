import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FONT_STYLE } from '../models/format.model';
import { TextService } from '../text-service/text.service';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ControlPanelComponent {
  fontStyle = FONT_STYLE;

  constructor(private textService: TextService) {
  }

  toggleFontStyle(style: FONT_STYLE) {
    this.textService.toggleStyle(style);
  }
}
