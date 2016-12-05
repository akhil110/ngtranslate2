import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { TranslateModule, MissingTranslationHandler } from 'ng2-translate';

import { FormsModule } from "@angular/forms";

import { AppComponent }   from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MyMissingTranslationHandler } from './missingtemplate.component'

@NgModule({
  imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: 'home', component: HomeComponent},
            { path: 'about', component: AboutComponent},
            { path: 'contact', component: ContactComponent },
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: '**', redirectTo: 'home', pathMatch: 'full' }
        ]),
        TranslateModule.forRoot()
  ],
  declarations: [ 
                  AppComponent,
                  HomeComponent,
                  AboutComponent,
                  ContactComponent
                ],
  providers: [
        { provide: MissingTranslationHandler, useClass: MyMissingTranslationHandler}
    ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
