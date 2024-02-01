

export async function getTrendingCreators(region){

    const url = `https://scraptik.p.rapidapi.com/trending-creators?region=${region}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '7159b1cb07msh84bf3f4f471da1ep10f14ajsn9a6231f24a8a',
            'X-RapidAPI-Host': 'scraptik.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}




