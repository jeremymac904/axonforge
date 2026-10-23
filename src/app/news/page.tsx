import {pageMetadata} from "@/lib/metadata";
export const metadata={...pageMetadata({title:'The AI Briefing',description:'Original AI guides and practical analysis with source links.',path:'/news'}),robots:{index:false,follow:false}};
import Link from "next/link";
import {notes} from "@/data/forge";
export default function Page(){return <section className="forge-width forge-section forge-page"><p className="forge-label">The AI Briefing</p><h1>Ideas worth putting to work.</h1><p className="forge-intro">Draft guides for human editorial review, with source links. These have not been approved for publication and are not a live news feed.</p><div className="forge-learning-grid">{notes.map(n=><Link className="forge-learning-card" key={n.slug} href={`/news/${n.slug}`}><span className="forge-category">{n.category}</span><h2>{n.title}</h2><p>{n.summary}</p><span className="forge-text-link">Read guide →</span></Link>)}</div></section>}
