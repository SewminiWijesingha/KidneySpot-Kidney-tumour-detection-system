import React from "react";

function Hero() {
  return (
    <div>
      <div>
        <div>
          <div>
            <h1>KidneySpot</h1>
            <p>
              {" "}
              <ol className="list-disc">
                <li>Accuracy </li>
                <li>Open Source</li>
                <li>Kidney Classification</li>
                <li>Diagnosis Report Analysis</li>
                <li>Automated Reporting</li>
              </ol>
            </p>

            <button>REQUEST A DEMO NOW</button>
          </div>
          <div>
            {/*<div className='flex items-center justify-between'>
              <img
                src={HeroImage} // Assuming your image is stored in the public folder
                alt='Hero'
                className='w-full h-auto' // Adjust width and height as needed
              />
  </div>*/}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
