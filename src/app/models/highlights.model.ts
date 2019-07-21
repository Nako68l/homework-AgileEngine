import { FONT_STYLE } from './format.model';
import { STYLE_TAG } from './style-tag.model';

export type HighlightsModel = Record<FONT_STYLE, boolean>;

export class Highlights implements HighlightsModel {
  bold = false;
  italic = false;
  underline = false;

  saveForTag(tag: STYLE_TAG) {
    switch (tag) {
      case STYLE_TAG.Bold:
        this.bold = true;
        break;
      case STYLE_TAG.Italic:
        this.italic = true;
        break;
      case STYLE_TAG.Underline:
        this.underline = true;
        break;
    }
  }

  toggleForStyle(style: FONT_STYLE) {
    switch (style) {
      case FONT_STYLE.Bold:
        this.bold = !this.bold;
        break;
      case FONT_STYLE.Italic:
        this.italic = !this.italic;
        break;
      case FONT_STYLE.Underline:
        this.underline = !this.underline;
        break;
    }
  }
}
