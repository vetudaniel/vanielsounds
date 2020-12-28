import React from 'react'
import './App.css';
import SearchResults from '../SearchResults/SearchResults'
import SearchBar from '../SearchBar/SearchBar'
import Playlist from '../Playlist/Playlist'
import Spotify from '../../util/Spotify'

class App extends React.Component {
constructor(props){
  super(props)
  this.state = {
    searchResults : [],
    playlistName : 'newPlaylist',
    playlistTracks : []
  }
  this.addTrack = this.addTrack.bind(this)
  this.removeTrack = this.removeTrack.bind(this)
  this.updatePlaylistName = this.updatePlaylistName.bind(this)
  this.savePlaylist = this.savePlaylist.bind(this)
  this.search = this.search.bind(this)
}

addTrack(track){
  let tracks = this.state.playlistTracks
  if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
    return;
  }
  tracks.push(track)
  this.setState({
    playlistTracks: tracks
  })
}
    
removeTrack(track){
  let tracks = this.state.playlistTracks
  tracks = tracks.filter(currentTrack => currentTrack.id !== track.id )
  this.setState({playlistTracks : tracks})
}    

updatePlaylistName(name){
  this.setState({
    playlistName : name
  })
}

savePlaylist(){
  const trackUris = this.state.playlistTracks.map(track=> track.uri) 
  Spotify.savePlayList(this.state.playlistName, trackUris).then(()=>{
    this.setState({
      playlistName: 'New Playlist',
      playlistTracks: []
    })
  })
}

search(term){
  Spotify.search(term).then(searchResults => {
    this.setState({searchResults})
  })
}

componentDidMount() {
  window.addEventListener('load', () => {Spotify.getAccessToken()});
}


render(){
  return (
    
        
        <div className="App">
          
          <div className="nav">
            <h1><span className="highlight">Sound</span>Place</h1>
          </div>
           <SearchBar onSearch = {this.search}/>  
          <div className="App-playlist">
           
           <SearchResults searchResults={this.state.searchResults} onAdd = {this.addTrack}/>
            <Playlist 
            playlistName={this.state.playlistName} 
            playlistTracks ={this.state.playlistTracks} 
            onRemove = {this.removeTrack}
            onNameChange = {this.updatePlaylistName}
            onSave = {this.savePlaylist}
            />    
          </div>
        </div>
      
    );
}

}

export default App;
