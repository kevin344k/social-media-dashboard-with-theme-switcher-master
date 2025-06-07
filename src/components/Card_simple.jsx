import React from "react";

import icon_up from "/images/icon-up.svg";
import icon_down from "/images/icon-down.svg";
export default function Card_simple({datos}) {
  const {icon,todayOverall}=datos
  console.log(todayOverall);
  
function formatearCantidad(cantidad) {
  if (cantidad >= 10000) {
    const k = cantidad / 1000;
    return k % 1 === 0 ? `${k}K` : `${k.toFixed(1)}K`;
  }
  return cantidad.toString();
}



  return (

  todayOverall.map((item)=>{
    return (
          <div className="bg-fm-Very-Pale-Blue flex justify-between p-12 w-full items-center h-[140px] rounded-lg bprder dark:bg-fm-Dark-Desaturated-Blue hover:scale-105  transition ease-in-out hover:bg-[#cfcfe6] dark:hover:bg-[#2b324d] hover:cursor-pointer ">
      <div className="flex h-full flex-col justify-between">
        <p className="text-fm-Dark-Grayish-Blue font-bold text-2xl">{item.title}</p>
        <span className="text-6xl font-bold text-fm-Dark-Desaturated-Blue dark:text-fm-White">{formatearCantidad(item.amount)}</span>
      </div>
      <div className="flex h-full flex-col justify-between items-center">
        <img src={icon} alt="" />

        <p className="flex justify-center items-center gap-2">
          <img src={item.profit=="up"?icon_up:icon_down} alt="" />
          <span className={`font-bold ${item.profit=="up"?"text-fm-Lime-Green":"text-fm-Bright-Red"}`}>{item.today_percentage}%</span>
        </p>
      </div>
    </div>
    )
  })

  );
}
