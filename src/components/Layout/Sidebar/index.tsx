import { RadioIcon, RocketLaunchIcon } from '@heroicons/react/24/solid';
import { Text } from 'core/Text';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <aside
      className="fixed top-0 left-0 z-40 w-64 h-screen pt-14 transition-transform -translate-x-full border-r md:translate-x-0 bg-gray-800 border-gray-700"
      aria-label="side nav"
    >
      <div className="overflow-y-auto py-5 px-3 h-full bg-gray-800">
        <ul className="space-y-2">
          <li>
            <Link href="/create" className="flex gap-4 p-2 rounded-lg text-white hover:bg-gray-700 group">
              <RocketLaunchIcon className="w-6 h-6 transition duration-75 text-gray-400 group-hover:text-white" />
              <Text tag="span" variant="body-2">
                Publish
              </Text>
            </Link>
          </li>

          <li>
            <Link href="/microsites" className="flex gap-4 p-2 rounded-lg text-white hover:bg-gray-700 group">
              <RadioIcon className="w-6 h-6 transition duration-75 text-gray-400 group-hover:text-white" />

              <Text tag="span" variant="body-2">
                Microsites
              </Text>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
