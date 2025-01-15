// Import the character images
import marvinImg from '../img/marvin-btn.png';
import arthurImg from '../img/arthur-btn.png';
import zaphodImg from '../img/zaphod-btn.png';
const HomePage: React.FC = () => {


  return (
    <main>
      <div className="info-div">
      <h2>Don't Panic – You're on the most inaccurate news site in the galaxy!</h2>
        <p>In an era where disinformation is everywhere, why fight it when you can have fun with it? At The Journalist's Guide To Inaccuracy, we say, "If you can't beat 'em, join 'em!" Embrace the chaos and dive headfirst into a world where truth is optional and creativity reigns supreme. Our AI-powered characters—Marvin the Paranoid Android, Arthur Dent, and Zaphod Beeblebrox—are here to deliver news and articles with a twist of humor, absurdity, and delightful inaccuracy. </p>
        <p>Choose your narrator and watch as they craft stories with their signature personalities. From Marvin’s gloomy rants to Zaphod’s outrageous exaggerations, you’re in for a ride that blends wit and nonsense in perfect harmony. Don’t panic—we’ve got all the facts wrong just for you!</p>
        <p>And, of course, no article is complete without visuals. Each story comes with custom AI-generated images, stored safely in the cloud, ready for you to enjoy and share.</p>
        <p>So sit back, relax, and let’s rewrite reality together. Because here, truth is overrated—and the fun begins where accuracy ends!</p>       
       
       <h2>Wanna try it out?</h2>
    
          <h3>Step 1 - Choose your topic</h3>
          <p>
            Dive into a world of infinite possibilities! Start by selecting a topic that tickles your fancy. Whether it’s an outrageous news story, an absurd product review, or an outlandish event in the galaxy, the choice is yours. Let your imagination run wild and think outside the box! Remember, the more ridiculous, the better!
          </p>

          <h3>Step 2 - Select your audience</h3>
          <p>
            Next, it’s time to think about who will be reading your masterpiece. Will it be confused Earthlings trying to make sense of the universe? Or perhaps intergalactic beings looking for some lighthearted entertainment? Tailoring your content to the right audience will ensure maximum hilarity and engagement. The more you know your audience, the more nonsensical your article can be!
          </p>

          <h3>Step 3 - Pick a character</h3>
          <p>
            Now comes the fun part—select your narrator! Choose from our quirky characters: 
          </p>
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <div style={{ textAlign: 'center' }}>
              <img src={marvinImg} alt="Marvin the Paranoid Android" style={{ width: '150px' }} />
              <p>Marvin the Paranoid Android</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <img src={arthurImg} alt="Arthur Dent" style={{ width: '150px' }} />
              <p>Arthur Dent</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <img src={zaphodImg} alt="Zaphod Beeblebrox" style={{ width: '150px' }} />
              <p>Zaphod Beeblebrox</p>
            </div>
          </div>
          <p>
            Each character brings their unique flair and perspective to the table. Whether you choose Marvin’s gloomy sarcasm, Arthur’s bewildered confusion, or Zaphod’s flamboyant exaggeration, your article will have the perfect voice to match its topic and audience!
          </p>

          <h3>Step 4 - Create nonsense</h3>
          <p>
            Finally, let the AI work its magic! Sit back and watch as it spins your chosen elements into a beautifully chaotic narrative filled with nonsense, humor, and just the right amount of absurdity. Don’t be surprised if the result is hilariously offbeat and completely unexpected. After all, that’s what we’re all about at *The Journalist's Guide To Inaccuracy*! 
          </p>
          <p>
            So, are you ready to unleash your creativity and embrace the ridiculous? Let’s get started!
          </p>

      </div>
    </main>
  );
};

export default HomePage;