"use client";

import { FC, ReactNode } from "react";
import { useAppSelector } from "@/redux/hook";
import { useRouter } from "next/navigation";

type ValidateUserType = {
    children: ReactNode
}
const ValidateUser: FC<ValidateUserType> = ({ children }) => {
    const { success, loading, error } = useAppSelector((state) => state.authUserLogin);
    console.log({ loading, success })
    const router = useRouter();
    if (loading) return <>loading...</>
    else if (!success) {
        router.push('/login')
        return;
    }
    return <>{children}</>

}

export default ValidateUser;