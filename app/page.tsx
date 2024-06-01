import Empowering from './components/empowering/Empowering';
import './components/style/home.css'

export default function Home() {
  return (
    <>
      <div>
        
        
        <h1 className="inspir">Inspiring Women To Code;</h1>
        <h3 className='explore'>Explore the programming areas of interest you desire.</h3>
        <div className="home-container">
        <div className='bag-green'>



</div>

        <button className='exp-butt'>Explore our Courses</button>
        <div className="home-images">
          <div className="cul-one">
          <img src="/images/1.jpg" alt="Image 1" />
        <img src="/images/2.jpg" alt="Image 2" />

          </div>
          <div className="cul-two">
          <img src="/images/3.jpg" alt="Image 3" />
        <img src="/images/4.jpg" alt="Image 4" />

          </div>
       
        <div className="cul-three">
        <img src="/images/5.jpg" alt="Image 5" />

<img src="/images/6.jpg" alt="Image 6" />

        </div>
        <div className="cul-fuor">
        <img src="/images/7 .jpeg" alt="Image 7" />

<img src="/images/8 .jpeg" alt="Image 8" />
        </div>
        <div className="cul-five">
        <img src="/images/9.jpeg" alt="Image 9" />
        <img src="/images/10 .jpeg" alt="Image 10" />

        </div>
        

       

       

        </div>



        </div>
        {/* <button className='exp-butt'>Explore our Courses</button> */}
       


        

        

      




       

        </div>
        <Empowering/>

    </>
  );
}
