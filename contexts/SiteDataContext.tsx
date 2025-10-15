import React, { createContext, useState, useEffect, ReactNode, useCallback } from 'react';
import { initialSiteData } from '../data/siteData';

// Define the shape of your site data
export interface SiteData {
    [key: string]: any; // Allow for flexible structure
}

interface SiteDataContextType {
  siteData: SiteData;
  updateSiteData: (newData: Partial<SiteData>) => void;
  updateNestedData: (path: string, value: any) => void;
  addItem: (path: string, newItem: any) => void;
  deleteItem: (path: string, index: number) => void;
}

export const SiteDataContext = createContext<SiteDataContextType | undefined>(undefined);

interface SiteDataProviderProps {
  children: ReactNode;
}

export const SiteDataProvider: React.FC<SiteDataProviderProps> = ({ children }) => {
  const [siteData, setSiteData] = useState<SiteData>(() => {
    try {
      const localData = localStorage.getItem('siteData');
      return localData ? JSON.parse(localData) : initialSiteData;
    } catch (error) {
      console.error("Could not parse site data from localStorage", error);
      return initialSiteData;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('siteData', JSON.stringify(siteData));
    } catch (error) {
      console.error("Could not save site data to localStorage", error);
    }
  }, [siteData]);

  const updateSiteData = useCallback((newData: Partial<SiteData>) => {
    setSiteData(prevData => ({ ...prevData, ...newData }));
  }, []);
  
  const updateNestedData = useCallback((path: string, value: any) => {
     setSiteData(prevData => {
        const keys = path.split('.');
        const newData = JSON.parse(JSON.stringify(prevData)); // Deep copy
        let current = newData;
        for (let i = 0; i < keys.length - 1; i++) {
            current = current[keys[i]];
        }
        current[keys[keys.length - 1]] = value;
        return newData;
     });
  }, []);

  const addItem = useCallback((path: string, newItem: any) => {
    setSiteData(prevData => {
      const keys = path.split('.');
      const newData = JSON.parse(JSON.stringify(prevData));
      let current = newData;
      for (let i = 0; i < keys.length - 1; i++) {
          current = current[keys[i]];
      }
      current[keys[keys.length - 1]].push(newItem);
      return newData;
    });
  }, []);
  
  const deleteItem = useCallback((path: string, index: number) => {
    setSiteData(prevData => {
      const keys = path.split('.');
      const newData = JSON.parse(JSON.stringify(prevData));
      let current = newData;
      for (let i = 0; i < keys.length - 1; i++) {
          current = current[keys[i]];
      }
      current[keys[keys.length - 1]].splice(index, 1);
      return newData;
    });
  }, []);

  return (
    <SiteDataContext.Provider value={{ siteData, updateSiteData, updateNestedData, addItem, deleteItem }}>
      {children}
    </SiteDataContext.Provider>
  );
};