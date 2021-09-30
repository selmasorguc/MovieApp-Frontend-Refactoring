import { Component, OnInit } from '@angular/core';
import { GetMedia } from 'src/app/_models/getMedia';
import { Media } from 'src/app/_models/media';
import { MediaType } from 'src/app/_models/mediaType';
import { MediaService } from 'src/app/_services/media.service';

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.css']
})
export class TvShowsComponent implements OnInit {
  tvshows: Media[] = [];
  getMediaParams: GetMedia = { page: 1, itemsPerPage: 6, mediaType: MediaType.Movie , searchQuery: ''};

  constructor(private moviesService: MediaService) { }

  ngOnInit(): void {
    this.moviesService.getMedia(this.getMediaParams).subscribe((response) => {
      this.tvshows = response;
    }, error => { console.log(error); });
  }
}
