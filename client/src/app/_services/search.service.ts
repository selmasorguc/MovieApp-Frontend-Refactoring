import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetMedia } from '../_models/getMedia';
import { Media } from '../_models/media';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  baseUrl: string = "https://localhost:44317/api/";

  constructor(private http: HttpClient) { }

  searchMedia(getMediaParams: GetMedia) {
    let params = new HttpParams().set("SearchQuery", getMediaParams.searchQuery);
    return this.http.get<Media[]>(this.baseUrl + "media", { params: params });
  }

}
