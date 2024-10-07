import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
  
  bootstrapApplication(AppComponent, {
    providers: [FormsModule,CommonModule]
  });