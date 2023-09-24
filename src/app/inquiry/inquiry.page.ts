import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { InputTextComponent } from '../components/input-text/input-text.component';
import { PaginatorComponent } from '../components/paginator/paginator.component';
import { SelectComponent } from '../components/select/select.component';

@Component({
  selector: 'app-inquiry',
  templateUrl: './inquiry.page.html',
  styleUrls: ['./inquiry.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    PaginatorComponent,
    InputTextComponent,
    SelectComponent,
  ],
})
export default class InquiryPage {}
