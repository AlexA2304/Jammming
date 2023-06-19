import React, { useState, useCallback } from "react";
import "./App.css";

import Playlist from "../Playlist/Playlist";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Spotify from "../../util/Spotify";

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState("New Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [dropResults, setDropResults] = useState([]);
  const [term, setTerm] = useState("");


  const search = useCallback((term) => {
    Spotify.search(term).then(setSearchResults);
  }, []);

  const addTrack = useCallback(
    (track) => {
      if (playlistTracks.some((savedTrack) => savedTrack.id === track.id))
        return;

      setPlaylistTracks((prevTracks) => [...prevTracks, track]);
    },
    [playlistTracks]
  );

  const removeTrack = useCallback((track) => {
    setPlaylistTracks((prevTracks) =>
      prevTracks.filter((currentTrack) => currentTrack.id !== track.id)
    );
  }, []);

  const updatePlaylistName = useCallback((name) => {
    setPlaylistName(name);
  }, []);

  const savePlaylist = useCallback(() => {
    const trackUris = playlistTracks.map((track) => track.uri);
    Spotify.savePlaylist(playlistName, trackUris).then(() => {
      setPlaylistName("New Playlist");
      setPlaylistTracks([]);
    });
  }, [playlistName, playlistTracks]);

  const dropSearch = useCallback((term) => {
    if (term === "") {
      return;
    } else {
      Spotify.search(term).then(setDropResults);
    }
  }, []);

  const handleSelect = useCallback((track) => {
    setTerm("");
    search(track.name);
  }, [search]);

  const handleTermChange = useCallback((newTerm) => {
    setTerm(newTerm);
  }, []);

  return (
    <div>
      <div className="head">
        <div className="head-title">
          <h1>JAM <span className="highlight">| M |</span> ING</h1>
        </div>
        <div className="head-search">
          <SearchBar onSearch={search} onType={dropSearch} dropResults={dropResults} onSelect={handleSelect} onTermChange={handleTermChange} term={term} />
        </div>
      </div>
      <div className="App">
        <div className="App-playlist">
          <SearchResults searchResults={searchResults} onAdd={addTrack} />
          <Playlist
            playlistName={playlistName}
            playlistTracks={playlistTracks}
            onNameChange={updatePlaylistName}
            onRemove={removeTrack}
            onSave={savePlaylist}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
