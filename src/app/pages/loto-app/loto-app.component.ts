import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NumRow } from 'src/app/model/num-row';
import { LotoService } from 'src/app/service/loto.service';

@Component({
  selector: 'loto-app',
  templateUrl: './loto-app.component.html',
  styleUrls: ['./loto-app.component.scss']
})
export class LotoAppComponent implements OnInit {

  constructor(private lotoService: LotoService) { }
  lotoMat$: Observable<NumRow[]> | any


  ngOnInit(): void {
    this.lotoMat$ = this.lotoService.lotoMat$
    this.lotoService.query()
  }

}
