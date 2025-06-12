import { Column, Heading, Text } from "@once-ui-system/core";

export default function NotFound() {
  return (
    <Column fillWidth as="section" horizontal="center">
      <Text marginBottom="s" variant="display-strong-xl">
        404
      </Text>
      <Heading marginBottom="l" variant="display-strong-xs">
        Page Not Found
      </Heading>
      <Text onBackground="neutral-weak">
        The page you are looking for does not exist.
      </Text>
    </Column>
  );
}
