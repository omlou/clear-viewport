export declare interface CvpParams{
  width?:number
  mobile?:boolean
  fontSize?:string
  metaViewport?:boolean
  userScalable?:string|null
  initialScalable?:string|null
  minimumScale?:string|null
  maximumScale?:string|null
}
export declare const cvp:{
  init:(arg:CvpParams)=>void
  info:object
}