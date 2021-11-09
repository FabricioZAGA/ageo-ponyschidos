import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppContador } from './contador/contador.component';
import { DragonBallModule } from './dragonball/dragonball.module';
import { PokemonesModule } from './pokemones/pokemones.module';

@NgModule({
  declarations: [AppComponent, AppContador],
  imports: [BrowserModule, PokemonesModule, DragonBallModule],
  providers: [],
  bootstrap: [AppComponent], // El componente que quiero renderizar
})
export class AppModule {}
