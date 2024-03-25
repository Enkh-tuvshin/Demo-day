import * as WebBrowser from 'expo-web-browser';
import React from 'react';

export const useWarmUpBrowser = (): void => {
  React.useEffect(() => {
    WebBrowser.warmUpAsync();
    return () => {
      WebBrowser.coolDownAsync();
    };
  }, []);
};
