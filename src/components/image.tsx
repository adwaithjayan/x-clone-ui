"use client"

import {IKImage} from "imagekitio-next";

type Props={
      path:string,
      w?:number,
      h?:number,
      alt:string,
      className?:string,
      tr?:boolean
}

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT!;

const Image = ({path,tr,w,h,alt,className}:Props) => {
      return (
          <IKImage lqip={{active:true,quality:20}} alt={alt} path={path} urlEndpoint={urlEndpoint}  className={className} {...(tr ? { transformation:[{width:`${w}`,height:`${h}`}]} : {width:w,height:h})} />
      )
}
export default Image
