import { Button, Grid, TextField, Typography } from '@mui/material'
import Image from 'next/image'
const Page = () => {
    return (
        <>
            <Typography variant='h4' fontSize={'26px'} fontWeight={700}>Sign In</Typography>
            <Typography color={'#8A94A6'} fontWeight={500} fontSize={'18px'} pt={'20px'}>Welcome back, you’ve been missed!</Typography>
            <Grid pt={'36px'} display="flex">
                <Button sx={{ px: '35px', py: '20px', display: "flex", gap: '13px', borderRadius: '16px', color: '#8A94A6', backgroundColor: '##F0F5FA' }}><Image src={'/icons/google.svg'} alt='' width={24} height={24} />Sign In with Google</Button>
                <Button sx={{ px: '35px', py: '20px', display: "flex", gap: '13px', borderRadius: '16px', color: '#8A94A6', backgroundColor: '##F0F5FA' }}><Image src={'/icons/apple.svg'} alt='' width={24} height={24} />Sign In with Apple ID</Button>
            </Grid>
            <TextField />
        </>
    )
}

export default Page