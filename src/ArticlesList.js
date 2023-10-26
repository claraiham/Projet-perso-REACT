import React from 'react';
import Article from './ArticleComponent';

import aloeVera from './img/aloeVera.jpg';
import bonsai from './img/bonsai.jpg';
import fraisier from './img/fraisier.jpg';
import framboisier from './img/framboisier.jpg';
import groseillier from './img/groseillier.jpg';
import monstera from './img/monstera.jpg';
import myrtillier from './img/myrtillier.jpg';
import orhideeBlancRose from './img/orchideeBlancRose.jpg';
import spathiphylleWallis from './img/spathiphylleWallis.jpg';

const ArticlesList = () => {
  const articles = [
    {
      imageSrc: aloeVera,
      price: 20,
      name: 'Aloe Vera',
      description: 'Description de l\'Aloe Vera.'
    },
    {
      imageSrc: bonsai,
      price: 30,
      name: 'Bonsai',
      description: 'Description du Bonsai.'
    },
    {
      imageSrc: fraisier,
      price: 25,
      name: 'Fraisier',
      description: 'Description du fraisier.'
    },
    {
      imageSrc: framboisier,
      price: 25,
      name: 'Framboisier',
      description: 'Description du framboisier.'
    },
    {
      imageSrc: groseillier,
      price: 25,
      name: 'Groseillier',
      description: 'Description du groseillier.'
    },
    {
      imageSrc: monstera,
      price: 40,
      name: 'Monstera',
      description: 'Description du Monstera.'
    },
    {
      imageSrc: myrtillier,
      price: 30,
      name: 'Myrtillier',
      description: 'Description du Myrtillier.'
    },
    {
      imageSrc: orhideeBlancRose,
      price: 35,
      name: 'Orchidée Blanc Rose',
      description: 'Description de l\'Orchidée Blanc Rose.'
    },
    {
      imageSrc: spathiphylleWallis,
      price: 35,
      name: 'Spathiphyllum Wallis',
      description: 'Description du Spathiphyllum Wallis.'
    }
  ];

  return (
    <div className="grid-container">
      {articles.map((article, index) => (
        <Article 
          key={index} 
          imageSrc={article.imageSrc} 
          price={article.price} 
          name={article.name} 
          description={article.description} 
        />
      ))}
    </div>
  );
}

export default ArticlesList;