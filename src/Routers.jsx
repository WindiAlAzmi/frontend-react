import MainPage from './pages/MainPage';

export default function Routers() {
  return [
    {
      name: "home",
      path: "/",
      component: <MainPage />,
    }
  ];
}
