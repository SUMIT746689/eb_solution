import { InputAdornment, TextField } from "@mui/material"

export const TextFieldWrapper = ({ startIcon }) => {
    return (
        <>
            <TextField
            color="secondary"
                sx={{ pb: '16px', width: '100%' }}
                placeholder="Your Email"
                // sx={{ borderRadius: "16px" }}
                InputProps={{
                    style: {
                        borderRadius: '16px',
                        // '&:hover fieldset': {
                        //     borderColor: 'grey',
                        // },
                        boxShadow: '0px 6px 8px 0px #FF56301A'
                    },
                    startAdornment: <InputAdornment position="start">{startIcon}</InputAdornment>,
                }}
                helperText=''
            />
        </>
    )
} 