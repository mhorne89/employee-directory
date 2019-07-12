import {Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl} from '@angular/platform-browser';

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {

  constructor(protected _sanitizer: DomSanitizer) {}

  public transform(value: string): SafeHtml | SafeStyle | SafeScript | SafeUrl | SafeResourceUrl {
    return this._sanitizer.bypassSecurityTrustUrl('slack://user?team=T03V4KJ79&id=' + value);
  }
}
