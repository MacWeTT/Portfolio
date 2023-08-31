import { Box, Flex, IconButton, Link, Tooltip } from "@chakra-ui/react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <Box bg="gray.900" color="white" py={4}>
      <Flex justify="center" align="center">
        <Tooltip label="GitHub">
          <IconButton
            as={Link}
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            icon={<FaGithub />}
            variant="styled"
            size="md"
            mx={2}
          />
        </Tooltip>
        <Tooltip label="Instagram">
          <IconButton
            as={Link}
            href="https://www.instagram.com/your-username/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            icon={<FaInstagram />}
            variant="styled"
            size="md"
            mx={2}
          />
        </Tooltip>
        <Tooltip label="LinkedIn">
          <IconButton
            as={Link}
            href="https://www.linkedin.com/in/your-username/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            icon={<FaLinkedin />}
            variant="styled"
            size="md"
            mx={2}
          />
        </Tooltip>
      </Flex>
    </Box>
  );
}
