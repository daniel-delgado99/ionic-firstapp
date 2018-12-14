import { Quote } from "../data/quote.interface";

export class QuotesService {
    private favoriteQuotes: Quote[] = [{
        id: '4',
        person: 'John Wooden',
        text: 'Ability may get you to the top, but it takes character to keep you there.'
      }];

    addQuoteToFavorites(quote: Quote) {
        this.favoriteQuotes.push(quote);
        // console.log(this.favoriteQuotes);
    }

    removeQuoteToFavorites(quote: Quote) {
        const position = this.favoriteQuotes.findIndex((quoteElement: Quote) => {
            return quoteElement.id == quote.id;
        });
        this.favoriteQuotes.splice(position, 1);
    }

    getFavoriteQuotes() {
        return this.favoriteQuotes.slice();
    }

    isQuoteFavorite(quote: Quote) {
        return this.favoriteQuotes.find((quoteEl: Quote) => {
            return quoteEl.id == quote.id;
        });
    }
}