import { useParams, useSearchParams } from "react-router-dom"

const Article = () => {
    const [searchParams] = useSearchParams()
    const params = useParams()

    return (
        <div>I am article page
            <br/>
            <span>
                sent by search param, id: {searchParams.get('id')}, name: {searchParams.get('name')}
            </span>
            <br />
            <span>
                sent by parma, id: {params.id}, name: {params.name}
            </span>
        </div>
    )
} 

export default Article