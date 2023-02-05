import './ContentBox.scss'

function ContentBox(props: any) {
    return (
        <div className="ContentBox">{props.children}
        </div>
    )
}
export default ContentBox