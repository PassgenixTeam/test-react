import React from 'react';
import CloseSvg from './images/close.svg';
import CalendarSvg from './images/calendar.svg';
import LocationSvg from './images/location.svg';
import GirlPng from './images/girl.png';

import './App.scss';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Choose the form of payment</h1>
        <div>
          <img src={CloseSvg} className="close-btn" alt="close-btn" />
        </div>
      </header>

      <main>
        <section id="section1">
          <div className="avatar">J</div>
          <div className="info">
            <div className="name">John</div>
            <div className="phone">(88) 99602-2404</div>
          </div>
          <button className="btn btn-light">Log out</button>
        </section>

        <section id="section2">
          <h1>Selected service</h1>
          <div className="card">
            <img src={GirlPng} className="avatar" alt="service-avatar" />

            <div className="card-info">
              <div className="name">Japanese lessons</div>
              <div className="more-info">
                <img src={CalendarSvg} alt="calendar" />
                <span>Nov 7, 2020 · 11:30</span>
              </div>
              <div className="more-info">
                <img src={LocationSvg} alt="calendar" />
                <span>Client`s place</span>
              </div>
              <h3 className="total">Rp 350.000</h3>
            </div>
          </div>
        </section>

        <section id="section3">
          <div className="form-item">
            <label htmlFor="#address">Enter your location</label>
            <input type="text" id="address" className="form-control" placeholder="Enter address" />
          </div>
          <div className="form-item">
            <label htmlFor="#note">Note (optional)</label>
            <input type="text" id="note" className="form-control" placeholder="Enter text here" />
          </div>
        </section>

        <section id="section4">
          <h1>Choose a way to pay</h1>

          <div className="btn-area">
            <div className="row">
              <div className="col-6">
                <div className="btn btn-light cs-btn-outline">Cash</div>
              </div>
              <div className="col-6">
                <div className="btn btn-light">Credit card</div>
              </div>
              <div className="col-6">
                <div className="btn btn-light">
                  eWallet/
                  <br />
                  Virtual bank
                </div>
              </div>
            </div>
          </div>

          <div className="term">
            <div>
              <input id="term" type="checkbox" className="form-check-input" title="Checkbox" />
            </div>
            <label htmlFor="term">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <a href="#">do eiusmod</a>
            </label>
          </div>
        </section>
      </main>

      <footer>
        <span>Previous</span>
        <button className="btn btn-primary btn-next">Next</button>
      </footer>
    </div>
  );
}

export default App;
