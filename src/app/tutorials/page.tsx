import {pageMetadata} from "@/lib/metadata";
export const metadata=pageMetadata({title:'Tutorials',description:'Written guides for clear, reviewable AI workflows.',path:'/tutorials'});
import Link from "next/link";
import {tutorials} from "@/data/forge";
export default function Page(){return <section className="forge-width forge-section forge-page"><p className="forge-label">Practical education</p><h1>Learn. Test. Make it useful.</h1><p className="forge-intro">Curated introductions to published guides on AI Realtor Pro. Read an overview here, then continue to the original learning site.</p><div className="forge-learning-grid">{tutorials.map(n=><Link className="forge-learning-card" key={n.slug} href={`/tutorials/${n.slug}`}><span className="forge-category">{n.category}</span><h2>{n.title}</h2><p>{n.summary}</p><span className="forge-text-link">Read guide →</span></Link>)}</div></section>}
