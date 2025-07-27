import { Component, OnInit } from '@angular/core';
import { PanierService } from '../../service/panier';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.html',
  imports: [
    NgIf,
    NgForOf
  ],
  styleUrls: ['./panier.scss']
})
export class PanierComponent implements OnInit {
  panier: any[] = [];

  constructor(private panierService: PanierService) {}

  ngOnInit(): void {
    this.panier = this.panierService.getPanier();
  }
}
