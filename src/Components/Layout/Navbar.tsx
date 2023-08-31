import { useState } from "react";
import {
  Box,
  Flex,
  Spacer,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Stack,
  Link,
} from "@chakra-ui/react";
import { HamburgerIcon, SunIcon, MoonIcon } from "@chakra-ui/icons";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [themeMode, setThemeMode] = useState("light");

  const toggleTheme = () => {
    const newMode = themeMode === "light" ? "dark" : "light";
    setThemeMode(newMode);
    localStorage.setItem("themeMode", newMode);
  };

  return (
    <Box bg="gray.900" color="white" py={4}>
      <Flex px={4} align="center">
        <Spacer display={{ base: "none", md: "block" }} />
        <IconButton
          aria-label="Open Menu"
          icon={<HamburgerIcon />}
          onClick={onOpen}
          display={{ base: "block", md: "none" }}
        />
        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
          <DrawerOverlay>
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Menu</DrawerHeader>
              <DrawerBody>
                <Stack spacing={4}>
                  <Link href="#" onClick={onClose}>
                    Home
                  </Link>
                  <Link href="#" onClick={onClose}>
                    About
                  </Link>
                  <Link href="#" onClick={onClose}>
                    Skills
                  </Link>
                  <Link href="#" onClick={onClose}>
                    Contact
                  </Link>
                </Stack>
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
        <Flex display={{ base: "none", md: "flex" }} align="center" gap={8}>
          <Link href="#">Home</Link>
          <Link href="#">About</Link>
          <Link href="#">Skills</Link>
          <Link href="#">Contact</Link>
        </Flex>
        <Spacer />
        <IconButton
          aria-label="Toggle Theme"
          icon={themeMode === "light" ? <MoonIcon /> : <SunIcon />}
          onClick={toggleTheme}
          variant="styled"
          size="md"
          mr={{ base: 0, md: 4 }}
        />
      </Flex>
    </Box>
  );
}
