import {useState,useEffect} from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import './App.css'
import { Home } from './components/pages/home';
import { Private } from './components/pages/Private';
import { RequireAuth } from './contexts/Auth/RequireAuth';
import { Dashboard } from './components/pages/Dashboard';
import Button from './components/layout/Button';
import { SignUp } from './components/pages/signup';

function App() {

  const home = "/";
  const privateRoute = "/private";

  const [text, setText] = useState(''); 
    const toRotate =['SkillHub'];
    const [loop, setLoop] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const period = 100;
    const [delta, setDelta] = useState(100);

    useEffect(() => {
        let ticker = setInterval(() => {
            toType()
        }, delta)
        return () => {clearInterval(ticker)}

    }, [text]) 

    const toType = () =>{
        let i = loop % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length-1) : fullText.substring(0, text.length+1);

        setText(updatedText);

        if (isDeleting && updatedText === ''){
            setIsDeleting(false);
            setDelta(period);
            setLoop(loop+1);
        }

    }

  return (
  
      <div className="App">
        <header>
          <h1>{text}</h1>
          <nav>
            <Button text='HOME' link='/'/>
            <Button text='ACESSAR' link='/login'/>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<RequireAuth><Private /></RequireAuth>}/>
          <Route path="/signup" element={<SignUp />}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
        </Routes>
      </div>
  )
}

export default App;
