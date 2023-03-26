import axios from 'axios';


export async function getPostsDetails(skip: number){
    const resp = await axios.get("https://dev.tedooo.com/hw/feed.json?skip=" + skip)
    return resp;
}

export async function getUserViewItem(view: IntersectionObserverEntry){
    const resp = await axios.get("https://www.tedooo.com/?itemId={id}")
    return resp;
}
