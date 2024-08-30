import Plus from './plus.svg';
import './App.css';
import './Upvote';
import UpvoteList from './UpvoteList';
import { useState, useEffect } from 'react';



function App() {
  const [lists] = useState(['list1','list2','list3']);
  const voteStates = ['default','selected'];
  const defaultVotes = [
    {num:1, state:voteStates[0], name:'list1'},
    {num:3, state:voteStates[0], name:'list2'},
    {num:1, state:voteStates[1], name:'list3'}
  ];

  const [votes, setVotes] = useState([]);
  console.log(votes);
  useEffect(()=>{ //initialize votes by loading from sessionStorage or using a default
    console.log('useEffect');
    let initialVotes = [];
    for(let i in lists){
      let name = lists[i];
      console.log(i, name, sessionStorage.getItem(name));
      let vote;
      if (sessionStorage.getItem(name)!==null){
        vote = JSON.parse(sessionStorage.getItem(name));
        sessionStorage.setItem(vote.name, JSON.stringify(vote));
      }else{
        vote = defaultVotes[i]; //just get default
      }
      console.log(vote);
      initialVotes.push(vote);
    }
    setVotes(initialVotes);
    console.log(votes);
  },[]);

  useEffect(()=>{
    console.log('votes changed');
    for(let vote of votes){
      sessionStorage.setItem(vote.name, JSON.stringify(vote));
    }
  },[votes])

  function addUpvote(i){ //add an upvote to the list
    console.log(i);
    setVotes(votes.map((v,index)=>{
      if (index===i) v.num++;
      return v;
    }));
  }

  return (
    <div className="App">
      {votes.map((voteInfo, i)=>(
        <div className="upvote-list">
          <UpvoteList key={i} numVotes={voteInfo.num} initialState={voteInfo.state} name={voteInfo.name} />
          <button className="add-upvote" title="Add Upvote" onClick={()=>addUpvote(i)}><img src={Plus} alt="+" /></button>
        </div>
      ))}
    </div>
  );
}

export default App;
