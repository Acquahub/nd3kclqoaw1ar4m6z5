import React from 'react'; 
import { Button, ConfigProvider } from 'antd';  
export default function DefaultButton(params) {   
    const props = params.componentStyles ? params.componentStyles : params;  
    const type = props.type ? props.type : 'primary';     
    const label = props.label ? props.label : 'Click me!';     
    const backgroundColor = props.backgroundColor ? '#' + props.backgroundColor : '#FFFFFF';     
    const bodyColor = props.bodyColor ? '#' + props.bodyColor : '#FFFFFF';     
    const primaryColor = props.primaryColor ? '#' + props.primaryColor : '#4096FF';     
    const borderColor = props.borderColor ? '#' + props.borderColor : '#D9D9D9';     
    const borderRadius = props.borderRadius ? parseInt(props.borderRadius) : 6;     
    const fontSize = props.fontSize ? parseInt(props.fontSize) : 14;     
    const marginTop = props.marginTop ? props.marginTop : '0px';     
    const marginBottom = props.marginBottom ? props.marginBottom : '0px';     
    const marginLeft = props.marginLeft ? props.marginLeft : '0px';     
    const marginRight = props.marginRight ? props.marginRight : '0px';      
    return (         
        <ConfigProvider             
        theme={{                 
            token: {                     
                colorBgContainer: backgroundColor,                     
                colorText: bodyColor,                     
                colorTextLightSolid: bodyColor,                     
                colorPrimary: primaryColor,                     
                colorBorder: borderColor,                     
                borderRadius: borderRadius,                     
                fontSize: fontSize                 
                
            }            
            
        }}         
        >             
            <div style={{ marginTop: marginTop, marginBottom: marginBottom, marginRight: marginRight, marginLeft: marginLeft }}>                 
                <Button onClick={(event) => { props.onClick ? props.onClick(event.target.innerHTML) : console.log() }}                     
                    type={type}>{label}
                </Button>             
            </div>         
        </ConfigProvider>     
        );  
    
}