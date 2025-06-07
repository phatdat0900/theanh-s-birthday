export default function VideoStep({  onSelect }) {
    return (
      <div className="video-step">
       <h2 className="video_title slide-up ">Video kỉ niệm đặc biệt</h2>
       <h2 className="video_subtitle slide-up ">Phần thưởng đặc biệt rành cho bé yêu</h2>
       <iframe
       className="slide-up delay-1"
    
  width="90%"
  height="400"
  src="https://www.youtube.com/embed/jcDJKY9zZtU?fbclid=IwY2xjawKxBjxleHRuA2FlbQIxMQABHt1JIU76HvoV5kZnXAWh5QPyHpA-Hd1v2sdgh9f3xK9huKKXW1HtF_SkKPwq_aem_vtd4z3pyOpVYgdD-ErMCfQ"
  title="YouTube video"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>

  

      <div className="video_script slide-up delay-2">Hành trình trưởng thành của bé luôn đáng yêu và đáng nhớ!  Hãy cùng nhìn lại những khoảnh khắc rạng rỡ với một món quà kỷ niệm handmade đầy yêu thương. Đây không chỉ là phần thưởng mà còn là lời động viên, ghi dấu những nỗ lực và niềm vui của bé.</div>
       <button onClick={onSelect} className="button black slide-up delay-2"> Nhận bánh</button>
      </div>
      
    );
  }
  