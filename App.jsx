import "./App.css";
import heroImage from "./assets/hero.png"; 
import dumblesImage from "./assets/dumbles.png"; 
import modelImage from "./assets/model.png"
import phoneImage from "./assets/phone.png"

function App() {
  return (
    <div className="flex flex-col justify-center gap-10 ">


      <div className="flex flex-col items-center gap-10 p-2 ">

        <img src={heroImage} alt="hero" className="border border-red-500" />

        <p className="font-sans text-xl max-w-prose ">Tempo's membership program offers a personalized training experience to take strength training to the next level. Get ready to lift smarter with advanced sensors on state-of-the-art equipment, track progress with detailed analytics and performance data, and train more efficiently with access to expert-led classes customized to your fitness level and preferences.</p>
        
        <button className="p-4 text-xl font-bold text-white bg-orange-600 rounded-full w-80 ">Learn More</button>

      </div>


      <div className="flex flex-col items-center bg-offwhite">

        <h1 className="font-sans text-4xl font-bold ">Guided workouts at your convenience</h1>

        <ul className="flex flex-col max-w-prose justify-evenly">
          
          <li className="flex items-center p-2 ">
          <div><img src={dumblesImage} alt="" className="1/2 " /></div>
          <div className="">
          <h2 className="font-sans text-xl font-bold">Smarter wieghtlifiting</h2>
          <p className="font-sans text-base">Know how much to lift and follow form adjustments every time you work out.</p>
          </div>
          </li>

          <li className="flex items-center p-2 ">
          <div><img src={modelImage} alt="" className="1/2 " /></div>
          <div className="">
          <h2 className="font-sans text-xl font-bold">Effective workouts</h2>
          <p className="font-sans text-base">Work out in ways that suit your body, experience, and life.</p>
          </div>
          </li>

          <li className="flex items-center p-2 ">
          <div><img src={phoneImage} alt="" className="1/2 " /></div>
          <div className="">
          <h2 className="font-sans text-xl font-bold">Goal-based training</h2>
          <p className="font-sans text-base">Set goals that positively push you and follow a tailored training experience to hit them.</p>
          </div>
          </li>
         
        </ul>
         <button className="p-4 text-xl font-bold text-white bg-orange-600 rounded-full w-80 ">Learn More</button>
      </div>


      <div className="flex flex-col gap-8 sm:items-center">

      <h1 className="py-5 font-sans text-3xl font-bold ">Membership: prepay or go monthly</h1>
        
        <div className="flex flex-col justify-around w-full gap-2 sm:items-center ">

         

          <div className="flex text-xl text-gray-600 gap-28 sm:justify-center">
            <div>
              <h1 className="px-2 font-sans text-lg font-bold text-white bg-blue-600 rounded-md max-w-fit ">BEST VALUE</h1>
              <h1 >24 months</h1>
            </div>
            
            <h1>12 months</h1>
            <h1>Monthly</h1> 
            
          </div>
          
         
            
           <div className="flex gap-20 text-xl font-bold sm:justify-center sm:pl-28">
              <div class="">
                    <p class="text-xl font-bold text-gray-800">$30/mo<span class="text-sm text-gray-500">*</span></p>
                    <p class="text-sm text-gray-600">Save $109 annually</p>
             </div>
            
              <div class=" flex flex-col ">
                    <p class="text-xl font-bold text-gray-800">$35/mo*<span class="text-sm text-gray-500">*</span></p>
                    <p class="text-sm text-gray-600">Save $48 annually</p>
             </div>
            
              <div class="">
                    <p class="text-xl font-bold text-gray-800">$39/mo*<span class="text-sm text-gray-500">*</span></p>
                    <p class="text-sm text-gray-600">12 months commitment required</p>
              </div>
            
           
      
          
            </div>

      
          
       
</div>
      </div>

      <div className="flex justify-center">
        <button className="p-4 text-xl font-bold text-white bg-orange-600 rounded-full w-80 ">Learn More</button>
      </div>


      <footer className="flex flex-col items-center gap-3 bg-black">

  <h1 className="py-5 font-mono text-3xl font-bold text-white ">tempo.fit</h1>

        <ul className="flex flex-col py-4 font-semibold text-white">
          <div className="flex justify-center gap-4">
            <li className="">Instagram</li>
            <li className="">Facebook</li>
            <li className="">Tik Tok</li>
          </div>
          <div className="flex justify-center gap-2">
            <li className="">Contact Us</li>
            <li className="">Privacy Policy</li>
            <li className="">The Beat Blog</li>
          </div>
        </ul>

        <ul className="flex flex-col py-8 text-lg font-semibold text-gray-500">
          <div className="flex justify-center gap-3">
            <li>346 9th St. San Francisco, CA 94103</li>
            <li>(833) 966-177</li>
          </div>
        
          <div className="flex justify-center gap-4 ">
            <li>Unsubscribe</li>
            <li>Terms of Service</li>
            <li>&copy; 2023 Tempo</li>
          </div>
        </ul>
      </footer>
    </div>
  );
}

export default App;
