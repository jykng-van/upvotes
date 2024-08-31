import Upvote from './Upvote';
import { useEffect, useState } from 'react';

export default function UpvoteList({numVotes=1, initialState='default', stateCallback, name}){
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
        let st;
        if (voteState===states[0]) st = states[1];
        else st = states[0];

        setVoteState(st);
        if (stateCallback) stateCallback(listName, st);
    }

    return (
        <div className="upvotes-container">
            {([...Array(numVotes)].fill(1)).map((val,i)=>(
                <Upvote key={i} state={voteState} clickCallback={toggleState} />
            ))}
        </div>
    )
}