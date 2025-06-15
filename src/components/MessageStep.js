export default function MessageStep({ content, onSelect }) {
  return (
    <div className="content-step">
      <img src="/images/TRANG-12.webp" alt="pic" className="pic slide-up " />
      <div className="video_container slide-up delay-1">  
      <div className="video_camlanh">
        <iframe
          src="//drive.google.com/file/d/1XlRkvshI0rIJajMMqwWj1O5f63Ma30dy/preview"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: "none",
          }}
          allow="autoplay"
          allowFullScreen
          title="Google Drive Video"
        ></iframe>
      </div></div>
    
      <button onClick={onSelect} className="button slide-up delay-2">
        Còn tiếp nè
      </button>
    </div>
  );
}
