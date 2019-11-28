export class BitMask<T>{
  /** The current value of the mask */
  value: number
  bits: T[]

  constructor(value: number = 0, bits: T[] = []){
    this.value = value
    this.bits = bits
  }

  private _get(bit: number){
    return !!((1 << bit) & this.value)
  }

  private _set(bit: number, value: boolean){
    if(value){
      if(!this._get(bit)){
        this.value = (1 << bit) ^ this.value
      }
    }else{
      if(this._get(bit)){
        this.value = (1 << bit) ^ this.value
      }
    }
  }

  get(name: T){
    let index = this.bits.indexOf(name)

    if(index !== -1){
      return this._get(index)
    }

    return false
  }

  set(name: T, value: boolean){
    let index = this.bits.indexOf(name)
    
    if(index !== -1){
      this._set(index, value)
    }
  }

  asArray(){
    return this.bits.filter((bit) => {
      return this.get(bit)
    })
  }

  asIndexArray(){
    return this.asArray().map((bit) => {
      return this.bits.indexOf(bit)
    })
  }

  fromIndexArray(indexs: number[]){
    this.bits.forEach((bit, index) => {
      if(indexs.indexOf(index) !== -1){
        this.set(bit, true)
      }else{
        this.set(bit, false)
      }
    })
  }
}