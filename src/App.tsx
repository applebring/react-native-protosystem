import * as React from 'react';
import { createStaticNavigation } from '@react-navigation/native';

import Router from './routes';


const Navigation = createStaticNavigation(Router);

export default function App() {
  return <Navigation />;
}

