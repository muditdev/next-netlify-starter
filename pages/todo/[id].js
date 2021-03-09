import axios from 'axios'
import React from 'react'
import Link from 'next/link'

const Todo = ({data}) => {
    return (
        <div style={{
            padding: 200,
            fontSize: 30
        }}>
            <Link href="/">Back</Link>
            {!!data && (<>
                <h3>{data.title}</h3>
                <p>{data.body}</p>
            </>)}

        </div>
    )
}

export default Todo

export async function getServerSideProps(context) {
    const data = await axios.get(`https://jsonplaceholder.typicode.com/posts/${context.query.id}`)
    return {
        props: {
            data: data.data
        }, // will be passed to the page component as props
    }
}
