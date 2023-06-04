const userLeft = false;
const userWatchingCatMeme = true;

function watchTutorialPromise() {
return new Promise((resolve, reject) => {

if (userLeft) {
reject({
name: 'User Left',
message: ':('
})
// if userLeft is true, this will be printed


} else if (userWatchingCatMeme) {
reject({
name: 'User Watching Cat Meme',
message: 'WebDevSimplified ‹ Cat'
})
// if userwatchingCatMeme is true, then this message will be printed

} else {
resolve('Thumbs up and Subscribe')
}

})
}


watchTutorialPromise().then((message) => {
console.log('Success:' + message)
}).catch((error) => {
console.log(error.name + ' ' + error.message)
})
