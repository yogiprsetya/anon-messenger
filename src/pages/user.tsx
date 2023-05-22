import { GuardProvider } from 'container/Guard';

const UserPage = () => (
  <GuardProvider>
    <div>TEST</div>
  </GuardProvider>
);

export default UserPage;
