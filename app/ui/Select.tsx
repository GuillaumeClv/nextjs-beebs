"use client"

export function Select ({tags, setTag}: any) {
    const handleClick = (e: any) => setTag(e.target.value)

    return (
      <select name="pets" id="pet-select" className="mb-8">
        <option value="">--Please choose an option--</option>
        {
          tags?.results?.map((tag: {tags: string}) => {
            if (tag.tags) {
              return <option key={tag.tags} value={tag.tags} onClick={handleClick}>{tag.tags}</option>
            }
          })
        }
      </select>
    )
}