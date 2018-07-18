let fs = require('fs')
fs.readdir('./tests/music_player', (err, files) => {
if(err) console.log(err);
    let mfiles = files.filter(f => f.split('.').pop() === 'mp3')
    if(mfiles.length <= 0){console.log('No Music Files were found.')}
    mfiles.forEach((f, i) => {
        console.log(`${f}`)
    });
})
