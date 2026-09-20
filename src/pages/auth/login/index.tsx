// Asrtyx
import { VStack, HStack, StackItem } from "@astryxdesign/core/Layout";
import { Center } from "@astryxdesign/core/Center";
import { Section } from "@astryxdesign/core/Section";
import { Text } from "@astryxdesign/core/Text";
import { TextInput } from "@astryxdesign/core/TextInput";
import { Button } from "@astryxdesign/core/Button";

// Context
import { useAuth } from "../../../common/contexts/AuthContext";

// React Router
import { Link } from "react-router";

// React Hook Form
import { Controller, useForm } from "react-hook-form";

// Zod
import { z as zod } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Components
import AuthLayout from "../components/AuthLayout";

// Image
import AirbnbLogo from "../../../assets/logo_airbnb.webp";

const schema = zod.object({
    emailAddress: zod.string().min(1, { message: "Email is required" }).email(),
    password: zod.string().min(1, { message: "Password is required" }),
});

type Values = zod.infer<typeof schema>;
const defaultValues = {
    emailAddress: "",
    password: "",
} satisfies Values;

const Login = () => {
    const { Login, loading } = useAuth();

    const { control, handleSubmit } = useForm<Values>({
        defaultValues,
        resolver: zodResolver(schema),
    });

    const onSubmit = async (data: Values) => {
        await Login({
            emailAddress: data.emailAddress,
            password: data.password,
        });
    };

    return (
        <AuthLayout>
            <Section variant="transparent" padding={0} height="100%">
                <VStack gap={4} height="100%">
                    <HStack gap={2} vAlign="center">
                        <Text type="body" weight="bold">
                            <Link to="/">
                                <img
                                    src={AirbnbLogo}
                                    alt="Airbnb Clone Logo"
                                    width={60}
                                    height={60}
                                />
                            </Link>
                        </Text>
                    </HStack>

                    <StackItem size="fill">
                        <Center axis="vertical" height="100%">
                            <VStack gap={4} hAlign="stretch" width="100%">
                                <VStack gap={1}>
                                    <Text type="display-1" as="h2">
                                        Welcome back
                                    </Text>
                                    <Text
                                        type="body"
                                        color="secondary"
                                        size="sm"
                                    >
                                        Login to your Airbnb Clone account
                                    </Text>
                                </VStack>

                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <VStack gap={2}>
                                        <Controller
                                            control={control}
                                            name="emailAddress"
                                            render={({ field, fieldState }) => (
                                                <TextInput
                                                    {...field}
                                                    label="Email"
                                                    isLabelHidden
                                                    type="email"
                                                    placeholder="john@gmail.com"
                                                    size="lg"
                                                    status={
                                                        fieldState.error && {
                                                            type: "error",
                                                            message:
                                                                fieldState.error
                                                                    .message,
                                                        }
                                                    }
                                                />
                                            )}
                                        />
                                        <VStack gap={1}>
                                            <Controller
                                                control={control}
                                                name="password"
                                                render={({
                                                    field,
                                                    fieldState,
                                                }) => (
                                                    <TextInput
                                                        {...field}
                                                        label="Password"
                                                        isLabelHidden
                                                        placeholder="Enter your password"
                                                        type="password"
                                                        size="lg"
                                                        status={
                                                            fieldState.error && {
                                                                type: "error",
                                                                message:
                                                                    fieldState
                                                                        .error
                                                                        .message,
                                                            }
                                                        }
                                                    />
                                                )}
                                            />
                                        </VStack>
                                    </VStack>

                                    <Button
                                        label="Login"
                                        variant="destructive"
                                        size="lg"
                                        type="submit"
                                        width="100%"
                                        isLoading={loading}
                                        style={{ marginTop: "8px" }}
                                    />
                                </form>
                            </VStack>
                        </Center>
                    </StackItem>
                    <Text type="supporting" color="secondary">
                        Don&apos;t have an account?{" "}
                        <Link to="/sign-up" className="link-auth-button">
                            Sign up
                        </Link>
                    </Text>
                </VStack>
            </Section>
        </AuthLayout>
    );
};

export default Login;
