import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SynonymService } from '../synonym-service/synonym.service';
import { Synonym } from '../models/synonym.model';

@Component({
  selector: 'app-synonym-panel',
  templateUrl: './synonym-panel.component.html',
  styleUrls: ['./synonym-panel.component.scss']
})
export class SynonymPanelComponent implements OnInit {
  currentSynonyms: Synonym[] = [];
  @Output() synonymPick: EventEmitter<string> = new EventEmitter<string>();

  constructor(private synonymsService: SynonymService) {
  }

  ngOnInit() {
    this.synonymsService.synonymsChange.subscribe(synonyms => this.currentSynonyms = synonyms);
  }

  chooseSynonym({ word }: Synonym): void {
    this.synonymPick.emit(word);
  }
}
