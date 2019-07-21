import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import { Highlights } from '../models/highlights.model';
import { FONT_STYLE } from '../models/format.model';
import { STYLE_TAG } from '../models/style-tag.model';

@Injectable()
export class TextService {
  private savedSelection: Range | null;
  private currentHighlights: Highlights;
  private highlightSubject = new BehaviorSubject<Highlights>(new Highlights());
  highlightsChange = this.highlightSubject.asObservable();
  selectedText: string;

  constructor(
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
    this.selectedText = sel.toString();

    this.highlightControls();
  }

  replaceSelection(replacementWord: string): void {
    this.savedSelection.deleteContents();
    const insertionText = replacementWord + ' ';
    this.savedSelection.insertNode(this.doc.createTextNode(insertionText));
  }

  toggleStyle(style: FONT_STYLE) {
    this.doc.execCommand(style);
    this.toggleHighlight(style);
  }

  private toggleHighlight(style: FONT_STYLE) {
    this.currentHighlights.toggleForStyle(style);
    this.emitHighlights();
  }

  private highlightControls(): void {
    this.currentHighlights = new Highlights();

    const editorElement = this.doc.querySelector('.file');
    let currentElement = this.savedSelection.startContainer.parentNode;

    while (!editorElement.isEqualNode(currentElement)) {
      this.currentHighlights.saveForTag(currentElement.nodeName as STYLE_TAG);
      currentElement = currentElement.parentNode;
    }

    this.emitHighlights();
  }

  private emitHighlights() {
    this.highlightSubject.next(this.currentHighlights);
  }
}
