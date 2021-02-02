import * as React from "react"
import {Routes, Route} from "react-router-dom";
import routes from './routes';

interface Props {
    base?: string;
}

export const RouteContext = React.createContext('');

const AppRoutes = (props: Props) => {

    return (
      <React.Suspense fallback={'...loading'}>
          <Routes>
                {routes.map((route) => (
                    <Route path={route.path} element={<route.component />} />
                ))}
            </Routes>
       </React.Suspense>
    )
}

export default AppRoutes;