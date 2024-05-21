import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Product } from '../schema';
import { ProductService } from '../data';

import { TableModule } from 'primeng/table';

interface Column {
  field: string;
  header: string;
}

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [TableModule, CommonModule],
  providers: [ProductService],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})

export class Table implements OnInit {
  products!: Product[];

  cols!: Column[];
  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts().then((data) => {
      // console.log('inside', data);
      this.products = data;
    });
    // console.log('products', this.products, typeof this.products);
    
    this.cols = [
      { field: 'code', header: 'Code' },
      { field: 'name', header: 'Name' },
      { field: 'category', header: 'Category' },
      { field: 'quantity', header: 'Quantity' },
    ];
  }
}
