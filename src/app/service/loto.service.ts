import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { NumInfo } from '../model/num-info';
import { NumRow } from '../model/num-row';
import { storageService } from './async-storage.service';

const LOTO_MAT = 'lotoMat'

@Injectable({
  providedIn: 'root'
})
export class LotoService {

  constructor() { }

  private initalDB: NumRow[] = this.createMat()
  private lotoNums: string[] = []

  private _lotoMat$: BehaviorSubject<NumRow[]> = new BehaviorSubject(this.initalDB)
  public lotoMat$: Observable<NumRow[]> = this._lotoMat$.asObservable()

  public async query() {
    const lotoMat = (await storageService.query(LOTO_MAT, this.initalDB)) as NumRow[]
    this._lotoMat$.next(lotoMat)
  }


  private createMat(): NumRow[] {
    const numsMat: any[] = []
    for (var i = 0; i < 10; i++) {
      numsMat[i] = []
      for (var j = 0; j < 6; j++) {
        const numInfo: NumInfo = {
          loc: j,
          num: i,
          count: 0
        }
        numsMat[i][j] = numInfo
      }
    }
    console.log(numsMat)
    return numsMat
  }


  public addLotoNum(num: string) {
    const lotoMat = this._lotoMat$.getValue()
    const updateMat = this.updateMat(lotoMat, num)
    storageService.saveToStorage(LOTO_MAT ,updateMat)
    this._lotoMat$.next(updateMat)
  }

  private updateMat(mat: NumRow[] | any, numStr: string) {
    const nums = numStr.split('')
    for (let j = 0; j < nums.length; j++) {
      const i = +nums[j]
      const row: NumInfo[] = mat[i]
      row[j].count++
    }
    return mat
  }

}
