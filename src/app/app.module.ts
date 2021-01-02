import { BrowserModule } from '@angular/platform-browser'
import { APP_INITIALIZER, NgModule } from '@angular/core'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { GRPC_CLIENT_FACTORY } from '@ngx-grpc/core'
import { GrpcWebClientFactory } from '@ngx-grpc/grpc-web-client'
import { HttpClientModule } from '@angular/common/http'

import { GRPC_LOTUS_SERVICE_CLIENT_SETTINGS } from 'proto/lotuspb/lotus.pbconf'
import { AppComponent } from './app.component'
import { SharedModule } from './shared/shared.module'
import { AppRoutingModule } from './app-routing.module'
import { StartupService } from './core/startup.service'
import { MinerService } from './services/miner.service'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SharedModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    { provide: GRPC_CLIENT_FACTORY, useClass: GrpcWebClientFactory },
    {
      provide: GRPC_LOTUS_SERVICE_CLIENT_SETTINGS,
      useFactory: (minerService: MinerService) => () => ({ host: minerService.currentMiner?.endpoint }),
      deps: [MinerService],
    },
    {
      provide: APP_INITIALIZER,
      useFactory: (startup: StartupService) => () => startup.initial(),
      deps: [StartupService],
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
