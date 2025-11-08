export default function AlbumPicture({ src, alt }) {
    return (
        <div className="albumPictureContainer">
            <img
                src={src}
                alt={alt}
                className="albumArtwork"
            />
        </div>
    );
}