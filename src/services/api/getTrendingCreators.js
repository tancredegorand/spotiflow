function getTrendingCreatorsFromJson() {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        let jsonFilePath = '/src/services/api/trending-creator.json';

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



export async function getTrendingCreators() {
    //requette API
    //si ne fonctionne pas alors : 
    try {
        let data = await getTrendingCreatorsFromJson();
        return data; 
    } catch (error) {
        console.error(error);
        return null;
    }
}


