import React from 'react';


import Slider from "react-slick";

import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Player from '../player'
import { Link } from "react-router-dom";

const MEDIA_QUERY = gql`
query{
  getMedias{
    _id,
    title,
    description,
    mediaLink
  }
}
`;

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3
};

const Medias = () => (

  <Query query={MEDIA_QUERY}>
    {
      ({ loading, error, data }) => {
        if (loading) return (<p>bajando videos...</p>);
        if (error) return (<p>ocurrio algun error</p>);

        return (
          <div>
            <Slider {...settings}>
            {
              data.getMedias.map((media, index) => (
                <div key={media._id} style={{padding:'5px !important'}} id={media._id}>
                  <div style={{padding:5}}>
                    <h5>{media.title}</h5>
                    {
                      (media.mediaLink)? 
                      <div>
                        <Link to={'/watch/'+media._id}>
                          <Player url={media.mediaLink} index={ index } />
                        </Link>
                      </div>
                      : <p> {'No hay media :('} </p>
                    }
                  </div>
                </div>
              ))
            }
            </Slider>
          </div>
        )
      }
    }
  </Query>
);

export default Medias;