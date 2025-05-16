export async function fetchData() {
    try {
        let data = await fetch('https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/que-faire-a-paris-/records?limit=20')
        return await data.json()
    
    } catch (error) {
        console.error(error)
        return []
    }
}

export  function getAccessType() {
    return ["conseillée", "obligatoire", "reset"] as accessType[]
}
