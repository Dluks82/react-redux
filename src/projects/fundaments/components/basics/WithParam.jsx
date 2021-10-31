export default function WithParam(props) {
    const status = props.grade >=7 ? 'approved' : 'disapproved'
    return (
    <div>
        <h2>{ props.title }</h2>
        <p>
            <strong>{ props.student }</strong> has grade { props.grade } and is {status}
        </p>
    </div>
    )
}