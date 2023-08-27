import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="aboutus-container">
        <header className="aboutus-header">
            <h className="aboutus-format">About Us</h>
        </header>
        <main className="aboutus-body">
            <section className="about-section">
                <h className='aboutus-title'>Our Story</h>
                <p>Hey there, animal enthusiasts and fellow adventurers! We're the passionate crew behind Pawsome Park, 
                    and we're thrilled to introduce you to our wild wonderland.</p>
                <p>Our journey began with a simple yet powerful idea: creating a place where people and animals could 
                    coexist in harmony, while also sparking a fiery love for conservation. Pawsome Park isn't just a zoo – 
                    it's a hub of excitement, learning, and heartfelt connections.</p>
                <p>For us, it's all about celebrating the diversity of life on Earth. From the tiniest insects to the 
                    mightiest predators, every creature has a story to tell, and we're here to help share those tales. 
                    Our dedicated team of animal experts, conservationists, and educators work tirelessly to ensure our 
                    animal residents enjoy habitats that mirror their natural homes.</p>
                <p>But it's not all serious business – we believe that learning should be fun and laughter should be 
                    contagious. That's why we've sprinkled our park with interactive exhibits, jaw-dropping shows, and 
                    opportunities to get up close with our animal ambassadors. We want to see wide-eyed wonder and hear 
                    delighted giggles echoing through our pathways.</p>
                <p>What truly sets us apart is our commitment to making a real impact. By joining us for a day of adventure, 
                    you're also supporting crucial conservation projects that aim to safeguard vulnerable species and 
                    their ecosystems. It's a win-win – you have a blast, and the animals get a brighter future.</p>
                <p>So, whether you're a curious kid, a lifelong learner, or just someone seeking an escape into the wild, 
                    Pawsome Park is here to welcome you with open paws. Join us in celebrating the beauty of our planet's 
                    incredible inhabitants, and let's work together to make a positive pawprint on the world we share.</p>
            </section>
            <section className="about-section">
                <h className='aboutus-title'>Our Team</h>
                <p> From experienced animal experts to enthusiastic educators, our team is united by a shared love for animals 
                    and a commitment to conservation. Together, we're on a mission to create unforgettable experiences and 
                    inspire a deep connection between our visitors and the incredible creatures that call our park home.</p>
            </section>
        </main>
    </div>
  );
}

export default AboutUs;
