// import logo from './logo.svg';
import tv from './assets/img/tv.png'
import phone from './assets/img/mobile-0819.jpg'
import kids from './assets/img/Netflix-kids.png'
// import './App.css';
import './assets/css/netflix.css'

function App() {

  return (
    <div className="container">
    <div className="background">
      <div className="overlay">
      <header className="">
      <svg viewBox="0 0 111 30" data-uia="netflix-logo" class="logo" aria-hidden="true" focusable="false"><g id="netflix-logo"><path d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z" id="Fill-14"></path></g></svg>
      <div >
        <h1 className='firstText'> Unlimited movies, TV <br></br> shows, and more.</h1>
        <h2 className='secondText'>Watch anywhere. Cancel anytime.</h2>
      </div>
      <div>
          <h3 className='thirdText'> Ready to watch? Enter your email to create or restart your membership.</h3>
      </div>
      <div className="input">
      <input type="text" placeholder="Email Address" /> 
      <button className="button"><h2>Get started  </h2></button>
      </div>

      </header>
      </div>
    </div>
    <div className="secondSlide">
      <div className="heading"><h1>Enjoy on your TV.</h1> <p>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and <br /> more.</p></div>
      <div className="tv">
        <img src={tv} alt="a television" />
      </div>
     
    </div>

    <div className="thirdSlide">
      <div className="phone">
        <img src={phone} alt="a mobile phone" />
      </div>
      <div className="phonetext">
        <h1>Download your shows <br /> to watch offline.</h1>
        <p>Save your favorites easily and always have <br /> something to watch.</p>
      </div>
    </div>

    <div className="txtslide">
      <div>
      <h1>Watch everywhere.</h1>
      <p>Stream unlimited movies and TV shows on <br /> your phone, tablet, laptop, and TV.</p>
      </div>
    </div>

    <div className="fourthSlide">
      <div className="kids">
        <img src={kids} alt="the kids" />
      </div>
      <div className="foruthText">
        <h1>Create profiles for kids.</h1>
        <p>Send kids on adventures with their favorite <br /> characters in a space made just for them— <br /> free with your membership.</p>
      </div> 
    </div>

    <div className="lastSlide">
        <div>
          <h1>Frequently Asked Questions?</h1>
          <div className="one">
            <p> What is Netflix?</p> <h1>+</h1>
          </div>
          <div className="second">
            <p> How much does Netflix cost?</p> <h1>+</h1>
          </div>
          <div className="third">
            <p> Where can I watch?</p> <h1>+</h1>
          </div>
          <div className="fourth">
            <p> How do I cancel?</p> <h1>+</h1>
          </div>
          <div className="fifth">
            <p> What can I watch on Netflix?</p> <h1>+</h1>
          </div>
          <div className="sixth">
            <p> Is Netflix good for?</p> <h1>+</h1>
          </div> <br /> <br />
          <div className="seventhtext">
             <p>Ready to watch? Enter your email to create or restart your membership.</p>
          </div>
          <div className="email">
               <input type="text"  placeholder="Email Address"/>
               <button className="button"><h2>Get started</h2></button>
          </div>
        </div>

      </div>
      <div className="footer">
      <div className="Istfooter">
      <p><a href="https://app.netlify.com/sites/wishot-netlify-clone">Questions? Contact us.</a></p><br /> 
      <p><a href="https://app.netlify.com/sites/wishot-netlify-clone">FAQ</a></p>
      <p><a href="https://app.netlify.com/sites/wishot-netlify-clone">Investor Relations</a></p>
      <p> <a href="https://app.netlify.com/sites/wishot-netlify-clone">Privacy</a></p>
      <p><a href="https://app.netlify.com/sites/wishot-netlify-clone">Speed Test</a> </p> <br />
      <p><a href="https://app.netlify.com/sites/wishot-netlify-clone">Netflix Nigeria</a></p>
        </div>
        <div className="secondfooter">
              <p><br /> <br /> <br /> <a href="https://app.netlify.com/sites/wishot-netlify-clone">Help Center</a></p>
              <p><a href="https://app.netlify.com/sites/wishot-netlify-clone">Jobs</a></p>
              <p><a href="https://app.netlify.com/sites/wishot-netlify-clone">Cookie Preferences</a></p>
              <p><a href="https://app.netlify.com/sites/wishot-netlify-clone">Legal Notices</a></p>
        </div>
            <div className="thirdfooter">
            <p> <br /> <br /> <br /> <a href="https://app.netlify.com/sites/wishot-netlify-clone">Account</a></p>
            <p><a href="https://app.netlify.com/sites/wishot-netlify-clone">Ways to Watch</a></p>
            <p><a href="https://app.netlify.com/sites/wishot-netlify-clone">Corporate Information</a></p>
            <p><a href="https://app.netlify.com/sites/wishot-netlify-clone">Only on Netflix</a></p>
        </div>
       <div className="fourthfooter">
          <p> <br /> <br /> <br /> <a href="https://app.netlify.com/sites/wishot-netlify-clone">Media Center</a></p>
          <p><a href="https://app.netlify.com/sites/wishot-netlify-clone">Terms of Use</a></p>
          <p><a href="https://app.netlify.com/sites/wishot-netlify-clone">Contact Us</a></p>
       </div>

       </div>


    </div>
  );
}

export default App;
