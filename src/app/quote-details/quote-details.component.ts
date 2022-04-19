import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input()
  quote!: Quote;
  @Output()
  seen = new EventEmitter<boolean>();

  numberOfLikes : number = 0;
  numberOfDislikes : number = 0;

  deleteQuote(isSeen:boolean){
    this.seen.emit(isSeen);
  }

  upVote(){
    this.numberOfLikes++;
  }
  downVote(){
    this.numberOfDislikes++;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
