
import { lazy, LazyExoticComponent } from 'react';
import { NoLazy } from '../01-lazyload/pages/NoLazy';

type JSXComponent = () => JSX.Element;


interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;  //Aca va la parte que acepta lazy components y components convencionales
  name: string;
};

const LazyLayout = lazy( () => import(/* webpackChunkName: "LazyLayaoutComponent" */ '../01-lazyload/layout/LazyLayout') );


export const routes:Route[] = [
  {
    path: '/lazyload/*', //esto quiere decir que todo lo que venga de aca va a ser procesado desde esta ruta
    to: '/lazyload',
    Component: LazyLayout,
    name: 'LazyPage - Dashboard',
  },
  {
    to: '/nolazy',
    path: 'nolazy',
    Component: NoLazy, //esto tiene que ir con mayusculas open camel case porque lo toma mejor el react
    name: 'No lazy Page', //este componente lo cargamos sin lazy, demamnera convencional
  },
]