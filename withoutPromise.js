let fetch  = require('cross-fetch');

function getdata(callBack)
{
    console.log('start fetch data');
    fetch('https://api.github.com/users/lquixada')
    .then(res => {
        return res.json();
    })
    .then(user => {
        callBack(undefined,user);
    })
    .catch(err => console.log(err));
}

console.log('call mydata function');
getdata((err,data) => {
    console.log('callback method call',data);

})
console.log('after callback method');