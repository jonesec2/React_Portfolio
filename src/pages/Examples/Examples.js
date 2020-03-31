import React from "react";

export default function Examples() {

   return (

      <section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="examples">
         <div className="w-100">
            <h2 className="mb-5">Examples</h2>

            <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
               <div className="resume-content">
                  <h3 className="mb-1">Good Cuisine <a href="https://github.com/schoe14/Good-Cuisine"
                     title="Good Cuisine Repo" target="_blank"> <i className="fab fa-github"></i></a></h3>
                  <div className="subheading mb-3">

                     <a href="https://good-cuisine.herokuapp.com/" title="Good Cuisine" target="_blank"><img
                        className="img-fluid mx-auto mb-2" src="img/goodCuisine.JPG" alt="Good Cuisine" /></a>

                  </div>
                  <p>Search and save recipes based on your preferences, and dietary needs. Create a free account to save
                     and track these recipes.</p>
               </div>
            </div>

            <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
               <div className="resume-content">
                  <h3 className="mb-1">Pack It <a href="https://github.com/jonesec2/Pack-It" title="Pack It Repo"
                     target="_blank"> <i className="fab fa-github"></i></a></h3>
                  <div className="subheading mb-3">

                     <a href="https://jonesec2.github.io/Pack-It/" title="Pack It" target="_blank"><img
                        className="img-fluid mx-auto mb-2" src="img/packItProject.JPG" alt="Pack It" /></a>

                  </div>
                  <p>Know what the weather will be like at your travel destination, and let Pack It suggest clothes
                     you'll need for any situation. Add and pack items in your own virtual "Suitcase".</p>
               </div>
            </div>

            <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
               <div className="resume-content">
                  <h3 className="mb-1">In Good Spirits <a href="https://github.com/jonesec2/Make_Me_A_Drink"
                     title="In Good Spirits Repo" target="_blank"> <i className="fab fa-github"></i></a></h3>
                  <div className="subheading mb-3">

                     <a href="https://jonesec2.github.io/Make_Me_A_Drink/" title="In Good Spirits" target="_blank"><img
                        className="img-fluid mx-auto mb-2" src="img/InGoodSpirits.JPG" alt="In Good Spirits" /></a>

                  </div>

                  <p>Throwing a party, need something new for New Years, or just bored on a Friday? Let us suggest
                     random cocktails. We'll tell you what you need and what to do, all In Good Spirits.</p>
               </div>
            </div>

            <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
               <div className="resume-content">
                  <h3 className="mb-1">New York Times Search <a href="https://github.com/jonesec2/NewYorkTimesSearch"
                     title="New York Times Search Repo" target="_blank"> <i className="fab fa-github"></i></a></h3>
                  <div className="subheading mb-3">

                     <a href="https://jonesec2.github.io/NewYorkTimesSearch/" title="New York Times Search"
                        target="_blank"><img className="img-fluid mx-auto mb-2" src="img/newYorkSearch.JPG"
                           alt="New York Times Search" /></a>

                  </div>
                  <p>In collaboration with like minded developers, The New York Times Article Search was created.
                  Provide any search term and how many articles you want; set the year if desired, and then press
                     search. Any article is a single search away.</p>
               </div>
            </div>

            <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
               <div className="resume-content">
                  <h3 className="mb-1">Profile Generator <a href="https://github.com/jonesec2/Profile_Generator"
                     title="Profile Generator Repo" target="_blank"> <i className="fab fa-github"></i></a></h3>
                  <div className="subheading mb-3">

                     <a href="https://github.com/jonesec2/Profile_Generator" title="Profile Generator"
                        target="_blank"><img className="img-fluid mx-auto mb-2" src="img/profile_generator_demo.gif"
                           alt="Profile Generator" /></a>

                  </div>
                  <p>This is a node application using inquirer, and pdf-puppeteer to create a "team" profile based on
                  the input of the user. The CLI prompts the user with questions and once they are done produces a
                     pdf with the user's input.</p>
               </div>
            </div>
         </div>
      </section>
   );
}