import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes:Quote[] = [
    new Quote(1, 'Change is the only constant in life.', 'Heraclitus, the Greek Philosopher', 'Mimi Kesa', new Date(2022,4,18)),
    new Quote(2, 'When you have something to say, silence is a lie.', 'Jordan Peterson', 'Anonymous', new Date(2022,4,12))
  ];

  viewDetails(index: any){
    this.quotes[index].showDetail = !this.quotes[index].showDetail
  }
  
  addAQuote(quote:any){
    let allQuotesLength = this.quotes.length;
    quote.id = allQuotesLength + 1;
    quote.completeDate = new Date(quote.postDate);
    this.quotes.push(quote);
  }

  hideQuote(seen:any, index:number){
    if(seen) {
      let toHide = confirm(`Are you sure you want to delete quote?`)
      
      if (toHide){
        this.quotes.splice(index,1);
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
