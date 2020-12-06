import {format, distanceInWords, differenceInDays} from 'date-fns'

const FormatBlogDate = (publishedAt:string) => {
return (
    differenceInDays(new Date(publishedAt), new Date()) > 3 ?
    distanceInWords(new Date(publishedAt), new Date())
    :
    format(new Date(publishedAt), 'MMMM d, yyyy')
)
}

export default FormatBlogDate