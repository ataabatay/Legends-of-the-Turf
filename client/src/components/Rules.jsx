import Accordion from 'react-bootstrap/Accordion'
import Table from 'react-bootstrap/Table';

export default function Rules() {

  return (
    <>
      <section className='rules-page'>
        <h2>Rules</h2>
        <Accordion>
          {/* Selection Initial Squad */}
          <Accordion.Item eventKey="0">
            <Accordion.Header>Selecting Your Initial Squad</Accordion.Header>
            <Accordion.Body>
              <h5>Squad Size</h5>
              <p>To join the game select a fantasy football squad of 15 players, consisting of:</p>
              <ul>
                <li>2 Goalkeepers</li>
                <li>5 Defenders</li>
                <li>5 Midfielders</li>
                <li>3 Forwards</li>
              </ul>
              <h5>Budget</h5>
              <p>The total value of your initial squad must not exceed £100 million.</p>
              <h5>Players Per Team</h5>
              <p>You can select up to 3 players from a single Premier League team.</p>
            </Accordion.Body>
          </Accordion.Item>
          {/* Managing Squad */}
          <Accordion.Item eventKey="1">
            <Accordion.Header>Managing your squad</Accordion.Header>
            <Accordion.Body>
              <h5>Choosing Your Starting 11</h5>
              <p>From your 15 player squad, select 11 players by the Gameweek deadline to form your team. <br /><br />All your points for the Gameweek will be scored by these 11 players, however if one or more does not play they may be automatically substituted. <br /><br /> Your team can play in any formation providing that 1 goalkeeper, at least 3 defenders and at least 1 forward are selected at all times.</p>
              <h5>Selecting a Captain and a Vice-Captain</h5>
              <p>From your starting 11 you nominate a captain and a vice-captain. Your captain will score double.<br /><br />If your captain plays 0 minutes in the Gameweek, the captain will be changed to the vice-captain. <br /><br /> If both captain and vice-captain play 0 minutes in a Gameweek, then no player score will be doubled.</p>
              <h5>Prioritising Your Bench For Automatic Substitutions</h5>
              <p>Your substitutes provide cover for unforeseen events like injuries and postponements by automatically replacing starting players who do not play in a Gameweek. <br /><br />Playing in a Gameweek means playing at least 1 minute or receiving a yellow / red card. <br /><br /> Based on the priorities you assign, automatic substitutions are processed at the end of the Gameweek as follows:</p>
              <ul>
                <li>If your Goalkeeper does not play in the Gameweek, he will be substituted by your replacement Goalkeeper, if he played in the Gameweek.</li>
                <li>If any of your outfield players do not play in the Gameweek, they will be substituted by the highest priority outfield substitute who played in the Gameweek and does not break the formation rules (eg. If your starting team has 3 defenders, a defender can only be replaced by another defender).</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          {/* Transfers */}
          <Accordion.Item eventKey="2">
            <Accordion.Header>Transfers</Accordion.Header>
            <Accordion.Body>
              <p>After selecting your squad you can buy and sell players in the transfer market. Unlimited transfers can be made at no cost until your first deadline.<br /><br />After your first deadline you will receive 1 free transfer each Gameweek. Each additional transfer you make in the same Gameweek will deduct 4 points from your total score (Classic scoring) and match score (Head-to-Head scoring) at the start of the next Gameweek.<br /><br />If you do not use your free transfer, you are able to make an additional free transfer the following Gameweek. If you do not use this saved free transfer in the following Gameweek, it will be carried over until you do. You can never have more than 1 saved transfer.<br /><br />At other times you are limited to 20 transfers in any single Gameweek. This rule does not apply when playing a Wildcard or a Free Hit Chip.</p>
              <h5>Wildcards</h5>
              <p>For information on wildcards please refer to the chips section of the rules.</p>
              <h5>Player Prices</h5>
              <p>Player prices change during the season dependent on the popularity of the player in the transfer market. Player prices do not change until the season starts.<br /><br />The price shown on your transfers page is a player's selling price. This selling price may be less than the player's current purchase price as a sell-on fee of 50% (rounded up to the nearest £0.1m) will be applied on any profits made on that player.<br /><br /></p>
            </Accordion.Body>
          </Accordion.Item>
          {/* Deadlines */}
          <Accordion.Item eventKey="3">
            <Accordion.Header>Deadlines</Accordion.Header>
            <Accordion.Body>
              <p>All changes to your team (starting 11, transfers, captain changes, substitiution priorities) must be made by the Gameweek deadline in order to take effect for that set of matches.<br /><br />Deadlines are subject to change and will be 90 minutes before the kick-off time in the first match of the Gameweek.<br /></p>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Gameweek</th>
                    <th>Deadline</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Gameweek 1</td>
                    <td>Fri 11 Aug 18:30</td>
                  </tr>
                  <tr>
                    <td>Gameweek 2</td>
                    <td>Fri 18 Aug 18:15</td>
                  </tr>
                  <tr>
                    <td>Gameweek 3</td>
                    <td>Fri 25 Aug 18:30</td>
                  </tr>
                  <tr>
                    <td>Gameweek 4</td>
                    <td>Fri 1 Sep 18:30</td>
                  </tr>
                  <tr>
                    <td>Gameweek 5</td>
                    <td>Sat 16 Sep 11:00</td>
                  </tr>
                  <tr>
                    <td>Gameweek 6</td>
                    <td>Sat 23 Sep 13:30</td>
                  </tr>
                  <tr>
                    <td>Gameweek 7</td>
                    <td>Sat 30 Sep 11:00</td>
                  </tr>
                  <tr>
                    <td>Gameweek 8</td>
                    <td>Sat 7 Oct 11:00</td>
                  </tr>
                  <tr>
                    <td>Gameweek 9</td>
                    <td>Sat 21 Oct 11:00</td>
                  </tr>
                  <tr>
                    <td>Gameweek 10</td>
                    <td>Fri 27 Oct 18:30</td>
                  </tr>
                  <tr>
                    <td>Gameweek 11</td>
                    <td>Sat 4 Nov 11:00</td>
                  </tr>
                  <tr>
                    <td>Gameweek 12</td>
                    <td>Sat 11 Nov 11:00</td>
                  </tr>
                  <tr>
                    <td>Gameweek 13</td>
                    <td>Sat 25 Nov 11:00</td>
                  </tr>
                  <tr>
                    <td>Gameweek 14</td>
                    <td>Sat 2 Dec 13:30</td>
                  </tr>
                  <tr>
                    <td>Gameweek 15</td>
                    <td>Tue 5 Dec 18:00</td>
                  </tr>
                  <tr>
                    <td>Gameweek 16</td>
                    <td>Sat 9 Dec 11:00</td>
                  </tr>
                  <tr>
                    <td>Gameweek 17</td>
                    <td>Fri 15 Dec 18:30</td>
                  </tr>
                  <tr>
                    <td>Gameweek 18</td>
                    <td>Thu 21 Dec 18:30</td>
                  </tr>
                  <tr>
                    <td>Gameweek 19</td>
                    <td>Tue 26 Dec 11:00</td>
                  </tr>
                  <tr>
                    <td>Gameweek 20</td>
                    <td>Sat 30 Dec 11:00</td>
                  </tr>
                  <tr>
                    <td>Gameweek 21</td>
                    <td>Sat 13 Jan 11:00</td>
                  </tr>
                  <tr>
                    <td>Gameweek 22</td>
                    <td>Tue 30 Jan 18:15</td>
                  </tr>
                  <tr>
                    <td>Gameweek 23</td>
                    <td>Sat 3 Feb 13:30</td>
                  </tr>
                  <tr>
                    <td>Gameweek 24</td>
                    <td>Sat 10 Feb 13:30</td>
                  </tr>
                  <tr>
                    <td>Gameweek 25</td>
                    <td>Sat 17 Feb 13:30</td>
                  </tr>
                  <tr>
                    <td>Gameweek 26</td>
                    <td>Sat 24 Feb 13:30</td>
                  </tr>
                  <tr>
                    <td>Gameweek 27</td>
                    <td>Sat 2 Mar 13:30</td>
                  </tr>
                  <tr>
                    <td>Gameweek 28</td>
                    <td>Sat 9 Mar 13:30</td>
                  </tr>
                  <tr>
                    <td>Gameweek 29</td>
                    <td>Sat 16 Mar 13:30</td>
                  </tr>
                  <tr>
                    <td>Gameweek 30</td>
                    <td>Sat 30 Mar 13:30</td>
                  </tr>
                  <tr>
                    <td>Gameweek 31</td>
                    <td>Tue 2 Apr 18:15</td>
                  </tr>
                  <tr>
                    <td>Gameweek 32</td>
                    <td>Sat 6 Apr 13:30</td>
                  </tr>
                  <tr>
                    <td>Gameweek 33</td>
                    <td>Sat 13 Apr 13:30</td>
                  </tr>
                  <tr>
                    <td>Gameweek 34</td>
                    <td>Sat 20 Apr 13:30</td>
                  </tr>
                  <tr>
                    <td>Gameweek 35</td>
                    <td>Sat 27 Apr 13:30</td>
                  </tr>
                  <tr>
                    <td>Gameweek 36</td>
                    <td>Sat 4 May 13:30</td>
                  </tr>
                  <tr>
                    <td>Gameweek 37</td>
                    <td>Sat 11 May 13:30</td>
                  </tr>
                  <tr>
                    <td>Gameweek 38</td>
                    <td>Sun 19 May 14:30</td>
                  </tr>
                </tbody>
              </Table>
            </Accordion.Body>
          </Accordion.Item>
          {/* Scoring */}
          <Accordion.Item eventKey="4">
            <Accordion.Header>Scoring</Accordion.Header>
            <Accordion.Body>
              <p>During the season, your fantasy football players will be allocated points based on their performance in the Premier League.</p>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Action</th>
                    <th>Points</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>For playing up to 60 minutes</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>For playing 60 minutes or more (excluding stoppage time)</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td>For each goal scored by a goalkeeper or defender</td>
                    <td>6</td>
                  </tr>
                  <tr>
                    <td>For each goal scored by a midfielder</td>
                    <td>5</td>
                  </tr>
                  <tr>
                    <td>For each goal scored by a forward</td>
                    <td>4</td>
                  </tr>
                  <tr>
                    <td>For each goal assist</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td>For a clean sheet by a goalkeeper or defender</td>
                    <td>4</td>
                  </tr>
                  <tr>
                    <td>For a clean sheet by a midfielder</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>For every 3 shot saves by a goalkeeper</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>For each penalty save</td>
                    <td>5</td>
                  </tr>
                  <tr>
                    <td>For each penalty miss</td>
                    <td>-2</td>
                  </tr>
                  <tr>
                    <td>Bonus points for the best players in a match</td>
                    <td>1-3</td>
                  </tr>
                  <tr>
                    <td>For every 2 goals conceded by a goalkeeper or defender</td>
                    <td>-1</td>
                  </tr>
                  <tr>
                    <td>For each yellow card</td>
                    <td>-1</td>
                  </tr>
                  <tr>
                    <td>For each red card</td>
                    <td>-3</td>
                  </tr>
                  <tr>
                    <td>For each own goal</td>
                    <td>-2</td>
                  </tr>
                </tbody>
              </Table>
              <h5>Clean sheets</h5>
              <p>A clean sheet is awarded for not conceding a goal whilst on the pitch and playing at least 60 minutes (excluding stoppage time).<br /><br />If a player has been substituted when a goal is conceded this will not affect any clean sheet bonus.</p>

              <h5>Red Cards</h5>
              <p>If a player receives a red card, they will continue to be penalised for goals conceded by their team.<br /><br />Red card deductions include any points deducted for yellow cards.</p>

              <h5>Assists</h5>
              <p>
                Fantasy assists are awarded to the player from the goal-scoring team who last touches the ball before their teammate scores the goal. The final touch can be an intentional pass, an inadvertent touch, or the result of an effort on goal.
                <br /><br />
                If an opposing player deflects the ball after the final pass before a goal is scored, significantly altering the intended destination of the ball, then no assist in Fantasy is awarded. Should an unforced defensive error lead to the goalscoring opportunity, then no Fantasy assist will be awarded. If the goal scorer loses and then regains possession, then no assist is awarded.
              </p>

              <h5>Rebounds</h5>
              <p>
                If a shot at goal is blocked by an opposition player, saved by a goalkeeper, or hits the woodwork, and from the rebound a goal is scored, then a Fantasy assist is awarded. The shot does not have to be on target to result in a Fantasy assist. The action leading to the rebound can be a shot or a cross-shot, but not an intended cross or pass attempt, as determined by Stats Perform.
                <br /><br />
                If a significant touch is made by an opposition player after the blocked effort, then no Fantasy assist is awarded.
              </p>

              <h5>Own Goals</h5>
              <p>
                If a player shoots or passes the ball and directly forces an opposing player to put the ball in their own net, then an assist is awarded. If the pass or cross takes a significant deflection off an opposition player prior to their teammate scoring an own goal, then no Fantasy assist is awarded.
              </p>

              <h5>Penalties and Free-Kicks</h5>
              <p>
                In the event of a penalty or free-kick being scored, the player earning the penalty or free-kick is awarded a Fantasy assist. However, if the goal is scored by the player who earned the penalty or free-kick, then no Fantasy assist is awarded.
              </p>

              <h5>Finalising Assists</h5>
              <p>
                For the avoidance of doubt, points awarded in-game are subject to change up until one hour after the final whistle of the last match of any given day. Once the points have all been updated on that day, no further adjustments to points will be made unless under extraordinary circumstances.
                <br /><br />
                The final decision on Fantasy assists is made by Fantasy Premier League in consultation with Stats Perform.
              </p>

            </Accordion.Body>
          </Accordion.Item>
          {/* Leagues */}
          <Accordion.Item eventKey="5">
            <Accordion.Header>Leagues</Accordion.Header>
            <Accordion.Body>
              <h5>After entering your squad</h5>
              <p>You can join and create leagues to compete with friends and other game players.</p>

              <h5>League Types</h5>

              <h6>Invitational Leagues & Cups</h6>
              <p>
                Invitational leagues & cups are the heart and soul of the game, where you compete against your friends. Just create a league and then send out the unique code to allow your friends to join, easy! A cup will be automatically created as part of the league.
                <br />
                You can compete in up to 30 private leagues. There's no limit on the number of teams in a single league.
              </p>

              <h6>Public Leagues</h6>
              <p>
                Need an extra challenge? Then join a public league of randomly assigned teams. You can compete in up to 5 public leagues.
              </p>

              <h6>Global Leagues</h6>
              <p>
                You are automatically entered into the following global leagues:
                <ul>
                  <li>The overall league featuring all registered teams</li>
                  <li>A league for fellow managers from your country</li>
                  <li>A league for supporters of your favourite Premier League team</li>
                  <li>A league for managers starting the same Gameweek as you</li>
                  <li>The Second Chance League (starts in Gameweek 21)</li>
                  <li>The Fantasy Cup</li>
                </ul>
                Existing teams will automatically enter the Second Chance League and the Fantasy Cup without having to register a new account.
              </p>

              <h6>League Scoring</h6>
              <p>All leagues score on either a Classic or Head-to-Head basis.</p>

              <h6>Classic Scoring</h6>
              <p>
                In a league with classic scoring, teams are ranked based on their total points in the game. You can join or leave a league with classic scoring at any point during the season.
                <br />
                In the event of a tie between teams, the team who has made the least amount of transfers will be positioned higher. Any transfers made using a wildcard or free hit will not count towards total transfers made.
                <br />
                Classic scoring leagues are run over a number of phases:
              </p>

              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Phase</th>
                    <th>First Gameweek</th>
                    <th>Last Gameweek</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Overall</td>
                    <td>Gameweek 1</td>
                    <td>Gameweek 38</td>
                  </tr>
                  <tr>
                    <td>August</td>
                    <td>Gameweek 1</td>
                    <td>Gameweek 3</td>
                  </tr>
                  <tr>
                    <td>September</td>
                    <td>Gameweek 4</td>
                    <td>Gameweek 7</td>
                  </tr>
                  <tr>
                    <td>October</td>
                    <td>Gameweek 8</td>
                    <td>Gameweek 10</td>
                  </tr>
                  <tr>
                    <td>November</td>
                    <td>Gameweek 11</td>
                    <td>Gameweek 13</td>
                  </tr>
                  <tr>
                    <td>December</td>
                    <td>Gameweek 14</td>
                    <td>Gameweek 20</td>
                  </tr>
                  <tr>
                    <td>January</td>
                    <td>Gameweek 21</td>
                    <td>Gameweek 22</td>
                  </tr>
                  <tr>
                    <td>February</td>
                    <td>Gameweek 23</td>
                    <td>Gameweek 26</td>
                  </tr>
                  <tr>
                    <td>March</td>
                    <td>Gameweek 27</td>
                    <td>Gameweek 30</td>
                  </tr>
                  <tr>
                    <td>April</td>
                    <td>Gameweek 31</td>
                    <td>Gameweek 35</td>
                  </tr>
                  <tr>
                    <td>May</td>
                    <td>Gameweek 36</td>
                    <td>Gameweek 38</td>
                  </tr>
                </tbody>
              </Table>


              <h5>Any transfer point deductions</h5>
              <p>
                Any transfer point deductions in the Gameweek before a phase starts won't be deducted from the phase score. For example, any transfers made in Gameweek 7 (preparing for Gameweek 8) won't be deducted from your September score.
              </p>

              <h5>Head-to-Head Scoring</h5>
              <p>
                In a league with Head-to-Head scoring, every team plays a match against another team in the league each Gameweek. The match result is based on the Gameweek score of each team minus any transfer points spent preparing for the Gameweek.
                <br />
                3 points are awarded for a win and 1 point for a draw; teams are then ranked on points earned in Head-to-Head matches.
              </p>

              <p>
                Head-to-Head fixtures are generated at the start of the league's first Gameweek. Once these fixtures have been generated, the league is locked, and teams will not be able to join or leave.
              </p>

              <p>
                If a Head-to-Head league has an odd number of teams, then an average team will join the league to ensure each team has a fixture every Gameweek. This team will always score the Gameweek average.
              </p>

              <p>
                In the event of a tie between teams, the team who has most game points will be positioned higher.
              </p>

              <h5>Head-to-Head Knock-out stage</h5>
              <p>
                Optionally, a Head-to-Head league may end with a knock-out stage over up to 3 Gameweeks with the league winner decided by a match in the final Gameweek. The automatically entered average team will not enter the knock-out stage; their place will be taken by the next placed team.
              </p>

              <p>
                In the event of a tie between teams in a Head-to-Head knock-out match, the following tie-breaks will be used:
                <ul>
                  <li>Most goals scored in the Gameweek</li>
                  <li>Fewest goals conceded in the Gameweek</li>
                  <li>Virtual coin toss</li>
                </ul>
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </section>
    </>
  )
}