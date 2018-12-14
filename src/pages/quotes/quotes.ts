import { Component } from '@angular/core';
import { IonicPage, NavParams, AlertController } from 'ionic-angular';
import { Quote } from '../../data/quote.interface';
import { QuotesService } from '../../services/quotes';
import { SettingsProvider } from '../../providers/settings/settings';

@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage {
  selectedTheme: string;
  quoteGroup: {
    category: string,
    quotes: Quote[],
    icon: string
  }

  constructor (private navParams: NavParams, private alertCtrl: AlertController, private quoteService: QuotesService, private settingsProvider: SettingsProvider) {
    this.quoteGroup = this.navParams.data;
    this.settingsProvider.getActiveTheme().subscribe(val => this.selectedTheme = val);
  }

  onAddToFavorite(quote: Quote) {
    const alert = this.alertCtrl.create({
      title: 'Add quote',
      message: 'Do you want to add this quote to favorites?',
      cssClass: this.selectedTheme,
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
