import  Container  from 'react-bootstrap/Container';
import  Carousel from 'react-bootstrap/Carousel';
import  Button  from 'react-bootstrap/Button';
import  Row  from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import ReactPlayer from 'react-player'
import Waterfall from "./assets/waterfall.jpg";
import River from "./assets/river.jpg";
// import demovideo from './assets/tree.mp4'
import './App.css';

function App() {
  
 const youTubeVideo = 'https://www.youtube.com/watch?v=ObYRYF3d38Y';
    

  return (
    <div>
        <Container className="container-home" fluid>   
            
              <Row xs={'auto'}> 
                  <Col md={1 }></Col>
                  <Col className="text-overlay" md={ 10 }  sm={ 8 }>
                  <h1>
                    This is a sample text overlay
                  </h1> 
                  <br />
                  <p>This is a sample text. You may design it as you need based on responsive design</p>
                  <Button size="lg" variant="success">Learn More</Button>{' '}     
                  </Col>       
                
              </Row>      
               
      </Container>
      <Carousel  fade>
              <Carousel.Item>
              <div className="player-wrapper  d-block w-100">
                  <ReactPlayer                  
                  className="react-player"                 
                    // url={ demovideo }      
                    url={ youTubeVideo }      
                    loop = { true }
                    height={'100%' }  
                    width={'auto'}                          
                    muted={true}            
                    playing={true }      
                                        
                  />     
                </div>       
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  className="d-block w-100" 
                  src= { Waterfall }
                  alt="waterfall"                 
                  height={'100%' }  
                  width={'100%'}         
                  
                />              
              </Carousel.Item>
              <Carousel.Item>
              <Image
                  className="d-block w-100"
                  src= { River }
                  alt="river"
                  height={'100%' }  
                  width={'100%'}         
                
                />              
              </Carousel.Item>              
            </Carousel>       
   
            <Container className="container-home" fluid>   
            
            <Row xs={'auto'}>                 
                <Col>
                <h1>
                  Thi is a sample heading
                </h1> 
                <p>You can add whatever text you need 
                  </p>     
               
                </Col>       
              
            </Row>      
             
    </Container>
    </div>
  );
}

export default App;
