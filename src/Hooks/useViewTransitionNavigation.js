import { useNavigate } from "react-router-dom";

export const useViewTransitionNavigation = () => {
  const navigate = useNavigate();

  const viewNavigate = (newRoute) => {
    if (!document.startViewTransition) {
      return () => {
        document.documentElement.scrollTop = 0;
        navigate(newRoute);
      };
    } else {
      return document.startViewTransition(() => {
        document.documentElement.scrollTop = 0;
        navigate(newRoute);
      });
    }
  };

  return {
    viewNavigate,
  };
};
