export async function fetchData() {
    try {
        let data = await fetch('https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/que-faire-a-paris-/records?limit=20')
        let posts = await data.json()
        return posts
    
    } catch (error) {
        console.error(error)
        return []
    }
}

export async function getTags() {
    try {
        let data = await fetch('https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/que-faire-a-paris-/records?select=*&group_by=tags')
        let tags = await data.json()
        return tags
    
    } catch (error) {
        console.error(error)
        return []
    }
}
