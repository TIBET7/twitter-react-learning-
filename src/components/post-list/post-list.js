import React from 'react';

import PostListItem from '../post-list-item';
import '../post-list/post-list.css';

const PostList = ({posts}) => {

    const elements = posts.map(item => {
        if (typeof item === 'object' && isEmpty(item)) {
            const {id, ...itemProps} = item //деструктуризация
            return (
                <li className="list-group-item" key={id}>
                    <PostListItem {...itemProps}/>
                </li>
            ) 
        }
    });

    function isEmpty(obj) {
        for(let key in obj)
        {
            return true;
        }
        return false;
    }

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}
export default PostList;