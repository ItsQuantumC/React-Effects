import './App.css';
import { useEffect, useMemo } from 'react';
import  useKeyDown from './Keydown';

/*const CheckBox = () => {
  const [val, setVal] = useState('');
  const [phrase, setPhrase] = useState('example phrase');

  const createPhrase = () => {
    setPhrase(val);
    setVal('');
  };

  useEffect(() => {
    console.log(`typing '${val}'`);
  },[val])

  useEffect(() => {
    console.log(`typing '${phrase}'`);
  },[phrase]);

  return (
    <>
      <label>Fav Phrase</label>
      <input value={val} placeholder={phrase} onChange={e => setVal(e.target.value)} />
      <button onClick={createPhrase}>send</button>
    </>
  )
}*/

function WordCount({ children= ''}) {
  useKeyDown();
  const words = useMemo(() => children.split(' '), [children])
  
  useEffect(() => {
    console.log('fresh render');
  },[words]);

  return (
    <>
      <p>{children}</p>
      <p>
        <strong>{words.length} - words</strong>
      </p>
    </>
  )
}

const App =() => {
  return <WordCount>You are not going to believe this but......</WordCount>

}

export default App;
