
export const Screen = ({displayText}) => {
    return (
        <div className='screen'>
            <p className='result' ></p>
            <p className='operation' type="text" >{displayText}</p>
        </div>
    )
}