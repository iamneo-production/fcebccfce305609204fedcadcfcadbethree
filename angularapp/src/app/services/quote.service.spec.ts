import { TestBed } from '@angular/core/testing';
import { QuoteService } from './quote.service';

describe('QuoteService', () => {
  let service: QuoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuoteService);
  });

  it('should create the quote service', () => {
    expect(service).toBeTruthy();
  });

  it('should return a random quote from the list', (done) => {
    service.getRandomQuote().subscribe((quote) => {
      expect(service['quotes']).toContain(quote);
      done();
    });
  });

  it('should add a new quote to the list', () => {
    const initialQuotesCount = service['quotes'].length;
    const newQuote = 'This is a new quote.';
    service.addQuote(newQuote);
    expect(service['quotes'].length).toBe(initialQuotesCount + 1);
    expect(service['quotes']).toContain(newQuote);
  });

  it('should return a random quote from the list', (done) => {
    service.getRandomQuote().subscribe((quote) => {
      expect(service['quotes']).toContain(quote);
      done();
    });
  });

  it('should return a random quote that exists in the list', (done) => {
    const customQuotes = ['Custom quote 1', 'Custom quote 2', 'Custom quote 3'];
    service['quotes'] = customQuotes;
    service.getRandomQuote().subscribe((quote) => {
      expect(customQuotes).toContain(quote);
      done();
    });
  });

  it('should add a new quote to the list', () => {
    const initialQuotesCount = service['quotes'].length;
    const newQuote = 'This is a new quote.';
    service.addQuote(newQuote);
    expect(service['quotes'].length).toBe(initialQuotesCount + 1);
    expect(service['quotes']).toContain(newQuote);
  });
});
