import { Inject, Injectable } from '@angular/core';
import { FONT_STYLE } from '../models/format.model';
import { DOCUMENT } from '@angular/common';
import { SynonymService } from '../synonym-service/synonym.service';

@Injectable()
export class TextService {
  savedSelection: Range | null;

  constructor(
    private synonymsService: SynonymService,
    @Inject(DOCUMENT) private doc: Document) {
  }

  getMockText() {
    return new Promise<string>(resolve => {
      resolve('A year ago I was in the audience at a gathering of designers in San Francisco. ' +
        'There were four designers on stage, and two of them worked for me. I was there to support them. ' +
        'The topic of design responsibility came up, possibly brought up by one of my designers, I honestly don’t remember the details. ' +
        'What I do remember is that at some point in the discussion I raised my hand and suggested, to this group of designers, ' +
        'that modern design problems were very complex. And we ought to need a license to solve them.');
    });
  }

  saveSelection(): void {
    const sel = this.doc.getSelection();
    if (!sel.rangeCount) {
      return;
    }

    this.savedSelection = sel.getRangeAt(0);
    this.synonymsService.findForWord(sel.toString());
  }

  replaceSelection(replacementWord: string): void {
    this.savedSelection.deleteContents();
    const insertionText = replacementWord + ' ';
    this.savedSelection.insertNode(document.createTextNode(insertionText));
  }

  toggleStyle(style: FONT_STYLE) {
    this.doc.execCommand(style);
  }
}
