import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SynonymService } from '../synonym-service/synonym.service';
import { Synonym } from '../models/synonym.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-synonym-panel',
  templateUrl: './synonym-panel.component.html',
  styleUrls: ['./synonym-panel.component.scss']
})
export class SynonymPanelComponent implements OnInit {
  currentSynonyms$: Observable<Synonym[]>;
  @Output() synonymPick: EventEmitter<string> = new EventEmitter<string>();

  constructor(private synonymsService: SynonymService) {
  }

  ngOnInit() {
    this.currentSynonyms$ = this.synonymsService.synonymsChange;
  }

  chooseSynonym({ word }: Synonym): void {
    this.synonymPick.emit(word);
  }
}
