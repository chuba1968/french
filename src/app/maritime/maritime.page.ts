import { Component, OnInit } from '@angular/core';
import algoliasearch from 'algoliasearch/lite';
const searchClient = algoliasearch(
  'LV13LYPZFQ',
  '05b5390fed8b0294c7269b4de0b2e8e1'
);
@Component({
  selector: 'app-maritime',
  templateUrl: './maritime.page.html',
  styleUrls: ['./maritime.page.scss'],
})
export class MaritimePage implements OnInit {

  config = {
    indexName: 'players',
    searchClient
  };

  constructor() { }

  ngOnInit() {
  }

}
