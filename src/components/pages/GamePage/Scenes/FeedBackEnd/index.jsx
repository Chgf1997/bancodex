import classNames from 'classnames'
import DialogEnd from './DialogEnd/index'
import Personage from '../../../../personages/personage'
import "./FeedBackEnd.css";

const SceneFeedBackEnd = ({
    currentStory,
    currentQuestion,
    goToScene,
    currentPuntage
}) => {
    // const side = 'left';

    const DialogBox = () => {
        return (
            <div className="feedBackEnd-box">
                <DialogEnd 
                    Personage={()=>(<Personage name="girl"/>)}
                    currentQuestion={currentQuestion}
                    currentStory={currentStory}
                    currentPuntage={currentPuntage}
                    onCall={()=>{goToScene('selectLevel')}}
                />
            </div>  
        )
    }

    const PersonageBox = () => {
        return (
            <div className="feedBackEnd-personage-container">
                <div className="feedBackEnd-personage">
                    <Personage 
                        name={currentStory.personage}
                    />
                </div>
            </div>            
        )
    }

    return (
        <div className="feedBackEnd-container">
            <div className={currentStory.cover}>
                <div className="feedBackEnd-title-container">
                    <div className="feedBackEnd-title-content">
                        <div className="title-history-1"/>
                    </div>
                </div>
                <div className="feedBackEnd-content">  
                    <DialogBox /> 
                    <PersonageBox />
                </div>     
            </div>
        </div>
    )
}

export default SceneFeedBackEnd;