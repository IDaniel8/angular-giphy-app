import { Component } from '@angular/core';
import { GiphyService } from '@services/giphy.service';

@Component({
  selector: 'dashboard-search',
  templateUrl: './search.component.html',
})
export class SearchComponent {
  constructor(private giphyService: GiphyService) {}

  onSearchEnter(ev: Event) {
    const inputEl = ev.target as HTMLInputElement;
    const inputValue = inputEl.value.trim();

    if (!inputValue) return;

    this.giphyService.giphyImageListRequest(inputValue);
    inputEl.value = '';
  }
}
