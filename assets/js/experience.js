AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Event Marshall",
    cardImage: "assets/images/experience-page/Gp99.png",
    place: "Singapore",
    time: "(Feb 2020)",
    desp: "Worked as an Event Marshall from 9 February 2021 to 20 February 2021 under GP99 Associates Pte Ltd for the Chinese New Year River Hong Bao 2021 event.<br /><br />As an Event Marshall, I was tasked with guarding the laterns on display and answering any questions visitors had or problems they were facing. Since this event took place during the Covid-19 Pandemic, I also had to patrol the event grounds to ensure that there were safe distancing and crowd control.",
  },
  {
    title: "Warehouse Assistant",
    cardImage: "assets/images/experience-page/AnnaNucci.png",
    place: "Singapore",
    time: "(Feb 2020 - Mar 2019)",
    desp: "Worked as a Warehouse Assistant from February 2020 to March 2020 for Anna Nucci.<br /><br />As a Warehouse Assistant, I was involved in the making of hand sanitizers and packing of hand sanitizers for deliveries.",
  },
  {
    title: "Retail Assistant",
    cardImage: "assets/images/experience-page/PacificBooksStore.jpg",
    place: "Singapore, Saint Patrick's Secondary School",
    time: "(Nov 2018 - Dec 2018)",
    desp: "Worked as a Retail Assistant for St Patrick's Secondary School bookshop during the holidays from November 2018 to December 2018.<br /><br />As a Retail Assistant, I had to arrange the products the bookstore was selling, such as books, stationery, and bags. I also had to operate the cashier and handle delivery orders.",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "VIA | GoodLife! Makan | September 2018",
    cardImage: "assets/images/experience-page/goodlifemakan.jpg",
    description:
          "As part of my secondary school's VIA project, my classmates and I went down to GoodLife! Makan to entertain and spend time with the elderly.",
  },
  {
    title: "FP2 | Yong-En Care Centre | November 2021",
    cardImage: "assets/images/experience-page/FP2_Community_Event.jpg",
    description:
          "As part of one of my module's project, my classmates and I taught the elderly at Yong-En Care centre on how to use the application, 'Canva'.",
  },
  {
    title: "CommServe 2021 | Yong-En Care Centre | December 2021",
    cardImage: "assets/images/experience-page/CommServe.jpg",
    description:
      "This project involved a few of my friends and we taught the elderly at Yong-En Care Centre on how to use the 'EZ-Link' application.",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "The Uplift Project",
    subtitle: "Mentor",
    image: "assets/images/experience-page/uplift.png",
    desp: "I would be responsible for guiding 100s of participants across the globe in their first steps towards Applied Data Science and building end-to-end machine learning projects.",
  },
  {
    title: "ULHacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/ulhacks.png",
    desp: "ULHacks is a 36 hour long hackathon organized with an aim to enable students to create a project which empowers learning.",
  },
  {
    title: "WaffleHacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/wafflehacks.png",
    desp: "WaffleHacks 2021 is an upcoming 48-hour student-organized hackathon with an aim to bring technical solutions to local communities and small businesses.",
  },
  {
    title: "Elevate Tech",
    subtitle: "Judge",
    image: "assets/images/experience-page/elevate.png",
    desp: "Elevate Hacks is an upcoming all-female virtual hackathon coming from AUGUST 14th to 15th.",
  },
  {
    title: "PitchTeen",
    subtitle: "Judge",
    image: "assets/images/experience-page/pitchteen.png",
    desp: "PitchTeen 2.0 was a tech startup competition for female and non-binary communities in high school and college from all over the world with an aim to create a safe and encouraging place for women to help them explore tech and business fields.",
  },
  {
    title: "Hack-A-Solution",
    subtitle: "Judge",
    image: "assets/images/experience-page/hackasolution.png",
    desp: "Hack-a-Solution 2021 is a 24 hour long hackathon organized by Frisco students to raise awareness of world issues through technology.",
  },
  {
    title: "UniGlobe Hacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/uniglobe.png",
    desp: "UniGlobe Hacks 2.0 is an upcoming 4-day long hackathon run by high school students held during 28-31 July 2021.",
  },
  {
    title: "AtlasHacks",
    subtitle: "Mentor",
    image: "assets/images/experience-page/atlas.png",
    desp: "AtlasHacks II is a 3-day virtual hackathon that aims to foster creativity within hackers all around the world.",
  },
  {
    title: "NeoHacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/neo.png",
    desp: "NeoHacks is an upcoming 48-hour hackathon taking place July 23-25, 2021 where hundreds of students from around the world will come together virtually to learn new skills, meet new friends, and build awesome projects. We provide beginner-friendly workshops, mentorship, fun games, and more.",
  },
  {
    title: "Mission Inspired",
    subtitle: "Judge",
    image: "assets/images/experience-page/mission.png",
    desp: "InspireEd Hacks is a nationwide initiative organized by the student-for-student nonprofit, Mission InspirEd, challenging students ages 10-18 to synthesize their creativity and coding experience into a product beneficial to the educational community.",
  },
  {
    title: "Hack3",
    subtitle: "Judge",
    image: "assets/images/experience-page/hack3.png",
    desp: "Hack3 2021 is an upcoming global online hackathon that aims to enable high school students to learn computer science, with a broader message of (everyone can code) targeting underrepresented demographics to improve diversity and inclusion of individuals in the computer technology space.",
  },
  {
    title: "JITHack",
    subtitle: "Mentor",
    image: "assets/images/experience-page/jithack.png",
    desp: "JITHack is an upcoming virtual design and development hackathon organized by the students of Jyothy Institute of Technology, Bengaluru on June 26, 2021, where participants have 24 hours to build something incredible.",
  },
  {
    title: "Recess Hacks",
    subtitle: "Mentor",
    image: "assets/images/experience-page/recess.png",
    desp: "Recess Hacks is an upcoming hackathon for high school students in the Greater Toronto Area that strives to encourage innovation among high school students and get involved in technology.",
  },
  {
    title: "Citro Tech",
    subtitle: "Mentor",
    image: "assets/images/experience-page/citro.png",
    desp: "Citro Hacks 2021 is an upcoming all-inclusive online hackathon organized by Citro Tech, a student led organization dedicated to empowering minorities in the tech field</li>",
  },
  {
    title: "NHacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/nhacks.png",
    desp: "NHacks VI was a hackathon that aimed to encourage students everywhere to develop skills in computer science by creating tangible products that they're proud of. It initially started as Michigan's largest high school hackathon.",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="#" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
