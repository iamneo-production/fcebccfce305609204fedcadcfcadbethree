import { Component, OnInit } from '@angular/core';
import { QuoteService } from '../services/quote.service';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
})
export class QuoteComponent implements OnInit {
  randomQuote: string = '';
  newQuote: string = '';
  addedQuotes: { text: string; editing: boolean; updatedText: string }[] = [];

  constructor(private quoteService: QuoteService) {}

  ngOnInit(): void {
    this.fetchRandomQuote();
  }

  fetchRandomQuote(): void {
    this.quoteService.getRandomQuote().subscribe((quote) => {
      this.randomQuote = quote;
    });
  }

  addQuote(): void {
    if (this.newQuote.trim() !== '') {
      // Generate a random index to insert the new quote
      const randomIndex = Math.floor(Math.random() * (this.addedQuotes.length + 1));
      this.addedQuotes.splice(randomIndex, 0, {
        text: this.newQuote,
        editing: false,
        updatedText: '',
      });
      this.newQuote = '';
    }
  }

  startEditing(index: number): void {
    this.addedQuotes[index].editing = true;
    this.addedQuotes[index].updatedText = this.addedQuotes[index].text;
  }

  updateQuote(index: number): void {
    this.addedQuotes[index].text = this.addedQuotes[index].updatedText;
    this.addedQuotes[index].editing = false;
    this.addedQuotes[index].updatedText = '';
  }

  deleteQuote(index: number): void {
    this.addedQuotes.splice(index, 1);
  }
}
