const Btn = ({item, userSelectHandler}) => {
    return (
        <div className='btn' onClick={() => userSelectHandler(`${item === 'rock' ? 0 : item === 'paper' ? 1 : 2}`)}>
            {item === 'rock' ? '✊' : item === 'paper' ? '✋' : '✌'}
        </div>
    );
};
export default Btn;
