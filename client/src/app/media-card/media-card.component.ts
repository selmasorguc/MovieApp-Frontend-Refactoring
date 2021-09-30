import { Component, Input, OnInit } from '@angular/core';
import { Media } from '../_models/media';
import { Rating } from '../_models/rating';
import { MediaService } from '../_services/media.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
import { ServiceResponse } from '../_models/serviceResponse';

@Component({
  selector: 'app-media-card',
  templateUrl: './media-card.component.html',
  styleUrls: ['./media-card.component.css']
})
export class MediaCardComponent implements OnInit {
  @Input() movie!: Media;
  rate = 0;
  max = 5;
  isReadonly = false;

  constructor(private mediaService: MediaService, private toastr: ToastrService,
    private spinner: NgxSpinnerService) {
  }

  
  ngOnInit(): void {
    this.mediaService.getCurrentAverageRating(this.movie.id).subscribe(
      (response: ServiceResponse<number>) => {
      this.rate = response.data;
    });
  }

  getRating($event: any) {
    var newRating: Rating = { value: this.rate, mediaId: this.movie.id };
    this.movie.ratings.push(newRating);
    this.mediaService.addRating(newRating).subscribe((response: ServiceResponse<number>) => {
      this.rate = response.data;
      this.toastr.success(
        'Thank you for leaving a rating', '',
        {
          positionClass: 'toast-bottom-center',
          tapToDismiss: true,
          closeButton: true
        });
      
      this.spinner.show();

      setTimeout(() => {
        this.spinner.hide();
        location.reload();
      }, 1300);
    })
  }

}
