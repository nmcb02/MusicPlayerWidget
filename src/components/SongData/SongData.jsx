export default function SongData({ title, artist, album }) {
    return (
        <div className="songDataContainer">
            <h2 className="songTitle">{title}</h2>
            <p className="songArtist">{artist}</p>
            <p className="songAlbum">{album}</p>
        </div>
    );
}