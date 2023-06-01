import React from 'react'
import { Container, Row ,Col} from 'react-bootstrap'
import styles from "./Home.module.css"

const HoMe = () => {
  return (
   <>

   <Container fluid>
    <Row>
      <Col sm={4} className='px-0'>
      <div className={styles.homediv}>
          <img className={styles.homeImg}  src='img/girl.jpeg' /></div> 
          <p className={styles.homePera}> All said replace that a reader<br/>
              distracted by the readable </p>
      </Col>

      <Col sm={4} className='px-0'>
        <div className={styles.homediv}>
          <img className={styles.homeImg}  src='img/main.jpeg' /></div> 
          <p className={styles.homePera}> All said replace that a reader<br/>
              distracted by the readable </p>

      </Col>
      <Col sm={4} className='px-0'>
      <div className={styles.homediv}>
          <img className={styles.homeImg}  src='img/main2.jpeg' /></div> 
          <p className={styles.homePera}> All said replace that a reader<br/>
              distracted by the readable </p>

      </Col>
    </Row>
   </Container>


   </>
  )
}

export default HoMe
