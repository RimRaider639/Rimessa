import { extendTheme } from "@chakra-ui/react";
import textStyles from "./foundations/text";
import semanticTokens from "./foundations/semanticTokens";
import Container from "./components/Container";
import Link from "./components/Link";
import Flex from "./components/Flex";
import Text from "./components/Text"

const theme = extendTheme({
    semanticTokens,
    textStyles,
    components:{
        Container,
        Link,
        Flex,
        Text,
    }
  })

  export default theme;