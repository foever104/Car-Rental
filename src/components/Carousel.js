import React, {
  useMemo,
  useState,
  useRef,
  useEffect,
  useCallback
} from "react";
import "../styles/content1.css";
import { Children } from "react";
import { useLayoutEffect } from "react";

const Carousel = ({ children }) => {
  const containerRef = useRef(2);
  const intervalRef = useRef(null);
  const [current, setCurrent] = useState(1);
  const [translateX, setTranslateX] = useState(0);

  const actionHandler = useCallback(
    (mode) => {
      containerRef.current.style.transitionDuration = "400ms";
      if (mode === "prev") {
        if (current <= 1) {
          setTranslateX(0);
          setCurrent(children.length);
        } else {
          setTranslateX(containerRef.current.clientWidth * (current - 1));
          setCurrent((prev) => --prev);
        }
      } else if (mode === "next") {
        if (current >= children.length) {
          setTranslateX(containerRef.current.clientWidth * (current + 1));
          setCurrent(1);
        } else {
          setTranslateX(containerRef.current.clientWidth * (current + 1));
          setCurrent((next) => ++next);
        }
      }
    },
    [current, children]
  );
  // this is for infinite scoll smooth effect
  useEffect(() => {
    const transationEnd = () => {
      if (current <= 1) {
        containerRef.current.style.transitionDuration = "0ms";
        setTranslateX(containerRef.current.clientWidth * current);
      }

      if (current >= children.length) {
        containerRef.current.style.transitionDuration = "0ms";
        setTranslateX(containerRef.current.clientWidth * children.length);
      }
    };
    document.addEventListener("transitionend", transationEnd);
    return () => {
      document.removeEventListener("transitionend", transationEnd);
    };
  }, [current, children]);

  //for autoplay
  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      actionHandler("next");
    }, 3000);
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [actionHandler]);

  const sliders = useMemo(() => {
    if (children.length > 1) {
      let items = Children.map(children, (child, index) => (
        <li key={index} className="slides">
          {child}
        </li>
      ));

      return [
        <li key={children.length + 1} className="slides">
          {children[children.length - 1]}
        </li>,
        ...items,
        <li key={children.length + 2} className="slides">
          {children[0]}
        </li>
      ];
    } else return <li className="slides">{children[0]}</li>;
  }, [children]);

  //position first element correctly and this will render only ones
  useLayoutEffect(() => {
    setTranslateX(containerRef.current.clientWidth * current);
  }, []);

  return (
    <div className="slider_root">
      <ul
        ref={containerRef}
        className="slider_container"
        style={{
          transform: `translate3d(${-translateX}px, 0, 0)`
          // transitionDuration: "400ms"
        }}
      >
        {sliders}
      </ul>
      <button className="BtnLeft" onClick={() => actionHandler("prev")}>
        {"<"}
      </button>
      <button className="BtnRight" onClick={() => actionHandler("next")}>
        {">"}
      </button>
    </div>
  );
};
export default Carousel;
