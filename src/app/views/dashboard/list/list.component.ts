import { Component } from '@angular/core';
import { GiphyService } from '@services/giphy.service';

@Component({
  selector: 'dashboard-list',
  templateUrl: './list.component.html',
})
export class ListComponent {
  constructor(private giphyService: GiphyService) {}

  get searchImageList() {
    return this.giphyService.imageList;
  }
}
