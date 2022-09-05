import { useRouter } from 'next/router';
import { SITE_BASE_URL } from '../lib/constants';
import { useState } from 'react';


const Sharer = () => {
  const router = useRouter()
  const url = SITE_BASE_URL + router.asPath;

  function copy(){
    navigator.clipboard.writeText(url);
  }
  

  return (
    <div className="sharer-container mb-5 mt-5">
      <div className="sharer">
        <div className="tip">Share</div>
        <div className="share-window">
          <div className="share-bar">
            <div className="trigger trigger-facebook" title="facebook"><a target="_blank" href={'https://www.facebook.com/sharer/sharer.php?u=' + url}><i className="fab fa-facebook-f"></i></a></div>
            <div className="trigger trigger-linkedin" title="linkedin"><a target="_blank" href={'https://www.linkedin.com/sharing/share-offsite/?url=' + url}><i className="fab fa-linkedin-in"></i></a></div>
            <div className="trigger trigger-twitter" title="twitter"><a target="_blank" href={'http://twitter.com/share?url=' + url}><i className="fab fa-twitter"></i></a></div>
            <div className="trigger trigger-whatsapp" title="whatsapp"><a href={'https://web.whatsapp.com/send?text=' + url}><i className="fab fa-whatsapp"></i></a></div>
            <div className="trigger trigger-telegram" title="telegram"><a href={'https://t.me/share/url?url=' + url}><i className="fas fa-paper-plane"></i></a></div>
            <div className="trigger trigger-copy"  title="Copy Link"><a onClick={copy}><i className="fas fa-copy"></i></a></div>            
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

