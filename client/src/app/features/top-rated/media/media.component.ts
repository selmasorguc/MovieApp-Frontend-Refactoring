import { GetMedia } from '../../../core/models/getMedia';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Media } from '../../../core/models/media';
import { MediaService } from '../../../core/services/media.service';
import { SearchService } from '../../../core/services/search.service';
import { MediaType } from '../../../core/models/mediaType';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})

export class MediaComponent implements OnInit {
  movies: Media[] = [];
  tvshows: Media[] = [];
  //hiding load more buttons toggle
  loadMoviesButton: boolean = true;
  loadTVShowsButton: boolean = true;

  searchActive: boolean = false;
  getMoviesParams: GetMedia = { page: 1, itemsPerPage: 6, mediaType: MediaType.Movie , searchQuery: null};  
  getTvShowsParams: GetMedia = { page: 1, itemsPerPage: 6, mediaType: MediaType.TvShow , searchQuery: null};


  constructor(private moviesService: MediaService,
    private toastr: ToastrService) { }
  
  ngOnInit(): void {
    this.loadMovies();
    this.loadTVShows();
  }
  
//Da li bi mogla mergati loadMovies i tvshows nekako
  loadMovies() {
    this.moviesService.getMedia(this.getMoviesParams).subscribe((response) => {
      this.movies = response;
      this.getMoviesParams.page++;
    }, error => { console.log(error); });
  }

  loadTVShows() {
    this.moviesService.getMedia(this.getTvShowsParams).subscribe((response) => {
      this.tvshows = response;
      this.getTvShowsParams.page++;
    }, error => { console.log(error); });
  }

  loadMoreMovies() {
    this.moviesService.getMedia(this.getMoviesParams).subscribe((response) => {

      if (response.length === 0) {
        this.loadMoviesButton = false;
        this.toastr.warning(
          'We dont have any more movies', '');
      }

      this.movies = this.movies.concat(response);
      this.getMoviesParams.page++;
    }, error => { console.log(error); });
  }

  loadMoreTVShows() {
    this.moviesService.getMedia(this.getTvShowsParams).subscribe((response) => {

      if (response.length === 0) {
        this.loadTVShowsButton = false;
        this.toastr.warning(
          'We dont have any more TV Shows', '');
      }

      this.tvshows = this.tvshows.concat(response);
      this.getTvShowsParams.page++;
    }, error => { console.log(error); });
  }
  
  isSearching(data: any) {
    this.searchActive = data;
  }
}
