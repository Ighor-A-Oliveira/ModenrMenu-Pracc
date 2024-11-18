/* eslint-disable react/prop-types */
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import PropTypes from "prop-types";

/* controls the link animation */
export default function FlyoutLink({ children, href, FlyoutContent }) {
    /* this state will control ig the underline animation and the menu popup */
    const [open, setOpen] = useState(false);
    /* here we are checking to see if we receive a flyoutcontent, if not then we dont show any animations */
    const showFlyout = open && FlyoutContent;
    return (
      /* this relative tag is to properly position the flyout menu */
      <div
        className="relative h-fit w-fit"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(!open)}
      >
        {/* this relative in the a tag is to properly render the line animation */}
        <a href={href} className="relative text-white font-sans">
          {children}
          <span
            style={{
              /* this ternary operator will change the width if the span based on the open state/presence of FlyoutContent */
              transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
            }}
            className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-indigo-300 transition-transform duration-300 ease-out"
          />
        </a>
  
        {/* this will update animation based on the dom */}
        <AnimatePresence>
          {/* this works because the entire component is surrounded by the div that manages the mouse events, so anything under it also triggers the events */}
          {/* so basically the "bridge component just extender the menu a bit so that it does not close"*/}
          {showFlyout && (
            /* just centering the menu to the link and adding a bridge so that it does not close so easaly */
            <motion.div
              /* the div will start the animation being 15 pixel bellow its original point and being invisible*/
              initial={{ opacity: 0, y: 15 }}
              /* when the animation starts will go the the orinial point and be visible */
              animate={{ opacity: 1, y: 0 }}
              /* when it ends it will go back to the initial state */
              exit={{ opacity: 0, y: 15 }}
              /* we are using this style so that framer-motion know how to properly center our menu */
              style={{ translateX: "-50%" }}
              /*  */
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute left-1/2 top-12 bg-white text-black "
            >
              {/* bridge component, both the bridge and the triagnel component can be done in element */}
              {/* <div className="absolute -top-6 left-0 right-0 h-6" /> */}
              {/* triangle effect */}
              {/* <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" /> */}
              <FlyoutContent />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  FlyoutLink.propTypes = {
    children: PropTypes.node.isRequired, // Validates that `children` is provided
  };