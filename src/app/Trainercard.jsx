import {imgUrl} from './constants.js'
function Trainercard() {
    return (
        <>
                {/* TrainerCard Container*/}
                <div className={`w-[512px] h-[336px] flex`} style={ {backgroundImage: `url('${imgUrl}/cards/trainerCardTemplate.png')`}}>
                    {/* Name Container*/}
                    <div className='ml-[34px] mt-[52px] w-[282px] h-[42px] absolute'>
                    </div>
                    {/* Profile Picture Container*/}
                    <div className='ml-[322px] mt-[34px] w-[156px] h-[156px] absolute'>
                        {/* Profile Picture*/}
                        <img src={`${imgUrl}/icons/1.png`} alt="" className='w-[156px] h-[156px]'/>
                    </div>
                    {/* MISC Container*/}
                    <div className='ml-[34px] mt-[82px] w-[282px] h-[42px] absolute'>
                    </div>
                    {/* MISC Container*/}
                    <div className='ml-[34px] mt-[114px] w-[282px] h-[42px] absolute'>
                    </div>
                    {/* MISC Container*/}
                    <div className='ml-[34px] mt-[148px] w-[282px] h-[42px] absolute'>
                    </div>
                    {/* MISC Container*/}
                    <div className='ml-[34px] mt-[194px] w-[282px] h-[42px] absolute'>
                    </div>
                    {/* MISC Container*/}
                    <div className='ml-[34px] mt-[240px] w-[444px] h-[62px] absolute'>
                    </div>
                </div>  
        </>

    )
}

export default Trainercard;