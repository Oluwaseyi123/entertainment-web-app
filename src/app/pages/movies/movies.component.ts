import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  isBookmarked: Boolean = false
  bookmark = '../../../assets/images/icon-bookmark-empty.svg'
  bookmarkId:number = 1
  homeData:any = []
  movies:any = []

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.homeData = this.data.getData()
    this.homeData.map((data:any) => {
      if(data.category === 'Movie'){
        this.movies.push(data)
      }
    })
  }

}
