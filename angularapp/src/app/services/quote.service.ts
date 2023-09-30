import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuoteService {
  private quotes: string[] = [
    'The future belongs to those who believe in the beauty of their dreams. -Eleanor Roosevelt',
    'If you set your goals ridiculously high and it is a failure, you will fail above everyone else success.',
    'Do not go where the path may lead, go instead where there is no path and leave a trail. -Ralph Waldo Emerson',
    'Spread love everywhere you go. Let no one ever come to you without leaving happier.',
    'You will face many defeats in life, but never let yourself be defeated.',// Add more quotes here
  ];

  getRandomQuote(): Observable<string> {
    const randomIndex = Math.floor(Math.random() * this.quotes.length);
    return of(this.quotes[randomIndex]);
  }
  addQuote(newQuote: string): void {
    this.quotes.push(newQuote);
  }
}
