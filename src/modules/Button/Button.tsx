import { FC } from 'react';
import './Button.scss'
export enum ColorVariant {
  usual = 'usual',
  black = 'black',
}
export enum ShadowVariant {
  usual = 'usual',
  none = 'none'
}
interface ButtonProps {
  name: JSX.Element
  colorVariant: ColorVariant
  shadowVariant: ShadowVariant
}

const Button: FC<ButtonProps> = ({ name, colorVariant, shadowVariant }) => {

  return (
    <div className="Button" style={{
      backgroundColor: colorVariant === ColorVariant.usual ? "#005025" : "rgba(0, 0, 0, 0.75)",
      boxShadow: shadowVariant === ShadowVariant.usual ? "3px 3px 3px #00000050" : "none",
    }}>{name}
    </div>
  )
}
export default Button