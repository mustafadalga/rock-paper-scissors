## Rock Paper Scissors
Rock Paper Scissors is a web-based rock, paper, scissors game that allows users to place bets against a computer. This project aims to provide an entertaining and interactive experience while demonstrating the use of modern web development technologies and practices.

### Features
* **Interactive Gameplay:** Engage in the classic Rock, Paper, Scissors game with an added betting twist.
* **Balance Management:** Start with a virtual balance to place your bets and track your winnings or losses.
* **Responsive Design:** Enjoy the game on any device, thanks to a mobile-first, responsive layout.

### Gameplay Mechanics

* **Starting Balance:** Each player begins with a balance of 5000 virtual currency units.
* **Betting Options:** Players can place bets on one of three possible outcomes in a Rock, Paper, Scissors match: Rock, Paper, or Scissors.
* **Bet Amounts:** The minimum bet is 500 units. Players can increase their bet in increments of 500 units (e.g., 500, 1000, 1500, etc.).
* **Match Outcome:** A computer-controlled opponent randomly selects Rock, Paper, or Scissors. The player's selection(s) is then compared to the computer's choice to determine the match outcome.

### Game Outcomes and Winning Rates
* **Single Bet:** If a player bets on one position and wins, the return is 14 times the bet amount.
* **Two Bets:** If a player bets on two positions in a single game and wins, the return is 3 times the bet amount.
* **Tie:** If the player's bet matches the computer's choice, the outcome is considered a tie. For a single bet, the bet amount is returned to the player. For two bets, a tie counts as a loss.
* **Loss:** If the player's bet(s) do not match the computer's choice and do not result in a tie as described above, the player loses the bet amount(s).

### Restrictions
* **Betting Limit:** Players cannot bet on all three positions (Rock, Paper, Scissors) within the same game. The maximum number of positions a player can bet on in a single game is two.
* **Balance Requirement:** Players cannot place a bet if their remaining balance is less than the minimum bet amount. Players must manage their balance to continue playing.
* **Simultaneous Bets:** While players can place multiple bets on the same position or across two different positions, the total bet amount for a single game is limited by the player's available balance.

### Used Technologies
* React.js
* TailwindCSS
* Typescript
* Tailwind CSS
* framer-motion
* react-toastify
* zustand

### Demo
* https://v1-rock-paper-paper.netlify.app/


## Project Setup

### Installation

```
git clone git@github.com:mustafadalga/rock-paper-scissors.git
cd rock-paper-scissors
npm install
```

### Running the Project
To start the development server and run the project locally, use the following command:
```
npm run dev
```
Once the server is running, you can access the project in your web browser at http://localhost:5173.



### Building
Run the build command:
```
npm run build
```

<hr/>

### Screenshots

![screenshot 1](https://github.com/mustafadalga/rock-paper-scissors/assets/25087769/5da6c4c1-2c4a-43bc-9e3d-81d9a557ac07)


![screenshot 2](https://github.com/mustafadalga/rock-paper-scissors/assets/25087769/daef644f-36bd-44cd-a298-fa318fe894ea)

![screenshot 3](https://github.com/mustafadalga/rock-paper-scissors/assets/25087769/0649fe89-605f-41e1-9e29-a2711097ee20)