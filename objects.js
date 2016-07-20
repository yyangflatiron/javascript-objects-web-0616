var playlist = {'key':'value'}

function updatePlaylist(playlist, artistName, songTitle){
//adds the `artistName: songTitle` key-value pair to `playlist`
	playlist[artistName] = songTitle
	return playlist
}


function removeFromPlaylist(playlist, artistName){
	delete playlist[artistName]
	return playlist
}