import { Component } from '@angular/core';
import { IonicPage, NavParams, AlertController } from 'ionic-angular';
import { Quote } from '../../data/quote.interface';
import { QuotesService } from '../../services/quotes';

@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage {
  quoteGroup: {
    category: string,
    quotes: Quote[],
    icon: string
  }

  constructor (private navParams: NavParams, private alertCtrl: AlertController, private quoteService: QuotesService) {
    this.quoteGroup = this.navParams.data;
  }

  onAddToFavorite(quote: Quote) {
    const alert = this.alertCtrl.create({
      title: 'Add quote',
      subTitle: 'Are you sure?',
      message: 'Are you really sure sure?',
      buttons: [{
        text: 'Yes, let\'s go ahead',
        handler: () => {
          this.quoteService.addQuoteToFavorites(quote);
        }
      },
      {
        text: 'No, ignore it',
        role: 'cancel',
        // handler: () => {
        //   console.log('cancelled');
        // }
      }]
    });
    alert.present();
  }

  onRemoveToFavorite(quote: Quote) {
    this.quoteService.removeQuoteToFavorites(quote);
  }

  isFavorite(quote: Quote) {
    return this.quoteService.isQuoteFavorite(quote);
  }
}
