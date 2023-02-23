import "./ScrollUp.scss";
import { ScrollTop } from "../Scroll/Scroll";
import { useEffect } from "react";
const ScrollUpIcon = (
  <svg
    width="40px"
    height="40px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      className="scrollUpIcon"
      d="M12 4V20M12 4L18 10M12 4L6 10"
      stroke="#ffffffaf"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ScrollUp = () => {
  
  const name = "ScrollUp";
  function bla() {
    const PageScrollUp = document.querySelector<HTMLElement>(
      `.${name}`
    ) as Element | null;

    let lastScroll = 0;
    const defaultOffset = 200;

    const scrollPosition = () =>
      window.pageYOffset || document.documentElement.scrollTop;
    const containsHide = () => PageScrollUp?.classList.contains("hide");

    window.addEventListener("scroll", () => {
      if (
        scrollPosition() > lastScroll &&
        !containsHide() &&
        scrollPosition() > defaultOffset
      ) {
        PageScrollUp?.classList.add("hide");
      } else if (scrollPosition() < lastScroll && containsHide()) {
        PageScrollUp?.classList.remove("hide");
      }
      lastScroll = scrollPosition();
    });
  }
  window.onload = bla;

  return (
    <div
      className={"ScrollUp"}
      onClick={() => {
        ScrollTop("header");
      }}
    >
      {ScrollUpIcon}
    </div>
  );
};

export default ScrollUp;
