import { useState } from "react";

// Asrtyx
import { VStack, HStack, StackItem } from "@astryxdesign/core/Layout";
import {
    SegmentedControl,
    SegmentedControlItem,
} from "@astryxdesign/core/SegmentedControl";
import { Center } from "@astryxdesign/core/Center";
import { Section } from "@astryxdesign/core/Section";
import { Text } from "@astryxdesign/core/Text";
import { TextInput } from "@astryxdesign/core/TextInput";
import { Button } from "@astryxdesign/core/Button";
import { DateInput } from "@astryxdesign/core/DateInput";
import type { ISODateString } from "@astryxdesign/core";

// React Router
import { Link } from "react-router";

// Components
import AuthLayout from "../components/AuthLayout";

// Image
import AirbnbLogo from "../../../assets/logo_airbnb.webp";

const getEighteenYearsAgoISO = (): ISODateString => {
    const date = new Date();
    date.setFullYear(date.getFullYear() - 18);
    return date.toISOString().split("T")[0] as ISODateString;
};

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState<ISODateString | undefined>(
        undefined,
    );
    const [companyName, setCompanyName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [value, setValue] = useState("guest");

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
                                        Welcome to Airbnb Clone
                                    </Text>
                                    <Text
                                        type="body"
                                        color="secondary"
                                        size="sm"
                                    >
                                        Sign up for your Airbnb Clone account
                                    </Text>
                                </VStack>

                                <SegmentedControl
                                    value={value}
                                    onChange={setValue}
                                    label="Select your role"
                                    layout="fill"
                                >
                                    <SegmentedControlItem
                                        value="guest"
                                        label="Guest"
                                    />
                                    <SegmentedControlItem
                                        value="host"
                                        label="Host"
                                    />
                                </SegmentedControl>

                                {value === "guest" && (
                                    <VStack gap={2}>
                                        <TextInput
                                            label="First Name"
                                            isLabelHidden
                                            type="text"
                                            placeholder="John"
                                            value={email}
                                            onChange={setEmail}
                                            size="lg"
                                        />
                                        <TextInput
                                            label="Last Name"
                                            isLabelHidden
                                            type="text"
                                            placeholder="Doe"
                                            value={email}
                                            onChange={setEmail}
                                            size="lg"
                                        />
                                        <TextInput
                                            label="Email"
                                            isLabelHidden
                                            type="email"
                                            placeholder="john@gmail.com"
                                            value={email}
                                            onChange={setEmail}
                                            size="lg"
                                        />
                                        <DateInput
                                            label="Date of Birth"
                                            isLabelHidden
                                            placeholder="Date of birth"
                                            max={getEighteenYearsAgoISO()}
                                            isRequired
                                            size="lg"
                                            value={dateOfBirth}
                                            onChange={setDateOfBirth}
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
                                        <VStack gap={1}>
                                            <TextInput
                                                label="Confirm Password"
                                                isLabelHidden
                                                placeholder="Confirm your password"
                                                type="password"
                                                value={confirmPassword}
                                                onChange={(v: string) => {
                                                    setConfirmPassword(v);
                                                }}
                                                size="lg"
                                            />
                                        </VStack>
                                    </VStack>
                                )}

                                {value === "host" && (
                                    <VStack gap={2}>
                                        <TextInput
                                            label="First Name"
                                            isLabelHidden
                                            type="text"
                                            placeholder="John"
                                            value={email}
                                            onChange={setEmail}
                                            size="lg"
                                        />
                                        <TextInput
                                            label="Last Name"
                                            isLabelHidden
                                            type="text"
                                            placeholder="Doe"
                                            value={email}
                                            onChange={setEmail}
                                            size="lg"
                                        />
                                        <TextInput
                                            label="Email"
                                            isLabelHidden
                                            type="email"
                                            placeholder="john@company.com"
                                            value={email}
                                            onChange={setEmail}
                                            size="lg"
                                        />
                                        <TextInput
                                            label="Company Name"
                                            isLabelHidden
                                            placeholder="John Doe Inc."
                                            value={companyName}
                                            onChange={setCompanyName}
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
                                        <VStack gap={1}>
                                            <TextInput
                                                label="Confirm Password"
                                                isLabelHidden
                                                placeholder="Confirm your password"
                                                type="password"
                                                value={confirmPassword}
                                                onChange={(v: string) => {
                                                    setConfirmPassword(v);
                                                }}
                                                size="lg"
                                            />
                                        </VStack>
                                    </VStack>
                                )}

                                <Button
                                    label="Sign Up"
                                    variant="destructive"
                                    size="lg"
                                />
                            </VStack>
                        </Center>
                    </StackItem>
                    <Text type="supporting" color="secondary">
                        Already have an account?{" "}
                        <Link to="/login" className="link-auth-button">
                            Log in
                        </Link>
                    </Text>
                </VStack>
            </Section>
        </AuthLayout>
    );
};

export default SignUp;
