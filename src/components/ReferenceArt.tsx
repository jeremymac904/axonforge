import Image from "next/image";
// Faithful, parent-reviewed asset replacements; keep the original crop as fallback.
const replacements: Record<string, { src: string; width: number; height: number; position?: string }> = {
 "38,440,225,153": { src: "/assets/faithful/platform-building-v1.png", width: 1824, height: 862, position: "58% center" },
 "281,440,225,153": { src: "/assets/faithful/platform-workspace-v1.png", width: 1529, height: 1028 },
 "523,440,224,153": { src: "/assets/faithful/platform-film-studio-v1.png", width: 1524, height: 1032 },
 "40,801,390,145": { src: "/assets/faithful/briefing-architecture-v1.png", width: 2054, height: 766 },
 "452,801,290,106": { src: "/assets/faithful/briefing-pipes-v1.png", width: 2068, height: 760 },
 "452,925,290,100": { src: "/assets/faithful/briefing-lens-v1.png", width: 2139, height: 735 },
 "56,1172,193,84": { src: "/assets/faithful/tutorial-workflow-v1.png", width: 1900, height: 828 },
 "300,1172,190,84": { src: "/assets/faithful/tutorial-presenter-v1.png", width: 1888, height: 833 },
 "545,1172,188,84": { src: "/assets/faithful/tutorial-research-v1.png", width: 1877, height: 838 },
};
// Text and interactive controls remain semantic HTML outside these visual frames.
export function ReferenceArt({area,alt="",className=""}:{area:[number,number,number,number];alt?:string;className?:string}){
 const [x,y,w,h]=area;
 const replacement=replacements[area.join(",")];
 if(replacement) return <div className={`reference-art ${className}`} data-source-region={area.join(",")} data-faithful-asset={replacement.src} style={{aspectRatio:`${w}/${h}`}}><Image src={replacement.src} alt={alt} width={replacement.width} height={replacement.height} sizes="(max-width:767px) 100vw, 667px" style={{width:"100%",height:"100%",objectFit:"cover",objectPosition:replacement.position ?? "center",left:0,top:0}} /></div>;
 return <div className={`reference-art ${className}`} data-source-region={area.join(",")} style={{aspectRatio:`${w}/${h}`}}><Image src="/assets/approved-navy-reference.png" alt={alt} width={783} height={2007} sizes="100vw" style={{width:`${783/w*100}%`,maxWidth:"none",height:"auto",left:`${-x/w*100}%`,top:`${-y/h*100}%`}} /></div>;
}
