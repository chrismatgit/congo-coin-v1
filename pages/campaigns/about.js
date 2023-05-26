import React, { Component } from 'react';
import { List } from 'semantic-ui-react';
import Layout from '../../components/Layout';

class About extends Component {
  render() {
    return (
      <Layout>
        <h3>About us</h3>
        <div>
          <p>
            Congo Coin is an online platform that empowers entrepreneurs to fund
            their projects.
          </p>
          <p>
            How does it work? Behind the scene, there is a smart contract that
            allows us to manage different transactions.
          </p>
          <List as='ol'>
            <List.Item as='li' value='*'>
              <h4>Create a campaign</h4>
              <List.Item as='ol'>
                <List.Item as='li' value='-'>
                  To create a campaign, the user needs to connect his wallet
                  using Metamask the first time he lands on the website. He/she
                  should make sure that he/she is connected to a network. He/she
                  should have some ether in the wallet with the linked account.
                  He should be able to see existing open campaigns.
                </List.Item>
                <List.Item as='li' value='-'>
                  After that, he can create a campaign by clicking the blue
                  button <b>"Create Campaign"</b> or by clicking <b>"+"</b> in
                  the header. The user should be able to put a minimum
                  contribution in <b>"Wei"</b> and click on <b>"Create"</b>. The
                  user should be able to see the MetaMask notification asking to
                  confirm the transaction. If the user <b>"confirms"</b> and has
                  enough ether, he will be redirected to the Home page and see
                  the created campaign. (In case of any error, The user will
                  receive a notification).
                </List.Item>
              </List.Item>
            </List.Item>
            <List.Item as='li' value='*'>
              <h4>Contribute to a campaign</h4>
              <List.Item as='ol'>
                <List.Item as='li' value='-'>
                  To contribute to a campaign, a user should make sure is
                  connected. (ref: first Boulet of creating a campaign)
                </List.Item>
                <List.Item as='li' value='-'>
                  The user puts the amount of ether in the field{' '}
                  <b>"Amount to Contribute"</b> and then clicks the blue button{' '}
                  <b>"Contribute!"</b> (In case of any error, The user will
                  receive a notification).
                </List.Item>
                <List.Item as='li' value='-'>
                  By clicking confirm, the user becomes automatically an
                  approver and he should see both the number of approvers and
                  campaign balance incremented.
                </List.Item>
              </List.Item>
            </List.Item>
            <List.Item as='li' value='*'>
              <h4>Request</h4>
              <p>
                A request is created by the owner of the campaign to move money
                for different activities related to the campaign. To create a
                request, the user should give provide:
              </p>
              <List.Item as='ol'>
                <List.Item as='li' value='-'>
                  The description: the campaign owner should provide a
                  well-detailed explanation of why he needs to make the
                  transaction)
                </List.Item>
                <List.Item as='li' value='-'>
                  The amount: the user should provide the amount of ether
                  needed.
                </List.Item>
                <List.Item as='li' value='-'>
                  The Recipient address: I assume that the recipient is
                  officially known to the public.
                </List.Item>
                <List.Item as='li' value='-'>
                  After clicking to "create", The user should be able to see the
                  MetaMask notification asking to confirm the transaction. If
                  the user <b>"confirms"</b> and has enough ether, he will be
                  redirected to the request page and see the created request.
                  (In case of any error, The user will receive a notification).
                </List.Item>
                <List.Item as='li' value='-'>
                  To approve a request a user should be an approver(He should
                  have contributed in the past to the campaign)
                </List.Item>
                <List.Item as='li' value='-'>
                  Only the campaign owner can finalize a request after getting
                  enough approval(half plus one of the approvers and above of
                  contributors)
                </List.Item>
                <List.Item as='li' value='-'>
                  Note that the color differs for different statuses of a
                  request. (<b>Black</b> = initiated but does not have enough
                  approval.
                  <b>Green</b> = has enough approval and is ready to be
                  finalized. <b>Gris</b>= the request has been finalized)
                </List.Item>
              </List.Item>
            </List.Item>
          </List>
          <p>
            <br />
          </p>
        </div>
      </Layout>
    );
  }
}

export default About;
