import Image from "next/image";
import { postDate } from "../lib/utils";

export function Card ({post}: {post: any}) {
    return (
        <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 max-w-90">
            <Image width={400} height={300} src={post.cover_url} alt={post.cover_alt ?? "cover alt"} />
            <h5 className="py-4">{post.title}</h5>
            
            <p>Début de l'évènement : {" "} 
                {post.date_start ? postDate(post.date_start) : "Revenez demain" }
            </p>

            {
                post.address_name && post.address_street && post.address_city 
                ? <p>L'évènement aura lieu ici : <br /> {post.address_name} <br /> Au {post.address_street}, {post.address_city}</p>
                : <p>Adresse non précisée</p>
            }
        </div>
    )
}