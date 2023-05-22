import { Text } from 'core/Text';
import React from 'react';

const Loading = () => (
  <div className="flex h-screen">
    <div className="px-4 py-1 m-auto text-center rounded-full animate-pulse bg-blue-900 text-blue-200 inline-flex">
      <Text tag="span" variant="body-2">
        Loading ...
      </Text>
    </div>
  </div>
);

export default Loading;
