import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const News = (props) => {
  const { artical } = props; 
  if (!artical) {
    return <div>No article data available</div>;
  }

 
  const { author, description, title, urlToImage, url } = artical;

  return (
    <div className="mb-4">
      <Card>
        <Card.Header>{title || 'No title available'}</Card.Header>
        <Card.Body>
          <Card.Title>{author || 'Unknown author'}</Card.Title>
          
          {/* Display image if available */}
          {urlToImage && (
            <Card.Img 
              variant="top" 
              src={urlToImage} 
              alt={title}
              style={{ maxHeight: '300px', objectFit: 'cover' }}
              className="mb-3"
            />
          )}
          
          <Card.Text>
            {description || 'No description available'}
          </Card.Text>
          
         
          <Button 
            variant="primary" 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Read Full Article
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default News;