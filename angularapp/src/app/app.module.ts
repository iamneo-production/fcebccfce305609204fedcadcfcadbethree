import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteService } from './services/quote.service';

@NgModule({
  declarations: [AppComponent, QuoteComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule], // Add FormsModule
  providers: [QuoteService],
  bootstrap: [AppComponent],
})
export class AppModule {}
