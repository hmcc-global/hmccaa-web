import * as React from "react"
import imgGreeters from "../../images/connect-greeters.png"

const sundayCelebration = () =>{
  return <div className="w-[1440px] h-[460px] px-[130px] py-20 bg-white justify-center items-center inline-flex">
  <div className="self-stretch justify-start items-center gap-[120px] inline-flex">
    <div className="flex-col justify-start items-start gap-5 inline-flex">
      <div className="flex-col justify-start items-start gap-3 flex">
        <div className="text-[color:#4352B1] text-xl font-bold leading-[30px]">SUNDAY CELEBRATION</div>
        <div className="w-[450px] text-black text-[40px] font-semibold leading-[48px]">COME CELEBRATE WITH US!</div>
      </div>
      <div className="w-[480px] text-black text-base font-normal leading-normal">Sunday Celebration is HMCC’s weekend gathering where we come together to worship God and celebrate His work in our lives. All are welcome!</div>
    </div>
    <div className="w-[580px] h-[300px] relative bg-zinc-600">
      <img className="mb-3" src={imgGreeters} />
      <div className="w-[270px] left-[155px] top-[78px] absolute text-center text-[color:white] text-[40px] font-bold leading-[48px] tracking-widest">Greeters (host team welcoming)</div>
    </div>
  </div>
</div> 

};

export default sundayCelebration;