import { Injectable } from '@angular/core'
import { remove } from 'lodash'

export type Miner = {
  id: string
  name: string
  label: string
  remark: string
  endpoint: string
}

@Injectable({ providedIn: 'root' })
export class MinerService {
  readonly $name = 'miners'

  private $miners: Miner[]
  private $currentMiner?: Miner

  get miners(): Miner[] { return  this.$miners }
  get currentMiner(): Miner | undefined { return this.$currentMiner  }

  constructor() {
    const minersStr = localStorage.getItem(this.$name)
    this.$miners = JSON.parse(minersStr || '[]')
  }

  insert(miner: Miner): void {
    const miners = [...this.$miners, miner]
    localStorage.setItem(this.$name, JSON.stringify(miners))
    this.$miners = miners
  }

  update(miner: Miner): void {
    const miners = [...this.$miners]
    const minerIndex = miners.findIndex(m => m.id === miner.id)
    miners[minerIndex] = miner
    localStorage.setItem(this.$name, JSON.stringify(miners))
    this.$miners = miners
  }

  delete(id: string): void {
    const miners = [...this.$miners]
    remove(miners, m => m.id === id)
    localStorage.setItem(this.$name, JSON.stringify(miners))
    this.$miners = miners
  }

  setCurrentMiner(id: string): Miner | undefined {
    const miner = this.$miners.find(m => m.id === id)
    this.$currentMiner = miner
    // @ts-ignore
    return miner
  }

}
