import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-tv-series',
  templateUrl: './tv-series.component.html',
  styleUrls: ['./tv-series.component.scss']
})
export class TvSeriesComponent implements OnInit {
  isBookmarked: Boolean = false
  bookmark = '../../../assets/images/icon-bookmark-empty.svg'
  bookmarkId:number = 1
  homeData:any = []
  tvSeries:any = []

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.homeData = this.data.getData()
    this.homeData.map((data:any) => {
      if(data.category === 'TV Series'){
        this.tvSeries.push(data)
      }
    })
  }

}
