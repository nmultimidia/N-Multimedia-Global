import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { GeoContent, getGeoContent } from '@/config/geoContent';

interface GeoContextType {
  geo: GeoContent;
  loading: boolean;
  countryCode: string;
}

const GeoContext = createContext<GeoContextType>({
  geo: getGeoContent('BR'),
  loading: true,
  countryCode: 'BR',
});

export function GeoProvider({ children }: { children: ReactNode }) {
  const [geo, setGeo] = useState<GeoContent>(getGeoContent('BR'));
  const [loading, setLoading] = useState(true);
  const [countryCode, setCountryCode] = useState('BR');

  useEffect(() => {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 4000);

    fetch('https://ipapi.co/json/', { signal: controller.signal })
      .then((r) => r.json())
      .then((data) => {
        const code: string = data.country_code || 'BR';
        setCountryCode(code);
        setGeo(getGeoContent(code));
      })
      .catch(() => {})
      .finally(() => {
        clearTimeout(timeout);
        setLoading(false);
      });
  }, []);

  return (
    <GeoContext.Provider value={{ geo, loading, countryCode }}>
      {children}
    </GeoContext.Provider>
  );
}

export function useGeo() {
  return useContext(GeoContext);
}
