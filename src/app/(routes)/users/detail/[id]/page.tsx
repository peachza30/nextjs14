"use client"
import React from 'react'

type Props = {
  params: {
    id: string;
    name: string;
  }
}

const page = ({params}: Props) => {
console.log(params);
  return (
    <div></div>
  )
}

export default page