import React, {useEffect} from 'react'
import './ImageRevealStyles.css'
import './ImageRevealEffects.js'

export default function ImageReveal() {

    useEffect(() => {
        ImageRevealEffects();
      }, []);
    

  return (
    <>
        <div className="header">
            <div className="letters">
                <div>a</div>
                <div>r</div>
                <div>t</div>
                <div>w</div>
            </div>
            <div className="letters">
                <div>o</div>
                <div>r</div>
                <div>k</div>
                <div>s</div>
            </div>
        </div>
        <div className="website-content">
            <div className="img-holder">
                <img src="/img/ui.jpeg"></img>
            </div>
            <div className="content-h">
                <div className="row">
                    <h1>History</h1>
                </div>
                <div className="row">
                    <div className="img">
                        <img src="/img/ui.jpeg"></img>
                    </div>
                </div>
                <div className="row">
                    <div className="img">
                        <img src="/img/ui.jpeg"></img>
                    </div>
                </div>
                <div className="row">
                    <div className="img">
                        <img src="/img/ui.jpeg"></img>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

