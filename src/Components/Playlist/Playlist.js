import React, { Component } from 'react'
import './Playlist.css'
import TrackList from '../TrackList/TrackList'

export class Playlist extends Component {
    constructor(props){
        super(props)
        this.handleNameChange = this.handleNameChange.bind(this)
        this.myFunc = this.myFunc.bind(this)
        this.myLol = this.myLol.bind(this)
    }

    handleNameChange(e){
        this.props.onNameChange(e.target.value)
    }
    myFunc(e){
        e.target.value = ''
        
    }
    myLol(e){
        e.target.value = 'New Playlist'
    }
    render() {
        return (
            <div className="Playlist">
                <input defaultValue="New Playlist" onChange = {this.handleNameChange} onFocus = {this.myFunc} onBlur = {this.myLol}/>
                 <TrackList tracks = {this.props.playlistTracks} onRemove = {this.props.onRemove} isRemoval = {true}/>
                <button className="Playlist-save" onClick = {this.props.onSave}>SAVE TO SPOTIFY</button>
            </div>
        )
    }
}

export default Playlist
