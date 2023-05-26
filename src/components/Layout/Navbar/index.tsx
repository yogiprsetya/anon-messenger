import { Bars3CenterLeftIcon, UserIcon } from '@heroicons/react/24/solid';
import { Text } from 'core/Text';
import { useState } from 'react';
import { FirebaseSignout } from 'services/auth/firebase';

const Navbar = () => {
  const [showUserManu, setShowUserMenu] = useState<boolean>(false);

  return (
    <nav className="border-b px-4 py-2.5 bg-gray-800 border-gray-700 fixed left-0 right-0 top-0 z-50">
      <div className="flex flex-wrap justify-between items-center">
        <div className="flex justify-start items-center">
          <button
            onClick={() => setShowUserMenu(!showUserManu)}
            className="p-2 mr-2 rounded-lg cursor-pointer md:hidden focus:bg-gray-700 focus:ring-2 focus:ring-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white"
          >
            <Bars3CenterLeftIcon className="w-6" />
            <span className="sr-only">Toggle sidebar</span>
          </button>

          <div className="flex items-center justify-between mr-4">
            <img src="/logo.svg" className="mr-3 h-8" alt="Logo" />

            <Text tag="span" variant="heading-2" className="self-center whitespace-nowrap text-white">
              AnonMsgr
            </Text>
          </div>
        </div>

        <div className="flex items-center lg:order-2 relative">
          <button
            type="button"
            onClick={() => setShowUserMenu(!showUserManu)}
            className="mx-3 text-sm rounded-full md:mr-0 focus:ring-4 focus:ring-gray-600 bg-indigo-600 h-8 w-8 flex items-center justify-center"
          >
            <span className="sr-only">Open user menu</span>
            <UserIcon className="w-4" />
          </button>

          {showUserManu && (
            <div className="z-50 my-4 w-56 top-6 right-0 list-none rounded divide-y shadow bg-gray-700 divide-gray-600 absolute">
              <div className="py-3 px-4 text-white [&>*]:block">
                <Text tag="span" variant="body-1">
                  Display Name
                </Text>

                <Text tag="span" variant="body-2">
                  user@mail.com
                </Text>
              </div>

              <ul className="py-1 text-gray-300">
                <li>
                  <button
                    onClick={FirebaseSignout}
                    type="button"
                    className="block py-2 px-4 hover:bg-gray-600 hover:text-white w-full text-left"
                  >
                    <Text tag="span" variant="body-3">
                      Sign out
                    </Text>
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
