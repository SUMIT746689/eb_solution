import React, { FC, ReactNode } from "react"

type ButtonWrapperType = {
    children: ReactNode,
    variant?: "contain" | "",
    handleClick: () => void
}
// type enum {
//     contain
// }

export const ButtonWrapper: FC<ButtonWrapperType> = (props) => {
    const { children, variant = "", handleClick } = props;
    let cssClass = '';
    if (variant === "contain") cssClass += 'bg-[#7F56D9] text-white';
    else cssClass += 'border '
    // if else(variant === "outline") cssClass += 
    // console.log({ cssClass })
    return (
        <button onClick={handleClick} className={'text-base font-medium rounded-md px-3 py-2 hover:bg-opacity-80 duration-100 ' + cssClass}>
            {children}
        </button>
    )
}

type NavButtonWrapperType = {
    children: ReactNode,
    isActive?: boolean,
    handleClick: () => void
}

export const NavButtonWrapper:FC<NavButtonWrapperType> = (props) => {
    const { children, isActive } = props
    return (
        <button className={` ${isActive ? 'bg-[#7F56D9]' : ''  } text-base font-medium rounded-md px-3 py-2 hover:bg-[#7F56D9] `}>
            {children}
        </button>
    )
}