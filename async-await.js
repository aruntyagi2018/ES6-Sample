let fetch = require('cross-fetch');
async function getApiData()
{
 let userData =await fetch('https://api.github.com/users/lquixada');
 let UserJson = await userData.json();

 let iTunesData = await fetch('https://itunes.apple.com/search?term=akon');
 let ItunesJson = await iTunesData.json();

 return {
     userData:UserJson,
     iTunesData:ItunesJson
 }

}

console.log('before getApiData call');
 getApiData()
 .then(res => {
    console.log('user data ' ,res.userData);
    console.log('iTunes data ' ,res.iTunesData); 
})
.catch(err => {
    console.log('async await function error ' ,err);
})

console.log('after getApiData call');