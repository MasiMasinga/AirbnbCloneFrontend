import { useState } from "react";

// Asrtyx
import { VStack, HStack, StackItem } from "@astryxdesign/core/Layout";
import { Center } from "@astryxdesign/core/Center";
import { Section } from "@astryxdesign/core/Section";
import { Text } from "@astryxdesign/core/Text";
import { TextInput } from "@astryxdesign/core/TextInput";
import { Button } from "@astryxdesign/core/Button";
import { Link } from "@astryxdesign/core/Link";

// Components
import AuthLayout from "../components/AuthLayout";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <AuthLayout>
            <Section variant="transparent" padding={0} height="100%">
                <VStack gap={4} height="100%">
                    <HStack gap={2} vAlign="center">
                        <Text type="body" weight="bold">
                            Airbnb Clone.
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

                                <VStack gap={2}>
                                    <TextInput
                                        label="Email"
                                        isLabelHidden
                                        type="email"
                                        placeholder="name@company.com"
                                        value={email}
                                        onChange={setEmail}
                                        size="lg"
                                    />
                                    <VStack gap={1}>
                                        <TextInput
                                            label="Password"
                                            isLabelHidden
                                            placeholder="Enter your password"
                                            type="password"
                                            value={password}
                                            onChange={(v: string) => {
                                                setPassword(v);
                                            }}
                                            size="lg"
                                        />
                                    </VStack>
                                </VStack>

                                <Button
                                    label="Login"
                                    variant="destructive"
                                    size="lg"
                                />
                            </VStack>
                        </Center>
                    </StackItem>
                    <Text type="supporting" color="secondary">
                        Don&apos;t have an account?{" "}
                        <Link href="/sign-up" type="supporting">
                            Sign up
                        </Link>
                    </Text>
                </VStack>
            </Section>
        </AuthLayout>
    );
};

export default Login;
