import React, { useState } from "react";
import "./App.css";

const places = [
  {
    id: 1,
    name: "Upper Lake",
    category: "Lakes",
    location: "Bhojtal, Bhopal",
    rating: "4.7",
    fee: "Free",
    time: "Open 24 Hours",
    bestTime: "Sunrise & Sunset",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",
    description:
      "Upper Lake, also known as Bhojtal, is one of the most beautiful and iconic places in Bhopal. Enjoy boating, peaceful lake views, sunrise and spectacular sunsets.",
    things: ["Boating", "Sunset", "Photography", "Morning Walk"],
  },

  {
    id: 2,
    name: "Lower Lake",
    category: "Lakes",
    location: "Lower Lake, Bhopal",
    rating: "4.5",
    fee: "Free",
    time: "Open 24 Hours",
    bestTime: "Evening",
    image:
      "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=1000&q=80",
    description:
      "Lower Lake is situated in the heart of Bhopal and offers beautiful views of the city. It is a relaxing place for an evening walk and photography.",
    things: ["Lake View", "Photography", "Evening Walk", "Relax"],
  },

  {
    id: 3,
    name: "Taj-ul-Masajid",
    category: "Heritage",
    location: "Old Bhopal",
    rating: "4.8",
    fee: "Free",
    time: "Prayer Timings",
    bestTime: "Morning",
    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1000&q=80",
    description:
      "Taj-ul-Masajid is one of the most magnificent mosques in Bhopal. Its huge courtyard, beautiful domes and historic architecture attract visitors from around the country.",
    things: ["Architecture", "History", "Photography", "Heritage"],
  },

  {
    id: 4,
    name: "Van Vihar",
    category: "Nature",
    location: "Shamla Hills, Bhopal",
    rating: "4.6",
    fee: "Paid Entry",
    time: "6:30 AM – 6:30 PM",
    bestTime: "Morning",
    image:
      "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?auto=format&fit=crop&w=1000&q=80",
    description:
      "Van Vihar National Park is a popular wildlife destination beside Upper Lake. You can see different animals and birds while enjoying a peaceful natural environment.",
    things: ["Wildlife", "Bird Watching", "Nature", "Photography"],
  },

  {
    id: 5,
    name: "Gohar Mahal",
    category: "Heritage",
    location: "VIP Road, Bhopal",
    rating: "4.5",
    fee: "Free",
    time: "Daytime",
    bestTime: "Winter",
    image:
      "https://images.unsplash.com/photo-1592639296346-560c37a0f711?auto=format&fit=crop&w=1000&q=80",
    description:
      "Gohar Mahal is a beautiful historic palace representing the royal heritage of Bhopal. Its architecture and surroundings are perfect for exploring and photography.",
    things: ["Royal History", "Architecture", "Photography", "Culture"],
  },

  {
    id: 6,
    name: "Tribal Museum",
    category: "Museums",
    location: "Shyamla Hills, Bhopal",
    rating: "4.8",
    fee: "Paid Entry",
    time: "10 AM – 6 PM",
    bestTime: "Afternoon",
    image:
      "https://images.unsplash.com/photo-1564399579883-451a5d44ec08?auto=format&fit=crop&w=1000&q=80",
    description:
      "Madhya Pradesh Tribal Museum showcases tribal art, traditions, lifestyle and culture through beautifully designed galleries and exhibits.",
    things: ["Art", "Culture", "History", "Photography"],
  },

  {
    id: 7,
    name: "Birla Mandir",
    category: "Spiritual",
    location: "Arera Hills, Bhopal",
    rating: "4.6",
    fee: "Free",
    time: "6 AM – 8 PM",
    bestTime: "Sunset",
    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1000&q=80",
    description:
      "Birla Mandir is located on a hill and provides a peaceful environment along with beautiful views of Bhopal. Sunset from the hill is especially beautiful.",
    things: ["Temple", "Sunset", "City View", "Peace"],
  },

  {
    id: 8,
    name: "Kerwa Dam",
    category: "Nature",
    location: "Kerwa, Bhopal",
    rating: "4.5",
    fee: "Varies",
    time: "Daytime",
    bestTime: "Monsoon",
    image:
      "https://images.unsplash.com/photo-1439853949127-fa647821eba0?auto=format&fit=crop&w=1000&q=80",
    description:
      "Kerwa Dam is a beautiful nature destination surrounded by greenery. It becomes especially scenic during the monsoon season.",
    things: ["Nature", "Monsoon", "Picnic", "Photography"],
  },

  {
    id: 9,
    name: "Manuabhan Tekri",
    category: "Viewpoints",
    location: "Lalghati, Bhopal",
    rating: "4.6",
    fee: "Free",
    time: "Morning – Evening",
    bestTime: "Sunset",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80",
    description:
      "Manuabhan Tekri is a popular hilltop viewpoint offering panoramic views of Bhopal. It is a great place to watch the sunset and city lights.",
    things: ["Sunset", "Viewpoint", "Photography", "Temple"],
  },

  {
    id: 10,
    name: "Bhojpur Temple",
    category: "Spiritual",
    location: "Bhojpur, Near Bhopal",
    rating: "4.8",
    fee: "Free",
    time: "Daytime",
    bestTime: "Winter",
    image:
      "https://images.unsplash.com/photo-1606293926075-69a00dbfde81?auto=format&fit=crop&w=1000&q=80",
    description:
      "Bhojpur Temple is a historic Shiva temple famous for its massive Shiva Lingam and impressive stone architecture.",
    things: ["Temple", "History", "Architecture", "Photography"],
  },

  {
    id: 11,
    name: "Sanchi Stupa",
    category: "Heritage",
    location: "Sanchi, Near Bhopal",
    rating: "4.8",
    fee: "Paid Entry",
    time: "Daytime",
    bestTime: "Winter",
    image:
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1000&q=80",
      
    description:
      "Sanchi is famous for its ancient Buddhist stupas and beautifully carved gateways. It is one of the most important historical destinations near Bhopal.",
    things: ["Buddhism", "History", "Architecture", "Photography"],
  },

  {
    id: 12,
    name: "State Museum",
    category: "Museums",
    location: "Shyamla Hills, Bhopal",
    rating: "4.5",
    fee: "Paid Entry",
    time: "10:30 AM – 5:30 PM",
    bestTime: "Afternoon",
    image:
      "https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=1000&q=80",
    description:
      "The State Museum contains archaeological objects, sculptures, paintings, coins and historical collections from Madhya Pradesh.",
    things: ["History", "Art", "Archaeology", "Culture"],
  },

  {
    id: 13,
    name: "Kaliyasot Dam",
    category: "Nature",
    location: "Kaliyasot, Bhopal",
    rating: "4.4",
    fee: "Free",
    time: "Daytime",
    bestTime: "Monsoon",
    image:
      "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?auto=format&fit=crop&w=1000&q=80",
    description:
      "Kaliyasot Dam is a peaceful natural destination around Bhopal. The greenery and water views make it a good place for a short escape.",
    things: ["Nature", "Road Trip", "Photography", "Monsoon"],
  },

  {
    id: 14,
    name: "Moti Masjid",
    category: "Heritage",
    location: "Old Bhopal",
    rating: "4.5",
    fee: "Free",
    time: "Prayer Timings",
    bestTime: "Morning",
    image:
      "https://images.unsplash.com/photo-1590077428593-a55bb07c4665?auto=format&fit=crop&w=1000&q=80",
    description:
      "Moti Masjid is a historic mosque known for its elegant architecture and  connection with the royal history of Bhopal.",
    things: ["Architecture", "History", "Heritage", "Photography"],
  },

  {
    id: 15,
    name: "Islamnagar Fort",
    category: "Heritage",
    location: "Islamnagar, Bhopal",
    rating: "4.4",
    fee: "Paid Entry",
    time: "Daytime",
    bestTime: "Winter",
    image:
      "https://images.unsplash.com/photo-1587135941948-670b381f08ce?auto=format&fit=crop&w=1000&q=80",
    description:
      "Islamnagar Fort is a historic complex with old palaces, gardens and beautiful architecture reflecting the royal past of the region.",
    things: ["History", "Palace", "Gardens", "Photography"],
  },
];

