import Image from "next/image";
import { FC, ReactNode } from "react";

type AuthLayoutType = {
    children: ReactNode
}
const AuthLayout: FC<AuthLayoutType> = ({ children }) => {
    return (
        <div style={{padding:'28px 81px'}}>
            <div>
                <Image src='/logo.png' alt="logo" width={80} height={42} style={{objectFit:"cover"}} />
                {children}
            </div>
        </div>
    )
}

export default AuthLayout;