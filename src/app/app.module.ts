import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { SwiperModule } from 'swiper/angular';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, 
            IonicModule.forRoot(),
            AppRoutingModule,
            BrowserAnimationsModule,
            HttpClientModule,
            SwiperModule,
            ],
  providers: [{ provide: RouteReuseStrategy,
                useClass: IonicRouteStrategy },
                InAppBrowser,
                ],
  bootstrap: [AppComponent],
})
export class AppModule {}
