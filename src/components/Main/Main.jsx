import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import './Main.css'
import { Context } from '../../context/context'

const Main = () => {

    const { input, setInput, recentPrompt, showResult, loading, resultData, onSent } = useContext(Context)

    return (
        <div className='main'>
            <div className="nav">
                <p>Gemini</p>
                <img src={assets.user_icon} alt="User Icon" />
            </div>
            <div className="main-container">
                {!showResult
                    ? <>
                        <div className="greet">
                            <p><span>Hello Kevin!</span></p>
                            <p>How can I help you today?</p>
                        </div>
                        <div className="cards">
                            <div className="card">
                                <p>Suggest beautiful places to see on an upcoming road trip</p>
                                <img src={assets.compass_icon} alt="" />
                            </div>
                            <div className="card">
                                <p>Briefly summarize the concept: urban planning</p>
                                <img src={assets.bulb_icon} alt="" />
                            </div>
                            <div className="card">
                                <p>Brainstorm team bonding activities for your upcoming work retreat</p>
                                <img src={assets.message_icon} alt="" />
                            </div>
                            <div className="card">
                                <p>Improve the readability of your code</p>
                                <img src={assets.code_icon} alt="" />
                            </div>
                        </div>
                    </>
                    : <>
                        <div className="result">
                            <div className="result-title">
                                <img src={assets.user_icon} alt="User Icon" />
                                <p>{recentPrompt}</p>
                            </div>
                            <div className="result-data">
                                {loading ?
                                    <div className="loader">
                                        <hr />
                                        <hr />
                                        <hr />
                                    </div>
                                    :
                                    <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                                }
                                <img src={assets.gemini_icon} alt="Gemini Icon" />
                            </div>
                        </div>
                    </>
                }
                <div className="main-bottom">
                    <div className="search-box">
                        <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder="Enter a prompt" />
                        <div>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            {input?<img onClick={() => onSent()} src={assets.send_icon} alt="" />:null}
                        </div>
                    </div>
                    <p className="bottom-info">
                        Disclosure stuff about Gemini ai and inaccuracies and stuff
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Main