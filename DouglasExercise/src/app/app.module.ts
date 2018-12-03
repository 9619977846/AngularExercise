import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { MaterialModule } from './core/material/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FilterPipe } from './shared/checkProductTypePipe';
import { ProductService } from './services/product.service';
import { ReadMoreComponent } from './shared/read-more/read-more.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    FilterPipe,
    ReadMoreComponent

  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
