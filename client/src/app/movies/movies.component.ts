import { Media } from './../_models/media';
import { Component, OnInit } from '@angular/core';
import { GetMedia } from '../_models/getMedia';
import { MediaService } from '../_services/media.service';
import { MediaType } from '../_models/mediaType';

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
