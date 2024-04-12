import React, { createContext, useEffect, useState } from "react";
import featureFlagesDataServiceCall from "../data";

export const FeatureFlagsContext = createContext<any>(null);

const FeatureFlagGlobalState = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [enabledFlags, setEnabledFlags] = useState<any>({});
  async function fetchFeatureFlags() {
    try {
      setLoading(true);
      //original service call
      const response = await featureFlagesDataServiceCall();
      setEnabledFlags(response);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      throw new Error(error);
    }
  }

  useEffect(() => {
    fetchFeatureFlags();
  }, []);

  return (
    <FeatureFlagsContext.Provider value={{ loading, enabledFlags }}>
      {children}
    </FeatureFlagsContext.Provider>
  );
};

export default FeatureFlagGlobalState;
