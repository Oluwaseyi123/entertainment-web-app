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
  homeData: any
  trending: any = []
  homeMovies: any = []

  constructor(private data: DataService) { }
  ngOnInit(): void {
    this.homeData = this.data.getData()
    localStorage.setItem('home', JSON.stringify(this.homeData))
    this.homeData = localStorage.getItem('home')
    this.homeData = JSON.parse(this.homeData)

      this.homeData.map((data:any) => {
        if(data.isTrending === true){
          this.trending.push(data)
        }else{
          this.homeMovies.push(data)
        }
      })
  }
  toggleBookmark() {
    localStorage.setItem('home', JSON.stringify(this.homeData))
    console.log('me')
  }
}
