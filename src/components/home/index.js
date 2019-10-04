import React from 'react';

import Medias from '../Medias/Medias';
import PrincipalContent from '../content/Content';

class Media extends React.Component {

  render() {
    
    return (
      <section>
        <PrincipalContent id={"5d8457c4583354017d8d6a40"} />
        <div className="container">
          <h3>Popular en netfrlix </h3>
          <Medias />
          <br/>
          <h3>Popular en netfrlix </h3>
          <Medias />
          <br/>
          <h3>Popular en netfrlix </h3>
          <Medias />
          <br/>
        </div>
      </section>
    );
  }

}

export default Media;