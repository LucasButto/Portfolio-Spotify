import { useNavigate } from "react-router-dom";

export const useViewTransitionNavigation = () => {
  const navigate = useNavigate();

  const viewNavigate = (newRoute) => {
    if (!document.startViewTransition) {
      return navigate(newRoute);
    } else {
      document.startViewTransition(() => {
        navigate(newRoute);
      });
    }
  };

  return {
    viewNavigate,
  };
};
