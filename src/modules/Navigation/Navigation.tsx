import './Navigation.scss'
import Button from '../Button/Button'
import { ColorVariant } from '../Button/Button'
import { ShadowVariant } from '../Button/Button'



const Navigation = () => {
    const aboutMe = <h5>About me</h5>
    const expirience = <h5>Expirience</h5>
    const services = <h5>Services</h5>

    return (

        <div className="Navigation">
            <Button name={aboutMe} colorVariant={ColorVariant.usual} shadowVariant={ShadowVariant.none} />
            <Button name={expirience} colorVariant={ColorVariant.usual} shadowVariant={ShadowVariant.none} />
            <Button name={services} colorVariant={ColorVariant.usual} shadowVariant={ShadowVariant.none} />
        </div>
    )
}
export default Navigation