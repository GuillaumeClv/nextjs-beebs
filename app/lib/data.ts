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