export default function Upvote({state, clickCallback}){
    let classes = `upvote ${state}`;
    return (
        <button className={classes} onClick={clickCallback}>
            <span className="arrow"></span>
        </button>
    )
}