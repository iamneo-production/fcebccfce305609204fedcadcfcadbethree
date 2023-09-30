import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuoteComponent } from './quote.component';

describe('QuoteComponent', () => {
  let component: QuoteComponent;
  let fixture: ComponentFixture<QuoteComponent>;

  beforeEach(() => {
   TestBed.configureTestingModule({
      declarations: [QuoteComponent],
      providers: [],
    });

    fixture = TestBed.createComponent(QuoteComponent);
    component = fixture.componentInstance;
  });

  it('should create the quote component', () => {
    expect(component).toBeTruthy();
  });

  
  it('should add a quote to addedQuotes when addQuote is called with a non-empty newQuote', () => {
    const newQuote = 'New test quote';
    component.newQuote = newQuote;
    component.addQuote();
    expect(component.addedQuotes.length).toBe(1);
    expect(component.addedQuotes[0].text).toBe(newQuote);
  });

  it('should not add a quote when addQuote is called with an empty newQuote', () => {
    const initialQuotesCount = component.addedQuotes.length;
    component.newQuote = '';
    component.addQuote();
    expect(component.addedQuotes.length).toBe(initialQuotesCount);
  });

  it('should start editing a quote when startEditing is called', () => {
    const index = 0;
    component.addedQuotes.push({ text: 'Test quote', editing: false, updatedText: '' });
    component.startEditing(index);
    expect(component.addedQuotes[index].editing).toBe(true);
    expect(component.addedQuotes[index].updatedText).toBe(component.addedQuotes[index].text);
  });

  it('should update a quote when updateQuote is called', () => {
    const index = 0;
    component.addedQuotes.push({ text: 'Test quote', editing: true, updatedText: 'Updated quote' });
    component.updateQuote(index);
    expect(component.addedQuotes[index].editing).toBe(false);
    expect(component.addedQuotes[index].text).toBe('Updated quote');
    expect(component.addedQuotes[index].updatedText).toBe('');
  });

  it('should delete a quote when deleteQuote is called', () => {
    const index = 0;
    component.addedQuotes.push({ text: 'Test quote', editing: false, updatedText: '' });
    component.deleteQuote(index);
    expect(component.addedQuotes.length).toBe(0);
  });

  it('should not delete any quotes when deleteQuote is called with an invalid index', () => {
    const initialQuotesCount = component.addedQuotes.length;
    // Call deleteQuote with an invalid index
    component.deleteQuote(10);
    expect(component.addedQuotes.length).toBe(initialQuotesCount);
  });

  // Add more test cases as needed to cover other scenarios
  it('should display the title Random Quote Generator', () => {
    const titleElement = fixture.nativeElement.querySelector('h1');
    expect(titleElement.textContent).toContain('Random Quote Generator');
  });

});
