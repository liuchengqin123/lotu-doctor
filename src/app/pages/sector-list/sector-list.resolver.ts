import { Injectable } from '@angular/core'
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router'

import { Miner, MinerService } from 'app/services/miner.service'

@Injectable({ providedIn: 'root' })
export class SectorListResolver implements Resolve<Miner | null> {
  constructor(
    private router: Router,
    private minerService: MinerService,
  ) {}

  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Miner | null> {
    const minerId = route.paramMap.get('id')
    if (!minerId) {
      await this.router.navigateByUrl('/errors/notfound', { replaceUrl: true })
      return null
    }

    const miner = this.minerService.setCurrentMiner(minerId)
    if (!miner) {
      await this.router.navigateByUrl('/errors/notfound', { replaceUrl: true })
      return null
    }
    return miner
  }
}
