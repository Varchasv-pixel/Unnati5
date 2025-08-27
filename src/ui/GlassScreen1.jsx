import React from 'react'
import DetailCard1 from './DetailCard1';
import DetailCard2 from './DetailCard2';
import DetailCard3 from './DetailCard3';
import DetailCard4 from './DetailCard4';


function GlassScreen1({ variant = "projects" }) {
  const getComponent = () => {
    switch(variant) {
      case "projects":
        return <DetailCard1 />;
      case "documents":
        return <DetailCard2 />;
      case "analytics":
        return <DetailCard3 />;
      case "team":
        return <DetailCard4 />;
      default:
        return <DetailCard1 />;
    }
  };

  return getComponent();
}

export default GlassScreen1
