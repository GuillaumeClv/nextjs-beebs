import { fetchData } from "./lib/data";
import { Card } from "./ui/Card";

export default async function Home() {
  const posts = await fetchData()

  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 w-fit">
        {posts?.results?.map((post: any) => <Card post={post} key={post.id} />)}
      </section>
    </>
  );
}
