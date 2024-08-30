import './Cards.css'
import '../../App.css';
import  Card from '../Card.tsx'
function Cards() {
    return (
        <div style={{marginTop: "50px", float: "right"}}>
            <div style={{display:"block" }} >
                <p className='title'>محبوبترین <span className='highText'>پزشکان </span>این ماه</p>
            </div>
            <div style={{display: "flex"}}>
                <div >
                    <Card/>
                </div>
                <div>
                    <Card/>
                </div>
                <div>
                    <Card/>
                </div>

            </div>

        </div>
    );
}

export default Cards;