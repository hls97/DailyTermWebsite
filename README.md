# DailyTermWebsite
Description:
  DailyTerm displays a random term with four definitions to choose from. After selecting an answer, a new term with 
  four new selections will appear. Although not following the "daily" in the title, the goal of the website is to provide
  a daily assortment of terms to test the user.
  
User input:
  Click on the definition you think matches the term! After clicking, the page will refresh after a few seconds with a new
  term.
  
The Code:
  The website uses the Quizlet Api as its source for terms. Node.js with express is used for the server side, and Angular.js
  is used to format and display the terms with conjuction with HTML.
  
Limitations and Design Flaws:
  Currently, the website requires a full page refresh to load a new question. Additionally, quizlet contains sets of questions
  with restricted access, and thus an additional refresh is required. Further development on the website should make calls to
  API without refreshing the website. 
  As quizlet is a public access database, many sets/terms from the API have strange text and/or improper term to    definition format. Further implementation may see checks for proper terms.
  
  Harold Shen @hlshen@ucsd.edu
