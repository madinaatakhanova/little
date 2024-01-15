import './App.css';
import logo from  "./images/logo.svg"
import search from "./images/search.png"
import message from './images/new.png'
import profil from "./images/photo.png"
import sort from "./images/sort.svg"
import filter from "./images/filter.png"
import user from "./images/m 5.png"
import menu from "./images/more - vertical.png"

// ! saidbar img

import overview from './images/1. overview.png'
import tickets from './images/2. tickets.svg'
import idea from "./images/3. ideas.svg"
import contact from "./images/4. contacts.svg"
import agent from "./images/5. agents.svg"
import articles from "./images/6. articles.svg"
import settings from "./images/a_1. settings.svg"
import subscription from "./images/a_2. subscription.svg"

function App() {
  return (
    <>
      <div className="container">

          <div className="saidbar">
            <div className="logo">
              <img src={logo} alt="" />
              <h2>Dashboard Kit</h2>
            </div>

            <span>
              <img src={overview} alt="" />
              <h5>Overview</h5>
            </span>

            <span>
              <img src={tickets} alt="" />
              <h5>Tickets</h5>
            </span>
            
            <span>
              <img src={idea} alt="" />
              <h5>Ideas</h5>
            </span>
            
            <span>
              <img src={contact} alt="" />
              <h5>Contacts</h5>
            </span>
            
            <span>
              <img src={agent} alt="" />
              <h5>Agents</h5>
            </span>
            
            <span>
              <img src={articles} alt="" />
              <h5>Articles</h5>
            </span>
            
            <hr />

            <span>
              <img src={settings} alt="" />
              <h5>Settings</h5>
            </span>

            <span>
              <img src={subscription} alt="" />
              <h5>Subscription</h5>
            </span>







          </div>

        <div className="panel">

          <div className="navbar">
            <h1>Tickets</h1>

            <div className='nav-icon'>
              <img src={search} alt="" />
              <img src={message} alt="" />
              <hr />
              <span>
                <h5>Jones Ferdinand</h5>
                <img src={profil} alt="" />
              </span>
            </div>
          </div>

          <div className="allPanel">

            <div className="allPanel-text">
              <h3>All tickets</h3>

              <div className='icons'>
                <span>
                  <img src={sort} alt="" />
                  Sort
                </span>
                <span>
                  <img src={filter} alt="" />
                  Filter
                </span>
              </div>
            </div>

            <div className="users">

              <div className="userTablo">
                  <h3>Ticket details</h3>
                  <h3>Customer name</h3>
                  <h3>Date</h3>
                  <h3>Priority</h3>
              </div>

                <hr />

              <div className="user">


                <div className='userInfo'>

                    <div className='userImg'>
                      <img src={user} alt="" />
                    </div>

                    <span className='user-text'>
                      <h5>
                          Contact Email not Linked
                      </h5>
                      <p>
                          Updated 1 day ago
                      </p>
                    </span>
                </div>

                <span>
                  <h5>Tom Cruise</h5>
                  <p>on 24.05.2019</p>
                </span>

                <span>
                  <h5>May 26, 2019</h5>
                  <p>6:30 PM</p>
                </span>

                <div className="btns">
                  
                    <button className='btn'>
                        High
                    </button>
                    
                     <img src={menu} alt="" />
                </div>
              </div>


              <hr />

              <div className="user">


                <div className='userInfo'>

                    <div className='userImg'>
                      <img src={user} alt="" />
                    </div>

                    <span className='user-text'>
                      <h5>
                          Contact Email not Linked
                      </h5>
                      <p>
                          Updated 1 day ago
                      </p>
                    </span>
                </div>

                <span>
                  <h5>Tom Cruise</h5>
                  <p>on 24.05.2019</p>
                </span>

                <span>
                  <h5>May 26, 2019</h5>
                  <p>6:30 PM</p>
                </span>

                <div className="btns">
                  
                    <button className='btn'>
                        High
                    </button>
                    
                     <img src={menu} alt="" />
                </div>
              </div>

              <hr />
                
                <div className="user">
  
  
                  <div className='userInfo'>
  
                      <div className='userImg'>
                        <img src={user} alt="" />
                      </div>
  
                      <span className='user-text'>
                        <h5>
                            Contact Email not Linked
                        </h5>
                        <p>
                            Updated 1 day ago
                        </p>
                      </span>
                  </div>
  
                  <span>
                    <h5>Tom Cruise</h5>
                    <p>on 24.05.2019</p>
                  </span>
  
                  <span>
                    <h5>May 26, 2019</h5>
                    <p>6:30 PM</p>
                  </span>
  
                  <div className="btns">
                    
                      <button className='btn'>
                          High
                      </button>
                      
                       <img src={menu} alt="" />
                  </div>
                </div>

                <hr />
                
                <div className="user">
  
  
                  <div className='userInfo'>
  
                      <div className='userImg'>
                        <img src={user} alt="" />
                      </div>
  
                      <span className='user-text'>
                        <h5>
                            Contact Email not Linked
                        </h5>
                        <p>
                            Updated 1 day ago
                        </p>
                      </span>
                  </div>
  
                  <span>
                    <h5>Tom Cruise</h5>
                    <p>on 24.05.2019</p>
                  </span>
  
                  <span>
                    <h5>May 26, 2019</h5>
                    <p>6:30 PM</p>
                  </span>
  
                  <div className="btns">
                    
                      <button className='btn'>
                          High
                      </button>
                      
                       <img src={menu} alt="" />
                  </div>
                </div>

                <hr />
                
                <div className="user">
  
  
                  <div className='userInfo'>
  
                      <div className='userImg'>
                        <img src={user} alt="" />
                      </div>
  
                      <span className='user-text'>
                        <h5>
                            Contact Email not Linked
                        </h5>
                        <p>
                            Updated 1 day ago
                        </p>
                      </span>
                  </div>
  
                  <span>
                    <h5>Tom Cruise</h5>
                    <p>on 24.05.2019</p>
                  </span>
  
                  <span>
                    <h5>May 26, 2019</h5>
                    <p>6:30 PM</p>
                  </span>
  
                  <div className="btns">
                    
                      <button className='btn'>
                          High
                      </button>
                      
                       <img src={menu} alt="" />
                  </div>
                </div>

                <hr />
                
                <div className="user">
  
  
                  <div className='userInfo'>
  
                      <div className='userImg'>
                        <img src={user} alt="" />
                      </div>
  
                      <span className='user-text'>
                        <h5>
                            Contact Email not Linked
                        </h5>
                        <p>
                            Updated 1 day ago
                        </p>
                      </span>
                  </div>
  
                  <span>
                    <h5>Tom Cruise</h5>
                    <p>on 24.05.2019</p>
                  </span>
  
                  <span>
                    <h5>May 26, 2019</h5>
                    <p>6:30 PM</p>
                  </span>
  
                  <div className="btns">
                    
                      <button className='btn'>
                          High
                      </button>
                      
                       <img src={menu} alt="" />
                  </div>
                </div>


                

            </div>
          </div>

          
        </div>
      </div>
    </>
  );
}

export default App;
