"use client"

import { useEffect, useState } from "react"
import { Card } from "./Card"
import { Select } from "./Select"

export function Grid ({posts, tags}: {posts: any, tags: any}) {
    const [tag, setTag] = useState("")
    const [filteredPosts , setFilteredPosts] = useState<Array<typeof posts>>()

    useEffect(() => {
        setFilteredPosts(posts?.results?.filter((post: any) => post?.tags?.includes(tag)))
    }, [tag])

    return (
        <>
            <Select tags={tags} setTag={setTag}  />
            <section className="grid grid-cols-1 md:grid-cols-2 gap-4 w-fit">
                {
                    tag !== ""
                    ? filteredPosts?.map((post: any) => <Card post={post} key={post.id} />)
                    : posts?.results?.map((post: any) => <Card post={post} key={post.id} />)
                }
            </section>
        </>
    )
}