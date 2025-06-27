"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  Box,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import styles from "./Navbar.module.css";

const navbarItems = [
  { title: "ABOUT US", link: "/about_us" },
  { title: "DESTINATION", link: "/destination" },
  { title: "NASA COLLABORATION", link: "/nasa_collaboration" },
];

export const Navbar = () => {
  const currentPath = usePathname();
  const router = useRouter();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:768px)");

  const handleNavigate = (link) => {
    router.push(link);
    setDrawerOpen(false);
  };

  return (
    <header className={styles.headerContainer}>
      <div className={styles.navbarLogo}>
        <Link href="/" className={styles.navbarLogo}>
          <img src="/shared/logo.svg" alt="Logo" />
          GALACTICA
        </Link>
      </div>

      <div className={styles.decorativeLine} />

      {!isMobile && (
        <nav className={styles.navbar}>
          <div className={styles.navbarBG} />
          <ul className={styles.navbarList}>
            {navbarItems.map((item, index) => (
              <li
                key={item.link}
                className={`${styles.navbarLinks} ${
                  item.link === currentPath ? styles.isLinkActive : ""
                }`}
              >
                <Link href={item.link}>
                  <b>0{index + 1}</b> {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}

      {isMobile && (
        <>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={() => setDrawerOpen(true)}
            sx={{ color: "white" }}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={() => setDrawerOpen(false)}
          >
            <Box className={styles.mobileDrawer}>
              {navbarItems.map((item, index) => (
                <div
                  key={item.link}
                  className={styles.mobileDrawerItem}
                  onClick={() => handleNavigate(item.link)}
                >
                  <b>0{index + 1}</b> {item.title}
                </div>
              ))}
            </Box>
          </Drawer>
        </>
      )}
    </header>
  );
};
