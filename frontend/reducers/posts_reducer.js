import { RECEIVE_POSTS, REMOVE_POST, RECEIVE_POST } from '../actions/post_actions'

const PostsReducer = ( state = {}, action ) => {
    Object.freeze(state)

    switch (action.type) {
        case RECEIVE_POSTS:
            // debugger
            return action.posts
        case RECEIVE_POST:
            return Object.assign({}, state, {[action.post.id]: action.post})
        case REMOVE_POST:
            let nextState = Object.assign({}. state)
            delete nextState[action.postId]
            return nextState
        default:
            return state
    }
}

export default PostsReducer