import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  imports: [CommonModule],
  selector: 'app-child',
  standalone: true,
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent {
  checkboxState: boolean[] = [];
  selectedColorIds: number[] = [];
  @Input() colors: any;
  @Output() download = new EventEmitter();

  ddd(i: number) {
    this.checkboxState[i] = !this.checkboxState[i];
    let colorId = this.colors[i].id;
    //  console.log({ colorId });
    if (this.checkboxState[i]) {
      this.selectedColorIds.push(colorId);
      console.log({ tdd: this.selectedColorIds });
    } else {
      this.selectedColorIds = this.selectedColorIds.filter(
        (id) => id !== colorId
      );
    }
    console.log({ aa: this.selectedColorIds });
    this.download.emit(this.selectedColorIds);
  }
}
