# Whale Song Memory Game

This memory game is modeled after the classic [Simon (game)](https://en.wikipedia.org/wiki/Simon_%28game%29). The goal of the user experience is to have fun while learning about the distinct differences of whale calls between various whale species.  This game will hopefully inspire its users to stop and appreciate the musical notes of whale songs and get active in saving our oceans for future generations.

## User Experience (UX)

- ### User stories


  - #### First Time Player Goals

  The target audience for this game is all ages. It is primariy aimed for solo game play but can be played in teams to see who beats the highest game score.

  Player goals are:

  1. As a First Time Player, I want to play a fun and eductional game.
  2. As a First Time Player, I want to easily grasp the rules of the game.
  3. As a First Time Player, I want to experience listening to new sounds.
  4. As a First Time Player, I want to know when the game begins and ends.
  5. As a First Time Player, I want to play the game with ease, seeing my progress in real time.

  Whale Song Memory Game is a great way for the First Time Player to meet their player goals because:

  1. The game was sketched and designed with the user experience as central importance before writing code.
  2. The game controls are large, the photography is beautiful and the audio of each sound effect volume levels are even, allowing for a easy, enjoyable viewing and listening experience.
  3. Game layout is untuitive and easy to grasp the rules of the game.
  4. The game provides easy-to-follow instructions appearing as a popover after pressing a large "how-to-play" button easily located beneath the game baord.
  5. Large simple game photo tiles that are clickable buttons to make it easy to play the game allowing more focus on listening and learning about various whale sounds.
  6. Fun interesting sounds and visuals guide the player to start playing, follow along, end game or restart game.
  7. Score board is located at the bottom of the game board and updates in real time.
  8. A full screen game results popup window appears with fun sound effects and score messages that indicate if the player has won or lost.
  9. The game interface is simple and has no commercial adds appended to the site. This pure game site, provides a learning focused gaming experience.

  ---

  ## Design

  The game is designed to be fun and light-hearted to help engage the player in learning. The following design choices were made with this in mind:

  - ### Fonts


    - The primary font **FishOutOfWater** by Font Bros was chosen for the game title and results popup text message because it has a fun cartoon-like water quality to create an alternate game reality representation of whale's natural habitat.
    - The secondary font **Michroma** by Google Fonts was chosen for the game controls, score board and game instructions because of its digital, futuristic quality to represent the digital game environment.
  - ### Colors


    - The primary colors calming ocean colors of light blue, medium and dark blue. In contrast to the ocean blues, the game action color is yellow orange. It highlights the game tiles in use and outlines the 'start game' button. This bright color is used to guide the player to take action and play the game.
  - ### Styling


    - A cute cartoon whale is used as a graphic in the game results popup to make it fun for the player regardless of winning or losing the game.
  - ### Backgrounds


    - An animated ocean waves background with the game area primary blue colors is the background for the main game area and for the game results popup message. Again mimicking the whale habitat within the game.
  - ### Card images


    - Real photos were chosen for the primary game buttons, to represent individual whale species living in their real life natural environment. This documentary feel of the game is to encourage game players to continue their education of whale song beyond the game.
  - ### Audio files


    - Real audio recordings of whale songs were chosen to facilitate the learning experience discovering the nuanced differences of whale song between various whale species. They have been edited down to 1 second each so the game experience is fluid.
    - An uplifting chime sound effect is heard with a popup game results message to celebrate the player winning the game!
    - A down-trodden chime sound effect plays with a losing popup message to alert the player that they lost the game.
  - ### Wireframes

    These wireframes were created using [Balsamiq](https://balsamiq.com/) to facilitate a mobile first responsive game site design. The game design evolved beyond the wireframes during testing phase explained below in the 'Testing' section.
    
    A flow chart was drawn to map out Javascript order of functionality.

    - Mobile Wire Frame - [View](https://github.com/kashinak/whale-song-memory-game/blob/main/assets/wireframes/whalesong_mobile_wireframes2.pdf)
    - Tablet Wire Frame - [View](https://github.com/kashinak/whale-song-memory-game/blob/main/assets/wireframes/whalesong_tablet_wireframes2.pdf)
    - Desktop Wire Frame - [View](https://github.com/kashinak/whale-song-memory-game/blob/main/assets/wireframes/whalesong_desktop_wireframes.pdf)
    - Flow Chart - [View](https://github.com/kashinak/whale-song-memory-game/blob/main/assets/wireframes/whalesong_flowchart.png)

  ## Features

  - Responsive on all device sizes
  - Interactive elements

  ## Technologies Used

  ---

  - ### Languages Used
  - [HTML5](https://en.wikipedia.org/wiki/HTML5)
  - [CSS3](https://en.wikipedia.org/wiki/CSS)
  - [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

  ### Frameworks, Libraries & Programs Used

  1. [Bootstrap 4.2.1:](https://getbootstrap.com/docs/4.2/getting-started/introduction/)

     - Bootstrap was used to facilitate responsiveness and styling of the game site.
  2. [Google Fonts:](https://fonts.google.com/)

     - Google fonts were used to import the 'Michroma' font into the style.css file which is used on the main features of the project.
  3. [Font Bros](https://www.fontbros.com/)

     - Font Bros were used to import the 'FishOutOfWater' font into the style.css file which is used on the game title.
  4. [jQuery:](https://jquery.com/)

     - jQuery came with Bootstrap to make the header responsive but also was used for ??? in JavaScript.
  5. [Git](https://git-scm.com/)

     - Git was used for version control through commits to Git and pushes to Github through the Gitpod terminal.
  6. [GitHub:](https://github.com/)

     - GitHub was used to store the project's code after being pushed from Git.
  7. [Adobe Premiere Pro](https://www.adobe.com/products/premiere.html)

     - Adobe Premiere Pro was used to edit whale sounds to 1 second each and mix all whale sounds at the same audio level to provide consistency for the player's user experience.
  8. [Adobe Media Encoder](https://www.adobe.com/products/media-encoder.html)

     - Adobe Media Encoder was used to compress large file of animated wave into a smaller file more suitable for web playback.
  9. [Balsamiq](https://balsamiq.com/)

     - Balsamiq was used to create the [wireframes](https://github.com/kashinak/whale-song-memory-game/tree/main/assets/wireframes) during the design process. 
  10. [draw.io](https://drawio-app.com/product/)
  
    - Draw.io was used to draw a simple flow chart to map out the order of Javascript game functionality.
     
 

 



  ## Testing

  The W3C Markup Validator and W3C CSS Validator Services were used to validate every page of the project to ensure there were no syntax errors in the project.

  - [W3C Markup Validator](https://validator.w3.org/nu/#textarea) - [Results](https://github.com/kashinak/whale-song-memory-game/blob/main/assets/validator%20results/nu_html_checker_results.pdf)
  - [W3C CSS Validator](https://jigsaw.w3.org/css-validator/validator) - [Results](https://github.com/kashinak/whale-song-memory-game/blob/main/assets/validator%20results/w3c_css_validator_results.pdf)

  ### Testing User Stories from User Experience (UX) Section

    1. Game Controls
       1. The large 'start game' button shown in wireframes was tested but tossed because it was redundant in functionality similar to 'game restart' button developed later. The latter was converted to a 'game start' button and positioned beneath the game board and highlighted in orange yellow to grab the player's attention to begin the game. This cleared up original confusion for the first time player, to use one button to start and restart the game when necessary. The game board design is now cleaner without the original large 'game start' button overlayed on top as originally shown in wireframes.
       2. The 'how-to-play' button was a dropdown card with game instructions and was originally located at the top of the game area beneath the header but the location and design confused the player because it looked like part of the header and not an actual game button. To remedy the player confusion, the game instructions was reduced in size and positioned to the right of the 'start game' button beneath the game board for easy access. It's design is identical to the 'start game' button so the player knows to click on it to show a nifty popover message displaying a short list of game instructions. A dim blue outline was added to the 'how-to-play button so that its design does not compete with the more important 'start game' yellow/orange outlined button. 
    
    2. Game Board

       1. When tested, the first time player encountered game visibilty issues in mobile view. The bootstrap grid aplied to the game board, wrapped the game tiles in one single column in mobile view. This type of responsiveness detracted from the quality of the game experience because of having to use scroll bars to play the game on a mobile device. The initial wireframe design of using the identical game layout for all screen types was key to making the game fully functional on mobile, tablet and desktops. Media Queries were added to css to maintain the square game board layout in all device screen sizes.
       2. Original whale sounds were varying length and overlapped while playing making it confusing to identify a singular whale sound unique to each whale. Whale call raw files were edited down and audio mixed in Adobe Premiere Pro to 1-second durations to help simplify the audio playback game experience and build playback momentum.
       
    3. Score Board

       1. The orignal score board also updated in real time, diplaying what round the player was on and also displyed text indicating whether the player won or lost the game. It was very basic and the player wasn't clear if they had won or lost the game. To make the game more fun and dynamic by notifying the player in a bolder way if they won or lost, a visually beautiful popup results diplay solved this issue. Adding sound effects, a cute whale icon, an animated wave and different messages to notify the player if they had won or lost the game made huge difference in the player having fun with the game. A third 'great!' button was added so the user can click it to make the results popup window disappear and return the player to the game. The orignal score board remains below the game control buttons and displays what round the player is on but now it does not display a win or lose message.  More simplicity, sound effects, beautiful animation and improved user interaction creates a more engaging user game experience.

    
      

  ### Further Testing

  - The Website was tested on Google Chrome, Internet Explorer, Microsoft Edge and Safari browsers.
  - The website was viewed on a variety of devices such as Desktop, Laptop, iPhone7, iPhone 8 & iPhoneX.
  - Friends and family members were asked to review the site and documentation to point out any bugs and/or user experience issues.

  ### Known Bugs

  - Title font:'FishOutOfWater'by [Font Bros](https://www.fontbros.com/) would not load after supplying to style.css the @font-face with  url for Font Bros.
    - Bug was squashed by adding WOFF files to Whale Song game site directory and update the css code to:

      ```css

       @font-face {
          font-family: 'FishOutOfWater';
          font-weight: normal;
          font-style: normal;
          font-display: swap;
          url("/fonts/FishOutOfWater-Regular.woff") format("woff");
      }

      @font-face {
          font-family: 'FishOutOfWater';
          font-weight: bold;
          font-style: normal;
          font-display: swap;
          url("/fonts/FishOutOfWater-Bold.woff") format("woff");
      }

      @font-face {
          font-family: 'FishOutOfWaterDemiBold';
          font-weight: normal;
          font-style: normal;
          font-display: swap;
          url("/fonts/FishOutOfWater-Demibold.woff") format("woff");
      }```



      ```


  ## Deployment

  ### GitHub Pages

  The project was deployed to GitHub Pages using the following steps...

  1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)
  2. At the top of the Repository (not top of page), locate the "Settings" Button on the menu.
     - Alternatively Click [Here](https://raw.githubusercontent.com/) for a GIF demonstrating the process starting from Step 2.
  3. Scroll down the Settings page until you locate the "GitHub Pages" Section.
  4. Under "Source", click the dropdown called "None" and select "Master Branch".
  5. The page will automatically refresh.
  6. Scroll back down through the page to locate the now published site [link](https://github.com) in the "GitHub Pages" section.

  ### Forking the GitHub Repository

  By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps...

  1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)
  2. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
  3. You should now have a copy of the original repository in your GitHub account.

  ### Making a Local Clone

  1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)
  2. Under the repository name, click "Clone or download".
  3. To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
  4. Open Git Bash
  5. Change the current working directory to the location where you want the cloned directory to be made.
  6. Type `git clone`, and then paste the URL you copied in Step 3.

  ```
  $ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
  ```
  7. Press Enter. Your local clone will be created.

  ```
  $ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
  > Cloning into `CI-Clone`...
  > remote: Counting objects: 10, done.
  > remote: Compressing objects: 100% (8/8), done.
  > remove: Total 10 (delta 1), reused 10 (delta 1)
  > Unpacking objects: 100% (10/10), done.
  ```
  Click [Here](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository#cloning-a-repository-to-github-desktop) to retrieve pictures for some of the buttons and more detailed explanations of the above process.

  ## Credits

  ### Code

  - The full-screen hero image code came from this [StackOverflow post](https://stackoverflow.com)
  - [Bootstrap4](https://getbootstrap.com/docs/4.4/getting-started/introduction/): Bootstrap Library used throughout the project mainly to make site responsive using the Bootstrap Grid System.
  - [MDN Web Docs](https://developer.mozilla.org/) : For Pattern Validation code. Code was modified to better fit my needs and to match an Irish phone number layout to ensure correct validation. Tutorial Found [Here](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/tel#Pattern_validation)

  ### Content

  - All content was written by the developer.
  - Psychological properties of colours text in the README.md was found [here](http://www.colour-affects.co.uk/psychological-properties-of-colours)

  ### Media

  - #### Photos

  1. [Beluga Photo](https://commons.wikimedia.org/wiki/File:Beluga_premier.gov.ru-2.jpeg): [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/deed.en), [Premier.gov.ru](https://premier.gov.ru/events/)
  2. [Orca Photo](https://commons.wikimedia.org/wiki/File:Killerwhales_jumping.jpg): Public Domain, Robert Pittman, [NOAA](https://apps-afsc.fisheries.noaa.gov/Quarterly/amj2005/divrptsNMML3.htm)
  3. [North Atlantic Right Whale Photo](https://commons.wikimedia.org/wiki/File:Right_Whale_%22Scoop%22_(42853281122).jpg): Public Domain, [NOAA](https://apps-afsc.fisheries.noaa.gov/Quarterly/amj2005/divrptsNMML3.htm)
  4. [Sperm Whale Photo](https://commons.wikimedia.org/wiki/File:0b4a8510_by_vitaly_sokol-dbw14sol.jpg): [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/deed.en), [Will Falcon aka Vitaly Sokai](https://commons.wikimedia.org/w/index.php?title=Will_Falcon&action=edit&redlink=1)

  - #### Fonts

  1. ['FishOutOfWater'](https://www.fontbros.com/families/fish-out-of-water): [Standard Web Font License](https://www.fontbros.com/families/fish-out-of-water), [Harold's Fonts](https://www.fontbros.com/foundries/harolds-fonts#)
  2. ['Michroma']("https://fonts.googleapis.com/css2?family=Michroma&display=swap"): [Open Font License](https://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL), [Vernon Adams](https://sansoxygen.com/)

  - #### Animation

  1. [animated ocean game area and popup background](https://elements.envato.com/animated-wave-seascape-under-stay-night-sky-backgr-2XS6G2J): [Commerical License](https://elements.envato.com/license-terms), [Envato Elements](https://elements.envato.com/animated-wave-seascape-under-stay-night-sky-backgr-2XS6G2J)

  - #### Graphics

  1. [game results popup whale icon](https://elements.envato.com/cute-whale-sea-animals-characters-vol-6-LUYKUNU), [Commerical License](https://elements.envato.com/license-terms), [Envato Elements](https://elements.envato.com/cute-whale-sea-animals-characters-vol-6-LUYKUNU)

  ### Acknowledgements

  - My Mentor, Moosa Hassan for his dedication and time for helpful project feedback.
  - [Code Institute](https://codeinstitute.net/) for their support and education.
  - Aarthi Elumalai, founder of [DigiFisk](https://digifisk.com/) for her Udemy tutorial on building a game results popup: [2D Game Development W/ Javascript & CSS3-Create Memory Game](https://www.udemy.com/course/2d-game-development-javascript-css3-create-memory-game/)
  - [Beau Carnes](https://www.freecodecamp.org/news/author/beau/), for his comprehensive code snippet models (freeCodeCamp)(https://www.freecodecamp.org/) tutorial: [Simon Game JavaScript Tutorial for Beginners](https://youtu.be/n_ec3eowFLQ)
  - [Ayooluwa Isaiah](https://freshman.tech/about/), for his informative blog: [How to build a Simon Game with JavaScript](https://freshman.tech/simon-game/)
  - 
