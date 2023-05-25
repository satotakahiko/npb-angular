import { Component, AfterViewInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Team } from '../team';

@Component({
  selector: 'app-team-info',
  templateUrl: './team-info.component.html',
  styleUrls: ['./team-info.component.scss']
})
export class TeamInfoComponent implements AfterViewInit {
  @Input() items = {} as Team

  @ViewChild("block") block?: ElementRef

  formatDate(date: string, format: string) {
    const d = new Date(date)
    format = format.replace(/YYYY/, d.getFullYear().toString())
    format = format.replace(/MM/, (d.getMonth() + 1).toString())
    format = format.replace(/DD/, d.getDate().toString())

    return format
  }

  ngAfterViewInit() {
    if (this.block !== undefined) {
      this.block.nativeElement.style.borderLeft = `5px solid #${this.items.color}`
    }
  }
}
