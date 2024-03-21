const Box = ({type, selected, result}) => {
    console.log('a', type, selected, result);
    let resultClass = 'tie';
    if (result === 0) {
        type === 'user' ? (resultClass = 'win') : type === 'com' ? (resultClass = 'lose') : (resultClass = 'tie');
    } else if (result === 1) {
        type === 'user' ? (resultClass = 'lose') : type === 'com' ? (resultClass = 'win') : (resultClass = 'tie');
    }
    return (
        <div className={`box ${resultClass}`}>
            <h4>{type}</h4>
            <p>{selected?.icon}</p>
            <h5>{resultClass.toUpperCase()}</h5>
        </div>
    );
};
export default Box;
