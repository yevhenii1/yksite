import React from 'react';
import './news.scss'

const news = (props) => {
    return (
        <>
        {props.news.newsList.map(item => (
            <article className="post__item" key={item.id}>
                <h1>{item.title.rendered}</h1>
                <p dangerouslySetInnerHTML={{__html: item.content.rendered}}></p>

            </article>
        ))}
        </>
    );
};

export default news;
