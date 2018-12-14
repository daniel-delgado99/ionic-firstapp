import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, reorderArray } from 'ionic-angular';

import { Quote } from '../../data/quote.interface';
import quotes from '../../data/quotes';
import { QuotesPage } from '../quotes/quotes';

@IonicPage()
@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage implements OnInit {
  quoteCollection: {
    category: string,
    quotes: Quote[],
    icon: string
  }[];

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
    this.quoteCollection = quotes;
  }

  onClickQuoteGroup(quoteGroup: {category: string, quotes: Quote[], icon: string}) {
    this.navCtrl.push(QuotesPage, quoteGroup)
  }

  reorderItems(indexes){
    this.quoteCollection = reorderArray(this.quoteCollection, indexes);
  }
}
