import { Component, OnInit } from '@angular/core';
import { VocabService } from '../vocab.service';

@Component({
  selector: 'app-fragenanzeigen-page',
  templateUrl: './fragenanzeigen-page.page.html',
  styleUrls: ['./fragenanzeigen-page.page.scss'],
})
export class FragenanzeigenPagePage implements OnInit {

  fragen;

  constructor(private vocabService: VocabService) { }

  ngOnInit() {
    this.fragen=this.vocabService.fragen
  }

}
