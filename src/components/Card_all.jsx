import React from "react";
import icon_up from "/images/icon-up.svg";
import icon_down from "/images/icon-down.svg";
export default function Card_all({datos}) {





  const {userName,icon,borderColor,followers__all,followers_new,profit}=datos

const borderTopColor={
  Facebook: "linear-gradient(to right, hsl(208, 92%, 53%), hsl(208, 92%, 53%)) 1",
  Twitter: "linear-gradient(to right, hsl(203, 89%, 53%), hsl(203, 89%, 53%)) 1",
  Instagram: "linear-gradient(to right, hsl(37, 97%, 70%), hsl(329, 70%, 58%)) 1",
  YouTube:"linear-gradient(to right, hsl(348, 97%, 39%), hsl(348, 97%, 39%)) 1",
}


const borderClass=borderTopColor[borderColor]

const styleBorder={
  borderTop: "4px solid transparent",
  borderRadius: "8px" ,
 borderImage:borderClass,
}

function formatearCantidad(cantidad) {
  if (cantidad >= 10000) {
    const k = cantidad / 1000;
    return k % 1 === 0 ? `${k}K` : `${k.toFixed(1)}K`;
  }
  return cantidad.toString();
}




  return (
    <div style={styleBorder} className={`bg-fm-Very-Pale-Blue flex flex-col justify-center w-full items-center h-[200px] rounded-lg dark:bg-fm-Dark-Desaturated-Blue dark:hover:bg-[#2b324d] hover:cursor-pointer hover:bg-[#cfcfe6] hover:scale-105  transition ease-in-out`} >
      <div className="flex gap-4  mb-12 text-fm-Dark-Grayish-Blue font-bold ">
        <img src={icon} alt="" />
        <p>{userName}</p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <span className="text-8xl font-bold text-fm-Dark-Desaturated-Blue dark:text-fm-White">
          {formatearCantidad(followers__all)}
        </span>
        <p className="tracking-[5px] text-fm-Desaturated-Blue ">FOLLOWERS</p>
        <p className="flex justify-center items-center gap-4 mt-8">
          <img src={profit=="up"?icon_up:icon_down} alt="" />
          <span className= {`font-bold ${profit=="up"?"text-fm-Lime-Green":"text-fm-Bright-Red"}`}>{followers_new} Today</span>
        </p>
      </div>
    </div>
  );
}
