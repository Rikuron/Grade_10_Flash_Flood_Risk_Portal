import React from 'react';
import Overlay from '../components/overlay';

const AboutPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-cover bg-center" style={{ backgroundImage: "url('/gr10Background.png')" }}>
      <Overlay />
      <div className="z-10 mt-20 bg-white bg-opacity-75 p-8 rounded-lg text-black w-full max-w-6xl">
        <h2 className="text-3xl font-bold mb-4">What is a Flash Flood?</h2>
        <p className="mb-4">
          A Flash Flood is characterized as a sudden, dangerous, and often devastating flood caused by heavy rainfall or other events like dam failures, resulting in a rapid rise in water levels within a few minutes or hours. Unlike a normal flood's gradual increase in water level, a flash flood occurs very quickly, sweeping debris along the way.
        </p>

        <h2 className="text-3xl font-bold mb-4">Purpose of the Website</h2>
        <p className="mb-4">
          The main purpose of this website is to accelerate the data collection of flash flood prevention organizations, in order to more efficiently evacuate victims of flash floods and prevent casualties.
        </p>

        <h2 className="text-3xl font-bold mb-4">About</h2>
        <p className="mb-4">
          This website was initially idealized by by 3 student researchers from Iligan City East National High School for research purposes, with the thought of reducing human casualties caused by lack of information. Originally, once a flash flood gets predicted, the government agencies would assess which residents are a high priority to be evacuated, before proceeding to make a gap with this system is that the only way to know who should be prioritized is by doing background checks on each resident, through interviews. Due to interviews being slow and time-consuming, there would be cases where the number of residents affected are too high in contrast to the amount of time before the flash flood arrives. When this happens, the government does not have enough time to interview each resident nor assess who should be prioritized.
        </p>
      </div>

      <div className="z-10 mt-10 bg-white bg-opacity-75 p-8 rounded-lg text-black w-full max-w-6xl">
        <h2 className="text-3xl font-bold mb-4">References and Credits</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold">Student researchers:</h3>
            <ul className="list-disc list-inside">
              <li>Rey Zander O. Pabroquiz</li>
              <li>Zayred Troy A. Jariol</li>
              <li>Lyndon Cristoff B. Eugenio</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold">Website Designers:</h3>
            <ul className="list-disc list-inside">
              <li>Rey Zander O. Pabroquiz</li>
              <li>Zayred Troy A. Jariol</li>
              <li>Lyndon Cristoff B. Eugenio</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold">Website Developer:</h3>
            <ul className="list-disc list-inside">
              <li>Cristane Josh B. Eugenio</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold">Research Supervisor:</h3>
            <ul className="list-disc list-inside">
              <li>Honey Ritzel G. Barillo</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold">Qualified Scientist:</h3>
            <ul className="list-disc list-inside">
              <li>Honey Ritzel G. Barillo</li>
            </ul>
          </div>
        </div>
        <p className="text-center mt-8">Feel free to check out our research study!</p>
        <p className="text-center font-bold">“A Mathematical Approach to Disaster Risk Prediction: Implementing the Disaster Risk Formula in a User-Centered Website”</p>
        <p className="text-center mt-2">This website was developed for research purposes.</p>
      </div>
    </main>
  );
};

export default AboutPage;
