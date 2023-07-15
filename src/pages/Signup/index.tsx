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
import { upperFirst } from "@mantine/hooks";
import { baseURL } from "../../data/baseURL";
import axios from "axios";
import { toast } from "react-toastify";

export function Signup(props: PaperProps) {
  const navigate = useNavigate();
  const form = useForm({
    initialValues: {
      name: "",
      username: "",
      password: "",
    },
    validate: {
      name: (val) => (val.length <= 0 ? "Please enter your name" : null),
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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    if (form.isValid()) {
      event.preventDefault();
      axios.post(baseURL + "/user/signup", {
        name: form.values.name,
        username: form.values.username,
        password: form.values.password,
      }).then((res)=>{
        console.log("Form submitted successfully");
        toast.success("User Created");
        navigate("/login")
      }).catch((err)=>{
        console.log(err.message);
        toast.error("Failed to create user")
      });
    } else {
      console.log("Form validation failed");
    }
  };

  return (
    <Paper
      radius="md"
      p="xl"
      withBorder
      className="w-[400px] max-[500px]:w-[90%] mx-auto">
      <Text size="lg" weight={500} className="text-center py-2">
        Welcome to BidZone
      </Text>

      <form onSubmit={handleSubmit}>
        <Stack>
          <TextInput
            required
            label="Name"
            placeholder="Your name"
            value={form.values.name}
            onChange={(event) =>
              form.setFieldValue("name", event.currentTarget.value)
            }
            radius="md"
          />

          <TextInput
            required
            label="Username"
            placeholder="Username"
            value={form.values.username}
            onChange={(event) =>
              form.setFieldValue("username", event.currentTarget.value)
            }
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
            onClick={() => navigate("/login")}
            size="xs">
            {"Already have an account? Login"}
          </Anchor>
          <Button
            type="submit"
            radius="xl"
            className="bg-main text-white hover:bg-main focus:bg-main"
            style={{ visibility: "visible" }}>
            {"Signup"}
          </Button>
        </Group>
      </form>
    </Paper>
  );
}
