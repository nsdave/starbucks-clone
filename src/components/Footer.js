import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ContentPlaceholder } from "./ContentPlaceholder";

import '../styles/Footer.css'
import { Link } from "react-router-dom";
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';

const Accordion = ({ i, expanded, setExpanded, linkHeading, link1, link2, link3, link4, link5, link6 }) => {
  const isOpen = i === expanded;

  // By using `AnimatePresence` to mount and unmount the contents, we can animate
  // them in and out while also only rendering the contents of open accordions
  return (
    <>
      <motion.header
        initial={false}
        onClick={() => setExpanded(isOpen ? false : i)}

        className='accordion__header'
      >
        <Link>
          {linkHeading}
        </Link>
        <div className="accordion__icon" >
          {isOpen ? (
            <KeyboardArrowUpRoundedIcon />
          ) : (
            <KeyboardArrowDownRoundedIcon />
          )}
        </div>
      </motion.header>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            className="accordion__section"

            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 }
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <ContentPlaceholder 
              link1={link1}
              link2={link2}
              link3={link3}
              link4={link4}
              link5={link5}
              link6={link6}
            />
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};

export const Footer = () => {
  // This approach is if you only want max one section open at a time. If you want multiple
  // sections to potentially be open simultaneously, they can all be given their own `useState`.
  const [expanded, setExpanded] = useState(0);

  return (
    <>
      <Accordion
        expanded={expanded}
        setExpanded={setExpanded}
        linkHeading='About Us'
        i={1}
        link1='Our Heritage'
        link2='Our Coffee'
        link3='Stories and News'
        link4='Investor Relations'
        link5='Policies and Standards'
        link6='Customer Service'
      />
      <Accordion
        expanded={expanded}
        setExpanded={setExpanded}
        linkHeading='Careers'
        i={2}
        link1='Culture and Values'
        link2='Inclusion, Diversity, and Equity'
        link3='College Achievement Plan'
        link4='U.S. Careers'
        link5='International Careers'
      />
      <Accordion
        expanded={expanded}
        setExpanded={setExpanded}
        linkHeading='Social Impact'
        i={3}
        link1='Ethical Sourcing'
        link2='Leading in Sustainability'
        link3='Strengthening Communities'
        link4='Creating Oppurtunities'
        link5='Global Social Impact Report'
      />
      <Accordion
        expanded={expanded}
        setExpanded={setExpanded}
        linkHeading='For Business Partners'
        i={4}
        link1='Landlord Support Center'
        link2='Suppliers'
        link3='Corporate Gift Card Sales'
        link4='Office and Foodservice Coffee'
      />
      <Accordion
        expanded={expanded}
        setExpanded={setExpanded}
        linkHeading='Order and Pickup'
        i={5}
        link1='Order on the App'
        link2='Order on the Web'
        link3='Delivery'
        link4='Order and Pickup Options'
        link5='Explore and Find Coffee for Home'
      />
    </>
  );
};


