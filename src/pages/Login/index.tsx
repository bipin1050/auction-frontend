import { useForm } from "@mantine/form";
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  PaperProps,
  Button,
  Anchor,
  Stack,
} from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../authentication/auth";

export function Login(props: PaperProps) {
  const navigate = useNavigate();
  const { user, isLoading, login } = useContext(AuthContext);
  useEffect(() => {
    if (user) {
      navigate("/profile");
    }
  }, [user, navigate]);
  const form = useForm({
    initialValues: {
      username: "",
      password: "",
    },
    validate: {
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

  const handleBlur = (field: string) => {
    form.validateField(field);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    if (form.isValid()) {
      event.preventDefault();
      console.log(form.values.username, form.values.password)
      login(form.values.username, form.values.password);
    } else {
      console.log("Form validation failed");
    }
  };
  if (isLoading) {
    return <div>Loading...</div>;
  }

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
            onBlur={() => handleBlur("username")} // Handle onBlur event
            error={form.errors.username} // Use form.errors directly
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
            onBlur={() => handleBlur("password")} // Handle onBlur event
            error={form.errors.password} // Use form.errors directly
            radius="md"
          />
        </Stack>

        <Group position="apart" mt="xl">
          <Anchor
            component="button"
            type="button"
            color="dimmed"
            onClick={() => navigate("/signup")}
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
