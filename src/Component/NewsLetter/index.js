
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

export default function News() {
 
    return (
      <div className="newLetter">
        <div className="grid wide">
          <div className="containerLetter">
            <div className="newLetterText">
                <h1>Newsletter</h1>
                <p>Sign up to newsletter and stay in touch.</p>
            </div>
            <div className="newLetterInput">
                <input type="text" placeholder="Enter your email here..." id="email"/>
                <label for="email" className=""><EmailOutlinedIcon/></label>
            </div>
          </div>
        </div>
      </div>
    );
  }
  