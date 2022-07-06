import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.scss']
})
export class TrendingComponent implements OnInit {
  isBookmarked: Boolean = false
  bookmark = '../../../assets/images/icon-bookmark-empty.svg'
  bookmarkId:number = 1
  homeData:any = []
  trending:any = []
  homeMovies:any = []

  constructor(private data: DataService) { }
  ngOnInit(): void {
    this.homeData = this.data.getData()
    this.homeData.map((data:any) => {
      if(data.isTrending === true){
        this.trending.push(data)
      }else{
        this.homeMovies.push(data)
      }
    })
    console.log(this.trending) 
  }

  toggleBookmark(id: number){
    console.log(this.isBookmarked)
    this.isBookmarked =! this.isBookmarked
    
    this.bookmarkId = id
    // if(this.bookmarkId === id){
    //   this.isBookmarked =! this.isBookmarked
    //   // if(this.isBookmarked === false){
    //   //   this.bookmark = '../../../assets/images/icon-bookmark-empty.svg'
    //   // }else{
    //   //   this.bookmark = '../../../assets/images/icon-bookmark-full.svg'
    //   // }
    // }
    console.log(id, this.bookmarkId)
    
  }

}
