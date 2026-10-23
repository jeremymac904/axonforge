import Link from "next/link";
import {ReferenceArt} from "./ReferenceArt";
export function Logo(){return <Link href="/" className="forge-logo" aria-label="Axon Forge Labs home"><ReferenceArt area={[35,29,45,29]} /><span>AXON FORGE LABS</span></Link>}
