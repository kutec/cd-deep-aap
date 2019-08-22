// =@angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// =material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// =modules (keep RoutingModule at last - after all modules)
import { LeavesModule } from './leaves/leaves.module';
import { RoutingModule } from './routing/routing.module';
import { SharedModule } from './shared/shared.module';


// =project
import { AppComponent } from './app.component';
import { ApiService } from './_services/api.service';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    RoutingModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [ApiService]
})
export class AppModule { }
