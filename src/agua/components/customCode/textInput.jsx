import * as React from 'react';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

export default function TextInput(params) {
    const props = params.componentStyles ? params.componentStyles : params;
    const width = { width: props.width ? parseInt(props.width) : 300 };
    const label = props.label ? props.label : 'Type ...';
    const variant = props.variant ? props.variant : 'outlined';
    const marginTop = props.marginTop ? props.marginTop : '0px';
    const marginBottom = props.marginBottom ? props.marginBottom : '0px';
    const marginLeft = props.marginLeft ? props.marginLeft : '0px';
    const marginRight = props.marginRight ? props.marginRight : '0px';

    const StyledTextField = styled(TextField)({
        '& label.Mui-focused': {
            color: props.primaryColor ? '#' + props.primaryColor : '#2c91fc',
        },
        '& label': {
            color: props.neutralColor ? '#' + props.neutralColor : '#444444',
        },
        '& input': {
            color: props.bodyColor ? '#' + props.bodyColor : '#222222',
            fontSize: props.fontSize ? props.fontSize : '1rem',
            fontFamily: props.fontFamily ? props.fontFamily : '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: props.neutralColor ? '#' + props.neutralColor : '#444444',
            },
            '&:hover fieldset': {
                borderColor: props.hoverColor ? '#' + props.hoverColor : '#2c91fc',
            },
            '&.Mui-focused fieldset': {
                borderColor: props.primaryColor ? '#' + props.primaryColor : '#2c91fc',
            },
        },
    });

    return (
        <div style={{ marginTop: { marginTop }, marginBottom: { marginBottom }, marginLeft: { marginLeft }, marginRight: { marginRight } }}>
            <StyledTextField
                onChange={(event) => { props.onChange ? props.onChange(event.target.value) : console.log() }}
                label={label}
                sx={width}
                variant={variant}
            />
        </div>
    );
}