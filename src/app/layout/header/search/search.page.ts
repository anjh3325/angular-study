import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { RouterModule } from '@angular/router';
import { PaginatorComponent } from 'src/app/components/paginator/paginator.component';
import {
  Category,
  SmallCategoryComponent,
} from 'src/app/components/small-category/small-category.component';

type SearchProduct = {
  img?: string;
  content?: string;
  date?: string;
  region: string;
  price?: number;
};

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    PaginatorComponent,
    SmallCategoryComponent,
    RouterModule,
  ],
})
export default class SearchPage {
  products: SearchProduct[] = [
    {
      img: 'assets/images/searchImg1.jpg',
      content:
        '[카텔][2박3일] 아이브호텔앤리조트 자유여행 #오션뷰+테라스 #중형렌터카 #고급자차보험서귀포 숲속의 조용한 휴식을 위한[아이브호텔]',
      date: '2박 3일',
      region: '제주도 서귀포시',
      price: 69000,
    },
    {
      img: 'assets/images/searchImg1.jpg',
      content: '[카텔][2박3일] 빠레브호텔 자유여행 #중형렌터카 #고급자차보험',
      date: '2박 3일',
      region: '제주도 서귀포시',
      price: 69000,
    },
    {
      img: 'assets/images/searchImg1.jpg',
      content:
        '[카텔][2박3일] 오션스위츠호텔 자유여행#선착순 오션뷰업 #중형렌터카 #고급자차보험',
      date: '2박 3일',
      region: '제주도 서귀포시',
      price: 95000,
    },
    {
      img: 'assets/images/searchImg1.jpg',
      content:
        '[카텔][2박3일] 아이브호텔앤리조트 자유여행 #오션뷰+테라스 #중형렌터카 #고급자차보험서귀포 숲속의 조용한 휴식을 위한[아이브호텔]',
      date: '2박 3일',
      region: '제주도 서귀포시',
      price: 97000,
    },
    {
      img: 'assets/images/searchImg1.jpg',
      content:
        '[카텔][2박3일] 오션스위츠호텔 자유여행#선착순 오션뷰업 #중형렌터카 #고급자차보험',
      date: '2박 3일',
      region: '제주도 서귀포시',
      price: 97000,
    },
  ];

  categories: Category[] = [
    {
      name: '전체',
    },
    {
      name: '내나라여행',
    },
    {
      name: '해외여행',
    },
  ];

  constructor() {}
}
