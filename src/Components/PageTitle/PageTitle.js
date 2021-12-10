import "./PageTitle.scss"

export default function PageTitle(props){
    return(
        <h2 className="page-title">{props.text}</h2>
    )
}