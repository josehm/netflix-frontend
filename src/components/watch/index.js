import React from 'react';

import Media from '../Medias/Media';

class Watch extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
			numeroEtapa: 6,
    }
  }

  render() {
    
    return (
      <section>
        <Media id={this.props.match.params.id} />
      </section>
    );
  }

}

export default Watch;