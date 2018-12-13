import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

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
  // quotesPage: QuotesPage;

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
    this.quoteCollection = quotes;
  }

  onClickQuoteGroup(quoteGroup: {category: string, quotes: Quote[], icon: string}) {
    this.navCtrl.push(QuotesPage, quoteGroup)
  }
}
