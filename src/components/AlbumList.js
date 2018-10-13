import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            error: null,
            isLoaded: false,
            albums: []
        };
    }

    componentWillMount() {
        fetch("https://rallycoding.herokuapp.com/api/music_albums")
        .then((res) => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    albums: result
                });
            },
            (error) => {
                this.setState({
                  isLoaded: true,
                  error
                });
            }
        );
    }

    renderAlbums() {
        return this.state.albums(album => 
            <AlbumDetail key={album.title} album={album} />
        );
    }

    render() {
        const { error, isLoaded } = this.state;
        if (error) {
            return <View>Error: {error.message}</View>;
        } else if (!isLoaded) {
            return <View>Loading...</View>;
        } else {
            return (
                <ScrollView>
                    {this.renderAlbums()}
                </ScrollView>
            );
        }
    }
}

export default AlbumList;
