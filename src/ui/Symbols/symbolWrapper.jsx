import React from "react";

export const symbolWrapper = (WrappedComponent) => {
    return ({color, ...props}) => {
        let rgb = 'currentColor';
        if(color === 'secondary') {
            rgb = 'rgb(1, 80, 60)';
        } else if(color === 'primary') {
            rgb = 'rgb(0, 161, 121)';
        }
        return <WrappedComponent color={rgb} {...props} />
    }
}
