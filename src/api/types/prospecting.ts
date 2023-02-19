export interface DbGroundFeature{
  artificial:string
  anomalous:string
  terrace:string
}
export interface DbSlopeInfo{
  slope:string
  multipleSlopes:string
  singleAspect:string
  multipleSlopeDirections:string
}
export interface DbRange{
  frontHeight:string
  rearHeight:string
  frontWidth:string
  rearWidth:string
  diff:string
  area:string
}
export interface DbLocus {
  longitude:string
  latitude:string
  height:string}
export interface DbCoordinate{
  northwestCorner: DbLocus
  northeastCorner:DbLocus
  southwestCorner:DbLocus
  southeastCorner:DbLocus
}

export interface AllForm{
 name:string
 type:string
 geographiclnfo:string
 centerLongitude:string
 centerLatitude:string
 groundFeatureUrl:string
 groundFeature:DbGroundFeature
 slopeInfo:DbSlopeInfo
 range:DbRange
 coordinate:DbCoordinate
 fileUrl:string
 geology:string
}

