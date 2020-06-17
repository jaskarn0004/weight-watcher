import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { LoaderService } from '../shared/services/loader.service';

@Component({
  selector: 'app-apploader',
  templateUrl: './apploader.component.html',
  styleUrls: ['./apploader.component.css']
})
export class ApploaderComponent implements OnInit {

  isLoading: Subject<boolean> = this.loaderService.isLoading;
  
  constructor(private loaderService: LoaderService) { }

  ngOnInit(): void {
  }

}
