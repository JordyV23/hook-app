/* eslint-disable react/prop-types */
import { memo } from "react";


/* eslint-disable-next-line react/display-name */
export const Small = memo(({ value }) => {

 console.log('Me volvi a dibujar :c')
  return (
  <small>{value}</small>
  )
})
