import React from 'react'

import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import { Link } from "react-router-dom"
import Slider from "react-slick"
import Player from '../player'

const MEDIA_QUERY = gql`
query{
  getContents{
    _id
    title
    description
    imgHero
    overViewLink
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
              data.getContents.map((content, index) => (
                <div key={content._id} style={{padding:'5px !important'}} id={content._id}>
                  <div style={{padding:5}}>
                    {
                      (content.imgHero)? 
                      <div>
                        {/*<Link to={'/watch/'+content._id}></Link>*/}
                        <img src={content.imgHero} alt={content.title} style={{width: '100%'}} />
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