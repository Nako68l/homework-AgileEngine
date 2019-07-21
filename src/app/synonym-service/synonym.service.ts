import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Synonym } from '../models/synonym.model';

@Injectable({
  providedIn: 'root'
})
export class SynonymService {
  private synonymsSubj = new Subject<Synonym[]>();
  synonymsChange = this.synonymsSubj.asObservable();

  constructor(private http: HttpClient) {
  }

  findForWord(word: string): void {
    const params = {
      rel_syn: word.trim()
    };
    this.http.get<Synonym[]>('https://api.datamuse.com/words', { params }).subscribe(synonyms => {
      this.synonymsSubj.next(synonyms);
    });
  }
}
