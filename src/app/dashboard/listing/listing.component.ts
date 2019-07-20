import { Component, OnInit } from '@angular/core';
import { ListingService } from 'src/app/core/services/listing.service';
import { Evento } from 'src/app/shared/event.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {

  public evento: Evento[];

  constructor(
    private listing: ListingService
  ) {

  }

  ngOnInit() {
    this.listing.eventListin().subscribe(result => {
      this.evento = result;
      console.log(this.evento);
    });
    //this.event = this.listing.eventListin();

  }

}
