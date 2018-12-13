import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { FavoritesPage } from '../favorites/favorites';
import { LibraryPage } from '../library/library';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  favoritesPage = FavoritesPage;
  libraryPage = LibraryPage;
}
