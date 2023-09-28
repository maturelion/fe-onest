import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function useNav() {
  const [showNav, setShowNav] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return {
    showNav,
    setShowNav,
    dispatch,
    navigate,
  };
}
