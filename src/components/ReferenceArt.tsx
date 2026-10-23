import Image from "next/image";
// Owner-approved artwork, precisely framed without generating replacement art.
// Text and interactive controls remain semantic HTML outside these visual frames.
export function ReferenceArt({area,alt="",className=""}:{area:[number,number,number,number];alt?:string;className?:string}){
 const [x,y,w,h]=area;
 return <div className={`reference-art ${className}`} style={{aspectRatio:`${w}/${h}`}}><Image src="/assets/approved-navy-reference.png" alt={alt} width={783} height={2007} sizes="100vw" style={{width:`${783/w*100}%`,maxWidth:"none",height:"auto",left:`${-x/w*100}%`,top:`${-y/h*100}%`}} /></div>;
}
