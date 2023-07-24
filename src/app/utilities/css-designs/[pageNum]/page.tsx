import React from 'react'


//Bu komponente /utilities/css-designs/:pageNum şeklinde ulaşabiliyoruz.
const page = (props : any) => {
  console.log(props)
  return (
    <div>And we are in the css designs and page number is : {props.params.pageNum}</div>
  )
}

export default page