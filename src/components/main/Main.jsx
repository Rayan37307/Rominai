import { useContext } from "react";
import { assets } from "../../assets/assets";
import "./Main.css";
import { Context } from "../../context/Context";
import run from "../../config/rominai";

const Main = () => {
  const {
    prevPromt,
    setPrevPrompt,
    onSent,
    setRecentPrompt,
    recentPromt,
    resultData,
    setResultData,
    showResult,
    setShowResult,
    setLoading,
    loading,
    input,
    setInput,
  } = useContext(Context);

  return (
    <div className="main">
      <div className="nav">
        <p>Rominai</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">

        {
          !showResult
          ?
          <>
          
          <div className="greet">
            <p>
              <span>Hello There!</span>
            </p>
            <p>How can i help you today?</p>
          </div>
          <div className="cards">
            <div className="card" onClick={()=> {
              setInput("Suggest beutiful places to see on an upcoming road trip");
              }}>
              <p>Suggest beutiful places to see on an upcoming road trip </p>
              <img src={assets.compass_icon} alt="" />
            </div>
            <div className="card" onClick={()=> setInput("Breifly summarize this: urbam planning")}>
              <p>Breifly summarize this: urbam planning </p>
              <img src={assets.bulb_icon} alt="" />
            </div>
            <div className="card" id="card-3" onClick={()=> setInput("Help me write a refund email for a product that’s damaged ")}>
              <p>Help me write a refund email for a product that’s damaged </p>
              <img src={assets.message_icon} alt="" />
            </div>
            <div className="card" id="card-3" onClick={()=> setInput("tell me a joke")}>
              <p>tell me a joke </p>
              <img src={assets.code_icon} alt="" />
            </div>
          </div>
          </>
          :
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPromt}</p>
            </div>
            <div className="result-data">
              <img src={assets.Rominai} alt="" />
              {loading
              ?
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              :
              <p dangerouslySetInnerHTML={{__html:resultData}}>

              </p>

            }
            </div>
          </div>
        }

        <div className="main-bottom">
          <div className="search-box">
            <input onChange={(e)=> setInput(e.target.value)} value={input} type="text" placeholder="Enter Prompt Here...." />
            <div>
              <img onClick={()=> onSent()} src={assets.send_icon} alt="" />
            </div>
          </div>
          <p className="bottom-info">
            Rominai may display inaccurate info, including about people, so
            double-check its responses. Your privacy and Rominai Apps
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
