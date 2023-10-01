import { Route, RouteObject, Routes } from 'react-router-dom';

type Props = {
  routes: RouteObject[];
};

export const RenderInnerRoutes = ({ routes }: Props) => (
  <Routes>{renderRoutes(routes)}</Routes>
);

const renderRoutes = (routes: RouteObject[]) => {
  return routes.map(({ index, path, element, children }, i) => {
    if (children?.length) {
      return (
        <Route key={i} path={path} index={index}>
          {renderRoutes(children)}
        </Route>
      );
    }
    return <Route key={i} index={index} path={path} element={element} />;
  });
};
