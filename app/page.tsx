import { fetchData } from "./lib/data";
import { Card } from "./ui/Card";

export default async function Home() {
  const posts = await fetchData()

   return (
    <div className="container mx-auto p-4 grid justify-items-center">
      <h1 className="text-center text-2xl p-16">Bienvenue sur Que faire à paris </h1>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 w-fit">
        { posts?.results?.map((post: any) => <Card post={post} key={post.id} />) }
      </section>
    </div>
  );
}
