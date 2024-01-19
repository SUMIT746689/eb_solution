"use client"
import { Box, Button, Checkbox, Grid, InputAdornment, TextField, Typography } from '@mui/material'
import Image from 'next/image'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { Formik } from "formik";
import * as Yup from 'yup';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { loginUser } from '@/redux/actions/authActions';
const dangerColor = '#FF5630';
const lightGrayColor = '#F0F5FA';
const borderDefaultColor = '#F3F3F3';

const Login = () => {

    // @ts-ignore
    const { loading, userInfo, error, success } = useAppSelector((state) => state.authUserLogin)
    const dispatch = useAppDispatch()
    const navigate = useRouter()
    console.log({ error })

    useEffect(() => {
        // @ts-ignore
        if (error) toast.error(error);
        if (success) {
            toast.success("Registration successfull")
            navigate.push("/users")
        }
        return
    }, [error, success])


    const handleSubmit = async (_values: { email: string, password: string }) => {
        // @ts-ignore
        dispatch(loginUser (_values))
    }


    return (
        <Grid minHeight={'calc(100vh - 75px)'} display="flex" justifyContent={"center"} alignItems={'center'}>
            <ToastContainer />
            <Grid width="540px">
                <Typography variant='h4' fontSize={'26px'} fontWeight={700} textAlign="center">Sign In</Typography>
                <Typography pb={'30px'} color={'#8A94A6'} fontWeight={500} fontSize={'18px'} pt={'20px'} textAlign="center">Welcome back, you’ve been missed!</Typography>

                <Grid pb={'30px'} display="grid" gridTemplateColumns="1fr 1fr" columnGap="30px" >
                    <Button sx={{ textTransform: 'capitalize', px: '28px', py: '16px', display: "flex", justifyContent: 'left', textAlign: 'left', columnGap: '11px', borderRadius: '16px', color: '#8A94A6', backgroundColor: lightGrayColor, fontSize: '16px', fontWeight: 500 }}><Image src={'/icons/google.svg'} alt='' width={24} height={24} />Sign In with Google</Button>
                    <Button sx={{ textTransform: 'capitalize', px: '28px', py: '16px', display: "flex", justifyContent: 'left', textAlign: 'left', columnGap: '11px', borderRadius: '16px', color: '#8A94A6', backgroundColor: lightGrayColor, fontSize: '16px', fontWeight: 500 }}><Image src={'/icons/apple.svg'} alt='' width={24} height={24} />Sign In with Apple ID</Button>
                </Grid>

                <Grid pb={'30px'} position="relative" display="flex" justifyContent="center" alignItems="center">
                    <Grid fontWeight={500} fontSize={'20px'} px="28px" zIndex={10} color={'#B0B7C3'} sx={{ backgroundColor: "white" }}>OR</Grid>
                    <Grid position="absolute" width={"100%"} height="1px" sx={{ backgroundColor: lightGrayColor }}></Grid>
                </Grid>

                <Formik
                    initialValues={{
                        email: '',
                        password: '',
                        submit: null
                    }}
                    validationSchema={Yup.object().shape({
                        email: Yup.string()
                            .email()
                            .max(255)
                            .required('Please enter a valid email address.'),
                        password: Yup.string()
                            .min(4)
                            .required('Please enter a valid password.')
                    })}
                    onSubmit={handleSubmit}
                >
                    {({ errors, touched, values, handleChange, handleSubmit }) => {
                        console.log({ errors })
                        return (
                            <form onSubmit={handleSubmit}>

                                <TextField
                                    sx={{
                                        pb: '16px',
                                        width: '100%',
                                        '& fieldset': {
                                            borderColor: Boolean(touched.password && errors.password) ? dangerColor : borderDefaultColor
                                        },
                                    }}
                                    placeholder="Your Email"
                                    InputProps={{
                                        style: {
                                            borderRadius: '16px',
                                            boxShadow: Boolean(touched.email && errors.email) ? '0px 6px 8px 0px #FF56301A' : 'none'

                                        },
                                        startAdornment: <InputAdornment position="start"><AlternateEmailIcon sx={{ width: '22px', height: '22px', color: '#B0B7C3' }} /></InputAdornment>,
                                    }}
                                    name='email'
                                    value={values.email}
                                    onChange={handleChange}
                                />

                                {errors.email && <Grid textTransform="revert" color={dangerColor} pb={"16px"}>{errors.email}</Grid>}

                                <TextField
                                    sx={{
                                        pb: '16px', width: '100%', '& fieldset': {
                                            borderColor: Boolean(touched.password && errors.password) ? dangerColor : borderDefaultColor
                                        },
                                    }}
                                    placeholder="Password"
                                    InputProps={{
                                        style: {
                                            borderRadius: '16px',
                                            boxShadow: `${Boolean(touched.password && errors.password) ? '0px 6px 8px 0px #FF56301A' : 'none'}`
                                        },
                                        startAdornment: <InputAdornment position="start"><Image src={"/icons/lock.svg"} alt='lock' width={22} height={22} /></InputAdornment>,
                                    }}
                                    name="password"
                                    value={values.password}
                                    onChange={handleChange}
                                />

                                {
                                    errors.password && <Grid textTransform="capitalize" color={dangerColor} pb={"16px"}>{errors.password}</Grid>
                                }

                                <Grid pb={'30px'} display="flex" columnGap="18px" justifyContent="left" alignItems="center">
                                    <Checkbox
                                        // {...label}

                                        // defaultChecked
                                        sx={{
                                            color: '#EDEFF1',
                                            backgroundColor: '#EDEFF1',
                                            width: '28px',
                                            height: '28px',
                                            borderRadius: '8px',
                                            border: '1px solid white',
                                            '&.Mui-checked': {
                                                color: "red"
                                            },
                                            // '&.Mui-'
                                            '& .MuiSvgIcon-root': { fontSize: 28 }
                                        }}
                                    />
                                    <Grid>Remember Me</Grid>
                                </Grid>

                                <Button type='submit' variant='contained' sx={{ textTransform: 'capitalize', fontSize: '16px', fontWeight: 500, borderRadius: "16px", backgroundColor: '#377DFF', py: '14px', width: "100%" }}>
                                    Sign In
                                </Button>
                            </form>
                        )
                    }}
                </Formik>
            </Grid>
        </Grid>
    )
}

export default Login