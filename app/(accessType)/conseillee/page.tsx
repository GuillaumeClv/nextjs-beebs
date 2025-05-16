import { fetchData } from "@/app/lib/data"
import { Card } from "@/app/ui/Card"

export default async function Page () {
    const posts = await fetchData()
    const filteredPosts = posts?.results?.filter((post: any) => post["access_type"] === "conseillée")

    return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 w-fit">
          {filteredPosts?.map((post: any) => <Card post={post} key={post.id} />)}
        </section>
    )
}