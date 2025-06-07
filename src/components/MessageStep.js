export default function MessageStep({ content, onSelect }) {
    return (
      <div className="content-step">
                <img src="/images/TRANG-12.webp" alt="pic" className="pic"  />
                    <button onClick={onSelect} className="button">Còn tiếp nè</button>

      </div>
    );
  }
  