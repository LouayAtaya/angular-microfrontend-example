import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  product: Product[] = [];
  state = true;
  j = 0;
  checked = false;
  loading = false;
  indeterminate = false;
  listOfCurrentPageData: readonly Product[] = [];
  setOfCheckedId = new Set<number>();
  ngOnInit(): void {
    this.fillProduct();
  }

  fillProduct() {
    for (let i = 0; i < 30; i++) {
      this.state = !this.state;
      this.j = i;
      this.product.push({
        checked: !this.state,
        id: i,
        imageUrl: "https://www.shutterstock.com/image-illustration/lorem-image-size-1x1-square-250nw-1865028457.jpg",
        name: `product_${i}`,
        id2: `${i}#`,
        tax: 2 * this.j + 1,
        category: `category_${this.j}`,
        inventory: this.state,
        quantity: this.j * 2 - 1,
        price: this.j * 2,
        activate: !this.state,
        details: '',
      });
    }
  }

  updateCheckedSet(id: number, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(id);
    } else {
      this.setOfCheckedId.delete(id);
    }
  }

  onCurrentPageDataChange($event: readonly Product[]): void {
    this.listOfCurrentPageData = $event;
    this.refreshCheckedStatus();
  }

  refreshCheckedStatus(): void {
    this.checked = this.listOfCurrentPageData.every(item => this.setOfCheckedId.has(item.id));
    this.indeterminate = this.listOfCurrentPageData.some(item => this.setOfCheckedId.has(item.id)) && !this.checked;
  }

  onItemChecked(id: number, checked: boolean): void {
    this.updateCheckedSet(id, checked);
    this.refreshCheckedStatus();
  }

  onAllChecked(checked: boolean): void {
    this.listOfCurrentPageData
      .forEach(({ id }) => this.updateCheckedSet(id, checked));
    this.refreshCheckedStatus();
  }
}


export interface Product {
  checked: boolean;
  id: number;
  imageUrl: string;
  name: string;
  id2: string;
  tax: number;
  category: string;
  inventory: boolean;
  quantity: number;
  price: number;
  activate: boolean;
  details: string;
}
