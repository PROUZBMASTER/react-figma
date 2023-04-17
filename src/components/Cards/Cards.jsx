import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './cards-demo.css'
import { data } from './data'

function Cards () {
  return (
    <>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />

      <Container>
        <Row>
          <Col lg={4}>
            <h1 className='popular'>Popular Destinations</h1>
          </Col>
        </Row>
        <Row className='mt-5'>
          {data?.map(res => {
            return (
              <>
                <Col lg={2}>
                  <div className='box'>
                    <img src={res?.img  } alt='' className='image' />
                    <h5 className='name'>{res?.name}</h5>
                    <p className='cityName'>{res?.cityName}</p>
                  </div>
                </Col>
              </>
            )
          })}
        </Row>
      </Container>
    </>
  )
}

export default Cards