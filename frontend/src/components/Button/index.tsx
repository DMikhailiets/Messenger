import React from 'react';
import { Button as BaseButton } from 'antd';
import classNames from "classnames";
import './button.scss'

let Button  = (props:any) =>{

    return <BaseButton  
                {...props}
                className={classNames("button", props.className, {
                    "button--large": props.size === "large"
                  })}
                />
}

export default Button