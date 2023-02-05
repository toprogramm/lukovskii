import './PhotoPage.scss'
import Button from '../Button/Button'
import { ColorVariant } from '../Button/Button'
import { ShadowVariant } from '../Button/Button'
import ContentBox from '../ContentBox/ContentBox'
import Avatar from '../Avatar/Avatar'
import TextField from '../TextField/TextField'
import { TextColorVariant } from '../TextField/TextField'
const PhotoPage = () => {


    return (

        <div className="PhotoPage">
            <ContentBox>
                <Avatar />
                <div>
                    <TextField textColorVariant={TextColorVariant.white} name="hello" />
                    <TextField textColorVariant={TextColorVariant.usual} name="hello" />
                    <TextField textColorVariant={TextColorVariant.green} name="hello" />
                </div>
                <div className='buttonField'>
                    <Button name={<h5>  Hire me  </h5>} colorVariant={ColorVariant.black} shadowVariant={ShadowVariant.usual} />
                    <Button name={<h5>Download CV</h5>} colorVariant={ColorVariant.black} shadowVariant={ShadowVariant.usual} />
                </div>
            </ContentBox>
        </div>
    )
}
export default PhotoPage