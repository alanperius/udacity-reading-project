import {
    DISLIKE_POST,
    LIKE_POST,
    RECEIVE_POSTS,
    RECEIVE_POSTS_CATEGORY,
    ADD_POST,
    RECEIVE_POST,
    DELETE_POST,
    EDIT_POST,
    GET_QTY_COMMENTS
} from "../actions/post";

export default function posts(state = [], action) {
    switch (action.type) {
        case RECEIVE_POSTS:
            return [
                ...action.posts
            ]

        case RECEIVE_POST:
            return [action.post ]

        case RECEIVE_POSTS_CATEGORY:
            return [
                ...action.posts
            ]
        case LIKE_POST:
        case DISLIKE_POST:
            return state.map(post => post.id === action.post.id ? action.post : post)
        case ADD_POST:
            return [action.post, ...state]
        case DELETE_POST:
            return state.filter(post => post.id !== action.postDeleted.id)
        case EDIT_POST:
            return state.map(post => post.id === action.post.id ? action.post : post)
        case GET_QTY_COMMENTS:
            return [
                 ...state.map(post => {
                    if (post.id === action.newComment.parentId) {
                        return {
                            ...post,
                            commentCount:  action.vote === 'up'  ? post.commentCount + 1 : post.commentCount - 1
                        }
                    }
                    return post
                })
            ]
        default:
            return state
    }
}
