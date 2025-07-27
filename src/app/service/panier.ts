import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  private panier: any[] = [];

  constructor() {
    if (typeof window !== 'undefined') {
      const panierStocke = localStorage.getItem('panier');
      if (panierStocke) {
        this.panier = JSON.parse(panierStocke);
      }
    }
  }

  ajouterProduit(produit: any) {
    this.panier.push(produit);
    if (typeof window !== 'undefined') {
      localStorage.setItem('panier', JSON.stringify(this.panier));
    }
  }

  getPanier(): any[] {
    return this.panier;
  }
}
