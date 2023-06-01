import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel';
import styles from "./About.module.css"

const About = () => {
  return (
   <>
   <Container fluid className={styles.aboutRow}>
    <Container>
    <Row> 
      <h1 className='text-center mt-4'>About Blogger Team</h1>
      <p className='text-center'>Who love eco friendly system very much.</p>
      <Col sm={6} className={styles.aboutCol}>
      It is a long established fact that a reader will be distracted by the readable 
      content of a page when looking at its layout. The point of using Lorem Ipsum 
      is that it has a more-or-less normal distribution of letters, as opposed to
       using 'Content here, content here', making it look like readable English. 
       Many desktop publishing packages and web page editors now use Lorem Ipsum as
     sometimes by accident, sometimes on purpose (injected humour and the like).

      </Col>

      <Col sm={6}>
      <Carousel>
      <Carousel.Item>
        <img
          className={styles.aboutCarousel}
          src="img/team.jpg"
          alt="First slide"
        />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
           className={styles.aboutCarousel}
          src="img/team1.jpg"
          alt="Second slide"
        />

        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
           className={styles.aboutCarousel}
          src="img/team2.jpg"
          alt="Third slide"
        />

        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>


      </Col>

    </Row>
    </Container>
   </Container>
   </>
  )
}

export default About
