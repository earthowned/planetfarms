import './call-modal.css';


const CallModal = ({clickHandler}) => {
    return (
       
       <div className="call-modal-container">
            <div className="call-modal" style={{ backgroundImage: `url("img/call-photo.png")`}}>
                <div className="img-wrapper">
                    <img src="./img/call-user.png" />
                </div>

                <div className="call-button">
                    <button><img src="./img/group.png" /></button>
                    <button><img src="./img/cancel-video.png" /></button>
                    <button><img src="./img/cancel-call.png" /></button>
                    <button onClick={() => clickHandler(false)}><img src="./img/cross.png" /></button>
                </div>
                
                <div className="resize">
                    <img src="./img/resize.png" />
                </div>
            </div>
       </div>
       
    )
}

export default CallModal
