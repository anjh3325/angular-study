import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  CardComponent,
  Product,
  ProductType,
} from 'src/app/components/card/card.component';
import { PaginatorComponent } from 'src/app/components/paginator/paginator.component';
import {
  Category,
  SmallCategoryComponent,
} from 'src/app/components/small-category/small-category.component';

type Legion = {
  name: string;
};
@Component({
  selector: 'app-domestic-travel.page',
  templateUrl: './domestic-travel.page.html',
  styleUrls: ['./domestic-travel.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    PaginatorComponent,
    CardComponent,
    SmallCategoryComponent,
  ],
})
export default class DomesticPage {
  selectedButton: string | null = '전체';

  changeButtonColor(buttonId: string) {
    // 버튼을 클릭할 때 해당 버튼의 상태를 변경합니다.
    this.selectedButton = buttonId;
  }
  legions: Legion[] = [
    { name: '전체' },
    { name: '수도권' },
    { name: '전라권' },
    { name: '경상권' },
    { name: '충청권' },
    { name: '제주권' },
    { name: '강원권' },
  ];
  products: Product[] = [
    {
      type: ProductType.FOREIGN,
      company: '스카이필 단독상품',
      image: 'assets/images/Rectangle1.png',
      price: 1042525,
      title: '[비즈니스/클래스] “백야! 한 밤의 태양을 즐겨라” 북유럽 4개국',
    },
    {
      type: ProductType.DOMESTIC,
      company: '광주 여행사',
      image: 'assets/images/Rectangle2.png',
      price: 9202100,
      title:
        '[정통][래디슨][오션뷰X마사지UP][#바나힐 #한시장 #스테이크]▶다낭,호이안...',
    },
    {
      type: ProductType.FOREIGN,
      company: '스카이필 단독상품',
      image: 'assets/images/Rectangle3.png',
      price: 2199000,
      title:
        "[추석연휴 특별기획][대한항공][가을낭만 '특급료칸♨+식도락'] 오카야마&돗토...",
    },
    {
      type: ProductType.FOREIGN,
      company: '스카이필 단독상품',
      image: 'assets/images/Rectangle4.png',
      price: 1899000,
      title:
        '[추석연휴 특별기획][대한항공 고마츠 직항][가을빛 수놓은 오색 단풍] 도야마...',
    },
    {
      type: ProductType.FOREIGN,
      company: '스카이필 단독상품',
      image: 'assets/images/Rectangle1.png',
      price: 1042525,
      title: '[비즈니스/클래스] “백야! 한 밤의 태양을 즐겨라” 북유럽 4개국',
    },
    {
      type: ProductType.DOMESTIC,
      company: '광주 여행사',
      image: 'assets/images/Rectangle2.png',
      price: 9202100,
      title:
        '[정통][래디슨][오션뷰X마사지UP][#바나힐 #한시장 #스테이크]▶다낭,호이안...',
    },
    {
      type: ProductType.FOREIGN,
      company: '스카이필 단독상품',
      image: 'assets/images/Rectangle3.png',
      price: 2199000,
      title:
        "[추석연휴 특별기획][대한항공][가을낭만 '특급료칸♨+식도락'] 오카야마&돗토...",
    },
    {
      type: ProductType.FOREIGN,
      company: '스카이필 단독상품',
      image: 'assets/images/Rectangle4.png',
      price: 1899000,
      title:
        '[추석연휴 특별기획][대한항공 고마츠 직항][가을빛 수놓은 오색 단풍] 도야마...',
    },
    {
      type: ProductType.FOREIGN,
      company: '스카이필 단독상품',
      image: 'assets/images/Rectangle3.png',
      price: 2199000,
      title:
        "[추석연휴 특별기획][대한항공][가을낭만 '특급료칸♨+식도락'] 오카야마&돗토...",
    },
    {
      type: ProductType.FOREIGN,
      company: '스카이필 단독상품',
      image: 'assets/images/Rectangle4.png',
      price: 1899000,
      title:
        '[추석연휴 특별기획][대한항공 고마츠 직항][가을빛 수놓은 오색 단풍] 도야마...',
    },
  ];

  categories: Category[] = [
    {
      name: '광주',
    },
    {
      name: '전남',
    },
  ];
}
