// =@angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// =material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// =modules (keep RoutingModule at last - after all modules)
import { LeavesModule } from './leaves/leaves.module';
import { RoutingModule } from './routing/routing.module';
import { SharedModule } from './shared/shared.module';


// =project
import { AppComponent } from './app.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    SharedModule,
    RoutingModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
