const Box = ({type, selected, result}) => {
    return (
        <div className='box'>
            <h4>{type}</h4>
            <p>{selected === 0 ? '✊' : selected === 1 ? '✋' : '✌'}</p>
            <h5>
                {type === 'user'
                    ? result === 0
                        ? 'WIN'
                        : result === 1
                        ? 'LOSE'
                        : 'TIE'
                    : result === 0
                    ? 'LOSE'
                    : result === 1
                    ? 'WIN'
                    : 'TIE'}
            </h5>
        </div>
    );
};
export default Box;
