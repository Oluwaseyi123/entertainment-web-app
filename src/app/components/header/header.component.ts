import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  icons = {
    bookmarkFull: '../../../assets/images/icon-bookmark-full.svg',
    bookmark: '../../../assets/images/icon-nav-bookmark.svg',
    home: '../../../assets/images/icon-nav-home.svg',
    homeFull: '../../../assets/images/icon-nav-home-full.svg',
    movies: '../../../assets/images/icon-nav-movies.svg',
    moviesFull: '../../../assets/images/icon-nav-movies-full.svg',
    tvSeries: '../../../assets/images/icon-nav-tv-series.svg',
    tvSeriesFull: '../../../assets/images/icon-nav-tv-series-full.svg'

  }

  constructor() { }

  ngOnInit(): void {
  }

}
