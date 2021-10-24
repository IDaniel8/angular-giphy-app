import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'components-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  @Input('sideBarItems') sideBarItems: string[] = [];
  @Output('sideBarItemClick') sideBarItemClick = new EventEmitter<string>();

  selectedSideBarItem(item: string) {
    this.sideBarItemClick.emit(item);
  }

  constructor() {}
}
