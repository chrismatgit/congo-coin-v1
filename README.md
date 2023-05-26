<!-- TABLE OF CONTENTS -->
<details>
  <summary>CONGO COIN</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

Congo Coin is an online platform that empowers entrepreneurs to fund their projects.

How does it work? Behind the scene, there is a smart contract that allows us to manage different transactions.

Create a campaign:

- To create a campaign, the user will need to connect to a wallet using Metamask the first time he lands on the website. The user should make sure that he has a connection to a network. The user should have some ether in the wallet with the linked account. Finally, the user should be able to see existing open campaigns.
- After that, he can create a campaign by clicking the blue button <b>"Create Campaign"</b> or by clicking<b>"+"</b> in the header. The user should be able to put a minimum contribution in <b>"Wei"</b> and click on <b>"Create"</b> button. The user should be able to see the MetaMask notification asking to confirm the transaction. If the user <b>"confirms"</b> and has enough ether, he will be redirected to the Home page and see the created campaign. (In case of any error, The user will receive a notification).

Contribute to a campaign:

- To contribute to a <b>"campaign"</b>, the user should be connected. (ref: first Boulet of creating a campaign)
- The user puts the amount of ether in the field <b>"Amount to Contribute"</b> and then clicks the blue button <b>"Contribute!"</b> (In case of any error, The user will receive a notification).
- By clicking the <b>"confirm"</b> button, the user automatically becomes an <b>"approver"</b> and should see the number of approvers and campaign balance incremented.

Request:
A request is created by the Owner of the <b>"campaign"</b> to move money for different activities related to the campaign. To create a request, the user should give provide:

- The description: the campaign owner should provide a well-detailed explanation of why he needs to make the transaction)
- The Recipient address: I assume the recipient is officially known to the public.
- After clicking to <b>"create"</b>, The user should be able to see the MetaMask notification asking to confirm the transaction. If the user <b>"confirms"</b> and has enough ether, he will be redirected to the request page and see the created request. (In case of any error, The user will receive a notification).
- To approve a request a user should be an <b>"approver"</b> (He should have contributed in the past to the campaign)
- Only the campaign owner can finalize a request after getting enough approval(half plus one of the approvers and above of contributors)
- Note that the color differs for different statuses of a request. (<b>Black</b> = initiated but does not have enough approval.
  <b>Green</b> = has enough approval and is ready to be finalized. <b>Gris</b> = the request has been finalized)

### Built With

- [![Next][next.js]][next-url]
- [![React][react.js]][react-url]
- [![Bootstrap][bootstrap.com]][bootstrap-url]
- Solidity

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Get a free API Key at [https://infura.io](https://www.infura.io/) and create a wallet at [https://metamask.io](https://metamask.io/)
2. Clone the repo
   ```sh
   git clone https://github.com/chrismatgit/congo-coin-v1.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Add your env config: `.env`
   ```
   MNEMONIC=""
   INFURA_URL=
   DEPLOYED_ADDRESS=
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Chris Matabaro - [@chris_matabaro](https://twitter.com/chris_matabaro)

Code Link: [https://github.com/chrismatgit/congo-coin-v1](https://github.com/chrismatgit/congo-coin-v1)

Project Link: [https://congo-coin-drc.vercel.app/campaigns/about](https://congo-coin-drc.vercel.app/campaigns/about)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->

[linkedin-url]: https://linkedin.com/in/chris-matabaro
[next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[next-url]: https://nextjs.org/
[react.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[react-url]: https://reactjs.org/
[bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[bootstrap-url]: https://getbootstrap.com
