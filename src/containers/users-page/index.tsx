"use client"
import React, { FC } from "react";
import { Avatar, Grid, InputAdornment, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Image from "next/image";
import { useAppSelector } from "@/redux/hook";

const textColor = '#B0B7C3';
const textDarkColor = '#4E5D78'
const serarchBtnBackground = '#F0F5FA'
type UsersType = {
    data: any[];
}
const Users: FC<UsersType> = ({ data }) => {
    return (
        <>
            <Grid container px="36px" pt="24px">
                <Grid item height="120px" width="100%" >
                    <Grid item mb="auto" display="flex" justifyContent="space-between" >
                        <TextField
                            sx={{
                                color: textColor,
                                maxWidth: '540px',
                                width: '100%',
                                '& fieldset': {
                                    border: 'none'
                                },
                            }}
                            placeholder="Search"
                            InputProps={{
                                style: {
                                    backgroundColor: serarchBtnBackground,
                                    borderRadius: '16px',
                                },
                                endAdornment: <InputAdornment position="start"><SearchIcon sx={{ width: '22px', height: '22px', color: '#B0B7C3' }} /></InputAdornment>,
                            }}
                        />
                        <Grid display="flex" columnGap="40px" height="fit-content" my="auto" sx={{ cursor: "pointer" }}>
                            <NotificationsNoneIcon sx={{ color: textColor,my:'auto' }} />
                            <Avatar alt="Remy Sharp" src="/dummy-avatar.png" />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container fontSize="23px" pb="40px" fontWeight={600}>
                    User List
                </Grid>
                <Grid item width="100%">
                    <table style={{ width: "100%", borderCollapse: 'separate', borderSpacing: '48px 15px', color: textDarkColor, fontWeight: 600, textAlign: 'left' }} >
                        <thead>
                            <tr style={{ fontSize: "12px" }}>
                                <th>#ID</th>
                                <th>USER</th>
                                <th>EMAIL</th>
                                <th style={{ textAlign: 'right' }}>OPTIONS</th>
                            </tr>
                        </thead>
                        <tbody style={{ fontSize: '14px' }} >
                            {
                                data?.map((user: any) => (
                                    <tr key={user.id}>
                                        <td>
                                            {user?.id}
                                        </td>
                                        <td style={{ display: 'flex', columnGap: "20px", alignItems: "center" }}>
                                            <Image src={user?.avatar} width={60} height={60} alt="image" style={{ borderRadius: '15px' }} />
                                            <div >
                                                {user?.first_name} {user?.last_name}
                                            </div>
                                        </td>
                                        <td>
                                            {user?.email}
                                        </td>
                                        <td style={{ textAlign: 'right' }}>
                                            <MoreHorizIcon sx={{ width: 30, height: 30, color: textDarkColor }} />
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </Grid>
            </Grid>
        </>
    )
}

export default Users;