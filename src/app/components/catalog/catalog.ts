import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanierService } from '../../service/panier';

@Component({
  selector: 'app-catalogue',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catalog.html',
  styleUrls: ['./catalog.scss']
})
export class CatalogueComponent {
  constructor(private panierService: PanierService) {}

  ajouterAuPanier(produit: any): void {
    console.log('Ajout au panier :', produit);
    this.panierService.ajouterProduit(produit);
  }
}
