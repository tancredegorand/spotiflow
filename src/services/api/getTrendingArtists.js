function getTrendingArtistsFromJSON(){
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        let jsonFilePath = '/src/services/api/getTrendingArtists.json';

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    let jsonData = JSON.parse(xhr.responseText);
                    resolve(jsonData);
                } else {
                    reject("Error fetching JSON");
                }
            }
        };

        xhr.open('GET', jsonFilePath, true);
        xhr.send();
    });

 }






export async function getTrendingArtists() {
    const url = `https://spotify81.p.rapidapi.com/top_20_by_monthly_listeners`;
    const options = {
     method: 'GET',
     headers: {
         'X-RapidAPI-Key': '7159b1cb07msh84bf3f4f471da1ep10f14ajsn9a6231f24a8a',
         'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
     }
     };
 
     try {
         const response = await fetch(url, options);
         const result = await response.json();
         return result; 
     } catch (error) {
        const result = getTrendingArtistsFromJSON();
        return result; 
    
     }; 
 
 }

 

