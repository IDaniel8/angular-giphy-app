import { Component } from '@angular/core';

import { GiphyService } from '@services/giphy.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  constructor(private giphyService: GiphyService) {}

  get searchHistoric() {
    return this.giphyService.historic;
  }

  onSidebarItemClick(item: string) {
    this.giphyService.giphyImageListRequest(item);
  }
}
