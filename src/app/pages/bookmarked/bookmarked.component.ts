import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-bookmarked',
  templateUrl: './bookmarked.component.html',
  styleUrls: ['./bookmarked.component.scss']
})
export class BookmarkedComponent implements OnInit {
  isBookmarked: Boolean = false
  bookmark = '../../../assets/images/icon-bookmark-empty.svg'
  bookmarkId:number = 1
  homeData:any = []
  bookmarkedMovies:any = []
  bookmarkedSeries:any = []

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.homeData = this.data.getData()
    this.homeData.map((data:any) => {
      if(data.isBookmarked === true && data.category === 'TV Series'){
       return this.bookmarkedSeries.push(data)
      }

      if(data.isBookmarked === true && data.category === 'Movie'){
        return this.bookmarkedMovies.push(data)
      }

    })
  }
}
