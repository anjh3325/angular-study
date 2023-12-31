import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent {
  isOpen = false;
  @Input() class = '';
  @Input() values: string[] = [];

  @Input() selectedValue: string = '';
  selectValue(value: string) {
    this.selectedValue = value;
  }
}
