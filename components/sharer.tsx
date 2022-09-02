import Link from 'next/link'
import Image from 'next/image';

const Sharer = () => {
  return (
    <div className="sharer-container mb-5 mt-5">
      <div className="sharer">
        <div className="tip">Share</div>
        <div className="share-window">
          <div className="share-bar">
            <div className="trigger"><a href="#"><i className="fab fa-facebook-f"></i></a></div>
            <div className="trigger"><a href="#"><i className="fab fa-twitter"></i></a></div>
            <div className="trigger"><a href="#"><i className="fab fa-pinterest-p"></i></a></div>
            <div className="trigger"><a href="#"><i className="fab fa-linkedin-in"></i></a></div>
            <div className="trigger"><a href="#"><i className="fab fa-whatsapp"></i></a></div>
            <div className="trigger"><a href="#"><i className="fas fa-paper-plane"></i></a></div>
          </div>
        </div>
        <div className="share">
          <div className="trigger share-btn"><a href="#"><i className="fas fa-plus"></i> Share</a></div>
        </div>
        <div className="like">
          <div className="trigger like-btn"><a href="#"><i className="fas fa-heart"></i> Like</a></div>
        </div>
      </div>
    </div>

  )
}

export default Sharer

