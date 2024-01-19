import React, { FC, ReactNode } from "react"

type TableHeadType = {
    datas: ReactNode[]
}
export const TableHead: FC<TableHeadType> = ({ datas }) => {
    return (
        <tr>
            {datas.map((data, index) => (
                <th key={index} className=" text-left text-xs text-gray-500 px-6 py-3">{data}</th>
            ))}
        </tr>
    )
}

export const TableBody: FC<TableHeadType> = ({ datas }) => {
    return (
        <tr className=" border-y">
            {datas.map((data, index) => (
                <th key={index} className=" text-left text-xs text-gray-500 px-6 py-4">{data}</th>
            ))}
        </tr>
    )
}