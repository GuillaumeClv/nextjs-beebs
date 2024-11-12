import { fetchData, getTags } from "./lib/data";
import { Grid } from "./ui/Grid";

export default async function Home() {
  const postsData = await fetchData()
  const tagsData = await getTags()

  const [posts, tags] = await Promise.all([postsData, tagsData])

   return (
    <div className="container mx-auto p-4 grid justify-items-center">
      <h1 className="text-center text-2xl p-16">Bienvenue sur Que faire à paris </h1>
      <Grid posts={posts} tags={tags} />
    </div>
  );
}
