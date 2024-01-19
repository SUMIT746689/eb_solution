import React, { FC, ReactNode } from "react"

type ContainerType = {
    children: ReactNode
}

export const Container: FC<ContainerType> = (props) => {
    const { children } = props;
    return (
        <div className=" px-28 w-full">
            {children}
        </div>
    )
}