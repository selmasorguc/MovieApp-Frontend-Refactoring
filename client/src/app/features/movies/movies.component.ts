import { Component, OnInit } from '@angular/core';
import { GetMedia } from 'src/app/_models/getMedia';
import { Media } from 'src/app/_models/media';
import { MediaType } from 'src/app/_models/mediaType';
import { MediaService } from 'src/app/_services/media.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: Media[] = [];
  searchQuery: string = '';
  search: any = {};
  getMediaParams: GetMedia = { page: 1, itemsPerPage: 6, mediaType: MediaType.Movie , searchQuery: ''};

  constructor(private moviesService: MediaService) { }

  ngOnInit(): void {
    this.moviesService.getMedia(this.getMediaParams).subscribe((response) => {
      this.movies = response;
    }, error => { console.log(error); });
  }
}
