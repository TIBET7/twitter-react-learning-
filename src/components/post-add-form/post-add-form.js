import React from 'react';

import '../post-add-form/post-add-form.css';

const PostAddForm = ({onAdd}) => {
    return (
        <div action="" className="bottom-panel d-flex">
            <input 
                className="form-control new-post-label"
                type="text"
                placeholder="О чем Вы думаете сейчас?"
            />
            <button 
                className="btn btn-outline-secondary"
                tepe="submit"
                onClick={() => onAdd('Hello')}>
                Добавить</button>
        </div>
    )
};

export default PostAddForm;