function App() {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [favorites, setFavorites] = useState([]);

  const categories = [
    "All",
    "Lakes",
    "Nature",
    "Heritage",
    "Museums",
    "Spiritual",
    "Viewpoints",
  ];

  const filteredPlaces = places.filter((place) => {
    const searchMatch =
      place.name.toLowerCase().includes(search.toLowerCase()) ||
      place.location.toLowerCase().includes(search.toLowerCase());

    const categoryMatch =
      category === "All" || place.category === category;

    return searchMatch && categoryMatch;
  });

  const toggleFavorite = (id) => {
    setFavorites((old) =>
      old.includes(id)
        ? old.filter((item) => item !== id)
        : [...old, id]
    );
  };

  return (
    <div className="app">

      <header className="navbar">

        <div className="logo">
          <div className="logo-icon">✦</div>

          <div>
            <b>BHOPAL</b>
            <small>CITY OF LAKES</small>
          </div>
        </div>

        <nav>
          <a href="#home">HOME</a>
          <a href="#explore">EXPLORE</a>
          <a href="#experience">EXPERIENCE</a>
          <a href="#about">ABOUT</a>
        </nav>

        <div className="nav-buttons">
          <button>📍 MAP</button>

          <button className="nav-heart">
            ♡
            {favorites.length > 0 && (
              <span>{favorites.length}</span>
            )}
          </button>
        </div>

      </header>


      <section className="hero" id="home">

        <div className="hero-image"></div>

        <div className="hero-overlay"></div>

        <div className="hero-content">

          <div className="hero-location">
            <span></span>
            BHOPAL · MADHYA PRADESH
          </div>

          <h1>
            City
            <br />
            of <i>Lakes.</i>
          </h1>

          <p>
            Discover peaceful lakes, royal heritage,
            ancient temples, beautiful nature and
            unforgettable places in Bhopal.
          </p>

          <a href="#explore" className="hero-btn">
            EXPLORE BHOPAL <b>↗</b>
          </a>

        </div>

        <div className="hero-bottom">
          <span>↓ SCROLL TO EXPLORE</span>

          <div>
            <b>15+</b>
            <small>PLACES</small>
          </div>

          <div>
            <b>4.7</b>
            <small>RATING</small>
          </div>

          <div>
            <b>1000+</b>
            <small>YEARS HISTORY</small>
          </div>
        </div>

      </section>


      {/* ABOUT */}
      <section className="about" id="about">

        <div className="label">01 · THE CITY</div>

        <div className="about-grid">

          <h2>
            More than
            <br />
            a <i>destination.</i>
          </h2>

          <div>
            <h3>
              Bhopal is where peaceful lakes meet
              royal history and modern city life.
            </h3>

            <p>
              From beautiful lake sunsets to historic
              palaces, ancient temples, museums and
              green escapes, Bhopal offers something
              different around every corner.
            </p>

            <a href="#explore">
              START EXPLORING ↗
            </a>
          </div>

        </div>

      </section>


      {/* FEATURED */}
      <section className="featured">

        <div className="featured-photo">

          <img
            src={places[0].image}
            alt="Upper Lake"
          />

          <span>EDITOR'S PICK</span>

          <div>
            <small>01 · LAKE</small>

            <h2>
              Upper
              <br />
              <i>Lake.</i>
            </h2>
          </div>

        </div>

        <div className="featured-text">

          <div className="label orange">
            FEATURED · BHOPAL
          </div>

          <h2>
            The heart
            <br />
            of <i>Bhopal.</i>
          </h2>

          <p>
            Watch the city slow down beside Bhojtal.
            Enjoy a boat ride, beautiful sunsets and
            peaceful lakeside views.
          </p>

          <div className="featured-details">
            <div>
              <small>BEST TIME</small>
              <b>Sunset</b>
            </div>

            <div>
              <small>ENTRY</small>
              <b>Free</b>
            </div>

            <div>
              <small>RATING</small>
              <b>★ 4.7</b>
            </div>
          </div>

          <button
            onClick={() => setSelectedPlace(places[0])}
          >
            EXPLORE PLACE ↗
          </button>

        </div>

      </section>


     
      <section className="explore" id="explore">

        <div className="explore-header">

          <div>
            <div className="label">
              02 · EXPLORE
            </div>

            <h2>
              Find your
              <br />
              <i>Bhopal.</i>
            </h2>
          </div>

          <div className="search-box">

            <span>⌕</span>

            <input
              type="text"
              placeholder="Search places..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
            />

          </div>

        </div>


        <div className="filters">

          {categories.map((item) => (
            <button
              key={item}
              className={
                category === item ? "active" : ""
              }
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}

        </div>


        <div className="cards">

          {filteredPlaces.map((place) => (

            <article className="card" key={place.id}>

              <div className="card-photo">

                <img
                  src={place.image}
                  alt={place.name}
                  loading="lazy"
                />

                <div className="photo-overlay"></div>

                <span className="number">
                  {String(place.id).padStart(2, "0")}
                </span>

                <span className="category">
                  {place.category}
                </span>

                <button
                  className={
                    favorites.includes(place.id)
                      ? "favorite active"
                      : "favorite"
                  }
                  onClick={() =>
                    toggleFavorite(place.id)
                  }
                >
                  {favorites.includes(place.id)
                    ? "♥"
                    : "♡"}
                </button>

                <div className="photo-title">

                  <small>{place.location}</small>

                  <h3>{place.name}</h3>

                </div>

              </div>


              <div className="card-content">

                <div className="card-info">
                  <span>
                    ★ {place.rating}
                  </span>

                  <span>
                    {place.bestTime}
                  </span>

                  <b>
                    {place.fee}
                  </b>
                </div>

                <button
                  className="explore-button"
                  onClick={() =>
                    setSelectedPlace(place)
                  }
                >
                  EXPLORE DETAILS

                  <span>↗</span>
                </button>

              </div>

            </article>

          ))}

        </div>

      </section>


      <section className="experience" id="experience">

        <div className="experience-image">

          <img
            src={places[7].image}
            alt="Bhopal Nature"
          />

          <div>
            <small>ESCAPE THE CITY</small>
            <h3>Into Nature.</h3>
          </div>

        </div>

        <div className="experience-content">

          <div className="label orange">
            03 · EXPERIENCE
          </div>

          <h2>
            A city
            <br />
            with a <i>soul.</i>
          </h2>

          <p>
            Bhopal is not just about sightseeing.
            It is about slow mornings, lake sunsets,
            old streets, delicious food and stories
            hidden around every corner.
          </p>

          <div className="experience-items">

            <div>
              <span>01</span>

              <section>
                <b>LAKES & SUNSETS</b>
                <p>
                  Enjoy peaceful evenings beside
                  Bhopal's beautiful lakes.
                </p>
              </section>
            </div>

            <div>
              <span>02</span>

              <section>
                <b>ROYAL HERITAGE</b>
                <p>
                  Explore palaces, mosques and
                  historic architecture.
                </p>
              </section>
            </div>

            <div>
              <span>03</span>

              <section>
                <b>NATURE ESCAPES</b>
                <p>
                  Discover forests, dams and
                  beautiful green spaces.
                </p>
              </section>
            </div>

          </div>

        </div>

      </section>


      <section className="mood">

        <div className="label center">
          04 · CHOOSE YOUR MOOD
        </div>

        <h2>
          How do you want
          <br />
          to <i>explore?</i>
        </h2>

        <div className="mood-grid">

          <button onClick={() => setCategory("Lakes")}>
            <span>01</span>
            <b>Peaceful</b>
            <small>Lakes & sunsets</small>
            <strong>↗</strong>
          </button>

          <button
            onClick={() => setCategory("Heritage")}
          >
            <span>02</span>
            <b>Historic</b>
            <small>Palaces & monuments</small>
            <strong>↗</strong>
          </button>

          <button
            onClick={() => setCategory("Nature")}
          >
            <span>03</span>
            <b>Wild</b>
            <small>Nature & wildlife</small>
            <strong>↗</strong>
          </button>

          <button
            onClick={() => setCategory("Spiritual")}
          >
            <span>04</span>
            <b>Spiritual</b>
            <small>Temples & peace</small>
            <strong>↗</strong>
          </button>

        </div>

      </section>


      <section className="final">

        <div className="final-content">

          <small>
            23.2599° N · 77.4126° E
          </small>

          <h2>
            See you in
            <br />
            <i>Bhopal.</i>
          </h2>

          <p>
            Your next adventure is closer than you think.
          </p>

          <a href="#explore">
            EXPLORE ALL PLACES ↗
          </a>

        </div>

      </section>


      <footer>

        <div className="footer-grid">

          <div>
            <div className="logo">
              <div className="logo-icon">✦</div>

              <div>
                <b>BHOPAL</b>
                <small>CITY OF LAKES</small>
              </div>
            </div>

            <p>
              A digital travel guide to discovering
              the beauty, culture, history and hidden
              gems of Bhopal.
            </p>
          </div>

          <div>
            <b>EXPLORE</b>
            <a href="#explore">Places</a>
            <a href="#experience">Experiences</a>
            <a href="#home">Home</a>
          </div>

          <div>
            <b>CATEGORIES</b>
            <a href="#explore">Lakes</a>
            <a href="#explore">Heritage</a>
            <a href="#explore">Nature</a>
          </div>

          <div>
            <b>LOCATION</b>
            <p>Bhopal</p>
            <p>Madhya Pradesh</p>
            <p>India</p>
          </div>

        </div>

        <div className="copyright">
          <span>© 2026 BHOPAL · CITY OF LAKES</span>
          <span>MADE FOR EXPLORERS</span>
        </div>

      </footer>


      {selectedPlace && (

        <div
          className="modal"
          onClick={(e) => {
            if (e.target.className === "modal") {
              setSelectedPlace(null);
            }
          }}
        >

          <div className="modal-box">

            <button
              className="close"
              onClick={() => setSelectedPlace(null)}
            >
              ×
            </button>

            <div className="modal-photo">

              <img
                src={selectedPlace.image}
                alt={selectedPlace.name}
              />

              <div></div>

              <section>
                <small>{selectedPlace.category}</small>
                <h2>{selectedPlace.name}</h2>
              </section>

            </div>

            <div className="modal-content">

              <div className="modal-location">
                📍 {selectedPlace.location}

                <b>
                  ★ {selectedPlace.rating}
                </b>
              </div>

              <p className="description">
                {selectedPlace.description}
              </p>

              <div className="modal-details">

                <div>
                  <small>OPENING</small>
                  <b>{selectedPlace.time}</b>
                </div>

                <div>
                  <small>ENTRY FEE</small>
                  <b>{selectedPlace.fee}</b>
                </div>

                <div>
                  <small>BEST TIME</small>
                  <b>{selectedPlace.bestTime}</b>
                </div>

              </div>

              <div className="things">

                <small>THINGS TO DO</small>

                <div>
                  {selectedPlace.things.map(
                    (thing) => (
                      <span key={thing}>
                        {thing}
                      </span>
                    )
                  )}
                </div>

              </div>

              <div className="modal-actions">

                <button
                  onClick={() =>
                    toggleFavorite(selectedPlace.id)
                  }
                >
                  {favorites.includes(selectedPlace.id)
                    ? "♥ SAVED"
                    : "♡ SAVE PLACE"}
                </button>

                <button
                  onClick={() =>
                    window.open(
                      `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                        selectedPlace.name +
                          " " +
                          selectedPlace.location
                      )}`,
                      "_blank"
                    )
                  }
                >
                  📍 OPEN MAP
                </button>

              </div>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}

export default App;


