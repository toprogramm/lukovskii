import { FC } from 'react';
import './TextField.scss'
export enum TextColorVariant {
    usual = 'usual',
    white = 'white',
    green = 'green',

}

interface TextProps {
    name: string
    textColorVariant: TextColorVariant,
}

const TextField: FC<TextProps> = ({ name, textColorVariant }) => {
    return (
        <div className="TextField" style={{
            color: textColorVariant === TextColorVariant.white ? "#ffffff" : TextColorVariant.usual ? "#000000" : TextColorVariant.green ? "#005025" : "#f6f6f6"
        }}>
            {name}
        </div>
    )
}

export default TextField