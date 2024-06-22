import useUserContext from "@/hooks/useUserContext";


export default function logoutAction( dispatch ) {
  dispatch({ type: "Logout" });
}