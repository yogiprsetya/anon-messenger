import { ReactNode } from 'react';
import { useAuthContext } from 'services/auth/context';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

type Props = {
  children: ReactNode;
};

const DashboardShell = (props: Props) => {
  const { user } = useAuthContext();
  console.log(user);

  return (
    <div className="antialiased">
      <Navbar />
      <Sidebar />
      <main className="p-4 md:ml-64 h-auto pt-20">{props.children}</main>
    </div>
  );
};

export default DashboardShell;
