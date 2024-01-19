import { Grid } from "@mui/material";
import Image from "next/image";
import { FC, ReactNode } from "react";

type AuthLayoutType = {
    children: ReactNode
}
const AuthLayout: FC<AuthLayoutType> = ({ children }) => {
    return (
        <Grid px="81px" pt="28px">
            <Image src='/logo.png' alt="logo" width={80} height={42} style={{ objectFit: "cover" }} />
            {children}
        </Grid>

    )
}

export default AuthLayout;