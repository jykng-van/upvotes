import Upvote from './Upvote';
import { useEffect, useState } from 'react';

export default function UpvoteList({numVotes=1, initialState='default', name}){
    const [voteState, setVoteState] = useState(initialState);
    const [listName, setListName] = useState(name);

    const [states] = useState(['default','selected']);

    console.log(numVotes);

    if (listName===null){ //make random list name if one doesn't exist
        const characters = 'abcefghijklmnopqrstuvwxyz0123456789';
        name = 'list_';
        for(let n=0; n<4; n++){
            name += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        setListName(name);
    }
    console.log(listName);


    function toggleState(){
        if (voteState===states[0]) setVoteState(states[1]);
        else setVoteState(states[0]);
    }
    useEffect(()=>{ //mostly just about voteState, save statechange to sessionStorage
        console.log('voteState', voteState);
        let storage = sessionStorage.getItem(name);
        let vote;
        if (storage!==null){
            vote = JSON.parse(storage);
            vote.state = voteState;
        }else{
            vote = {
                name: listName,
                num: numVotes,
                state: voteState
            }
        }
        sessionStorage.setItem(listName, JSON.stringify(vote));
    }, [voteState,listName,name,numVotes]);

    return (
        <div className="upvotes-container">
            {([...Array(numVotes)].fill(1)).map((val,i)=>(
                <Upvote key={i} state={voteState} clickCallback={toggleState} />
            ))}
        </div>
    )
}