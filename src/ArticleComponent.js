import React from 'react';

const Article = ({ imageSrc, price, name, description }) => {
  return (
    <div className="grid-item">
      <div class="allArticles"><img src={imageSrc} alt={name} /></div>
      <h3>{name}</h3>
      <p>{description}</p>
      <p>Prix : {price} €</p>
    </div>
  );
}

export default Article;