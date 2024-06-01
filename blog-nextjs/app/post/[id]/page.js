import Post from '@/app/coponents/post'

export async function generateMetadata({ params }) {
    let fetchDet = await fetch(`${process.env.NEXT_PUBLIC_API_HOST_URL}/post/${params.id}`)
    let jsonData = await fetchDet.json();
    return {
        title: jsonData.description
    }
}
const PostPage = ({ params }) => {
    return (
        <Post params={params} />
    )
}
export default PostPage