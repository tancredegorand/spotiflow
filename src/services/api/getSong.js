function getSongFromJSON(){
  return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest();
      let jsonFilePath = '/src/services/api/getSong.json';

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






export async function getSong(value) {
  const url = `https://spotify81.p.rapidapi.com/download_track?q=${value}&onlyLinks=1`;
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
      const result = getSongFromJSON();
      return result; 
   }; 

}



