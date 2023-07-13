import { useForm } from "@mantine/form";
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  PaperProps,
  Button,
  Divider,
  Checkbox,
  Anchor,
  Stack,
} from "@mantine/core";
import { useNavigate } from "react-router-dom";

export function Login(props: PaperProps) {

  const navigate = useNavigate();
  const form = useForm({
    initialValues: {
      username: "",
      password: "",
    },
    validate: {
      // username: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
      username: (val) =>
        val.length <= 6
          ? "Username should include at least 6 characters"
          : null,
      password: (val) =>
        val.length <= 6
          ? "Password should include at least 6 characters"
          : null,
    },
  });

  const handleSubmit = () => {
    if (form.isValid()) {
      console.log("Form submitted successfully");
      // Additional logic for handling the form submission goes here
    } else {
      console.log("Form validation failed");
    }
  };

  return (
    <Paper radius="md" p="xl" withBorder className="w-[400px] mx-auto">
      <Text size="lg" weight={500} className="text-center py-2">
        Welcome to BidZone
      </Text>

      <form onSubmit={handleSubmit}>
        <Stack>

          <TextInput
            required
            label="Username"
            placeholder="Username"
            value={form.values.username}
            onChange={(event) =>
              form.setFieldValue("username", event.currentTarget.value)
            }
            error={form.errors.username && "Username should include at least 6 characters"}
            radius="md"
          />

          <PasswordInput
            required
            label="Password"
            placeholder="Your password"
            value={form.values.password}
            onChange={(event) =>
              form.setFieldValue("password", event.currentTarget.value)
            }
            error={
              form.errors.password &&
              "Password should include at least 6 characters"
            }
            radius="md"
          />
        </Stack>

        <Group position="apart" mt="xl">
          <Anchor
            component="button"
            type="button"
            color="dimmed"
            onClick={() => navigate('/signup')}
            size="xs">
            {"Don't have an account? Register"}
          </Anchor>
          <Button
            type="submit"
            radius="xl"
            className="bg-main text-white hover:bg-ignore"
            style={{ visibility: "visible" }}>
            {"Login"}
          </Button>
        </Group>
      </form>
    </Paper>
  );
}
