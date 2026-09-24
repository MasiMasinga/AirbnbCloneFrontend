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

// Lucide
import { User, Mail, Lock, Eye, EyeOff } from "lucide-react";

// Context
import { useAuth } from "../../../common/contexts/AuthContext";

// React Hook Form
import { Controller, useForm } from "react-hook-form";

// Zod
import { z as zod } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// React Router
import { Link } from "react-router";

// Components
import AuthLayout from "../components/AuthLayout";

// Image
import AirbnbLogo from "../../../assets/logo_airbnb.webp";

const schema = zod.object({
    firstName: zod.string().min(1, { message: "First name is required" }),
    emailAddress: zod.string().min(1, { message: "Email is required" }).email(),
    password: zod.string().min(1, { message: "Password is required" }),
    confirmPassword: zod
        .string()
        .min(1, { message: "Confirm password is required" }),
});

type Values = zod.infer<typeof schema>;
const defaultValues = {
    firstName: "",
    emailAddress: "",
    password: "",
    confirmPassword: "",
} satisfies Values;

const SignUp = () => {
    const { Register, loading } = useAuth();

    const [value, setValue] = useState("guest");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const { control, handleSubmit } = useForm<Values>({
        defaultValues,
        resolver: zodResolver(schema),
    });

    const onSubmit = async (data: Values) => {
        await Register({
            firstName: data.firstName,
            emailAddress: data.emailAddress,
            password: data.password,
            userRole: value as "host" | "guest",
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

                                <form onSubmit={handleSubmit(onSubmit)}>
                                    {value === "guest" && (
                                        <VStack gap={2}>
                                            <Controller
                                                control={control}
                                                name="firstName"
                                                render={({
                                                    field,
                                                    fieldState,
                                                }) => (
                                                    <TextInput
                                                        {...field}
                                                        label="First Name"
                                                        isLabelHidden
                                                        type="text"
                                                        placeholder="John Doe"
                                                        size="lg"
                                                        hasClear
                                                        startIcon={User}
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
                                            <Controller
                                                control={control}
                                                name="emailAddress"
                                                render={({
                                                    field,
                                                    fieldState,
                                                }) => (
                                                    <TextInput
                                                        {...field}
                                                        label="Email"
                                                        isLabelHidden
                                                        type="email"
                                                        placeholder="john@gmail.com"
                                                        size="lg"
                                                        hasClear
                                                        startIcon={Mail}
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
                                            <VStack gap={1}>
                                                <Controller
                                                    control={control}
                                                    name="password"
                                                    render={({
                                                        field,
                                                        fieldState,
                                                    }) => (
                                                        <div className="password-field">
                                                            <TextInput
                                                                {...field}
                                                                label="Password"
                                                                isLabelHidden
                                                                placeholder="Enter your password"
                                                                type={
                                                                    showPassword
                                                                        ? "text"
                                                                        : "password"
                                                                }
                                                                size="lg"
                                                                startIcon={Lock}
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
                                                            <button
                                                                type="button"
                                                                onClick={() =>
                                                                    setShowPassword(
                                                                        (
                                                                            prev,
                                                                        ) =>
                                                                            !prev,
                                                                    )
                                                                }
                                                                aria-label={
                                                                    showPassword
                                                                        ? "Hide password"
                                                                        : "Show password"
                                                                }
                                                                style={{
                                                                    position:
                                                                        "absolute",
                                                                    right: 5,
                                                                    top: 9,
                                                                    zIndex: 10,
                                                                }}
                                                            >
                                                                {showPassword ? (
                                                                    <EyeOff
                                                                        size={
                                                                            18
                                                                        }
                                                                    />
                                                                ) : (
                                                                    <Eye
                                                                        size={
                                                                            18
                                                                        }
                                                                    />
                                                                )}
                                                            </button>
                                                        </div>
                                                    )}
                                                />
                                            </VStack>
                                            <VStack gap={1}>
                                                <Controller
                                                    control={control}
                                                    name="confirmPassword"
                                                    render={({
                                                        field,
                                                        fieldState,
                                                    }) => (
                                                        <div className="password-field">
                                                            <TextInput
                                                                {...field}
                                                                label="Confirm Password"
                                                                isLabelHidden
                                                                placeholder="Confirm your password"
                                                                type={
                                                                    showConfirmPassword
                                                                        ? "text"
                                                                        : "password"
                                                                }
                                                                size="lg"
                                                                startIcon={Lock}
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
                                                            <button
                                                                type="button"
                                                                onClick={() =>
                                                                    setShowConfirmPassword(
                                                                        (
                                                                            prev,
                                                                        ) =>
                                                                            !prev,
                                                                    )
                                                                }
                                                                aria-label={
                                                                    showConfirmPassword
                                                                        ? "Hide password"
                                                                        : "Show password"
                                                                }
                                                                style={{
                                                                    position:
                                                                        "absolute",
                                                                    right: 5,
                                                                    top: 9,
                                                                    zIndex: 10,
                                                                }}
                                                            >
                                                                {showConfirmPassword ? (
                                                                    <EyeOff
                                                                        size={
                                                                            18
                                                                        }
                                                                    />
                                                                ) : (
                                                                    <Eye
                                                                        size={
                                                                            18
                                                                        }
                                                                    />
                                                                )}
                                                            </button>
                                                        </div>
                                                    )}
                                                />
                                            </VStack>
                                        </VStack>
                                    )}

                                    {value === "host" && (
                                        <VStack gap={2}>
                                            <Controller
                                                control={control}
                                                name="firstName"
                                                render={({
                                                    field,
                                                    fieldState,
                                                }) => (
                                                    <TextInput
                                                        {...field}
                                                        label="First Name"
                                                        isLabelHidden
                                                        type="text"
                                                        placeholder="John Doe"
                                                        size="lg"
                                                        startIcon={User}
                                                        hasClear
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

                                            <Controller
                                                control={control}
                                                name="emailAddress"
                                                render={({
                                                    field,
                                                    fieldState,
                                                }) => (
                                                    <TextInput
                                                        {...field}
                                                        label="Email"
                                                        isLabelHidden
                                                        type="email"
                                                        placeholder="john@company.com"
                                                        size="lg"
                                                        startIcon={Mail}
                                                        hasClear
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
                                            <VStack gap={1}>
                                                <Controller
                                                    control={control}
                                                    name="password"
                                                    render={({
                                                        field,
                                                        fieldState,
                                                    }) => (
                                                        <div className="password-field">
                                                            <TextInput
                                                                {...field}
                                                                label="Password"
                                                                isLabelHidden
                                                                placeholder="Enter your password"
                                                                type={
                                                                    showPassword
                                                                        ? "text"
                                                                        : "password"
                                                                }
                                                                size="lg"
                                                                startIcon={Lock}
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

                                                            <button
                                                                type="button"
                                                                onClick={() =>
                                                                    setShowPassword(
                                                                        (
                                                                            prev,
                                                                        ) =>
                                                                            !prev,
                                                                    )
                                                                }
                                                                aria-label={
                                                                    showPassword
                                                                        ? "Hide password"
                                                                        : "Show password"
                                                                }
                                                                style={{
                                                                    position:
                                                                        "absolute",
                                                                    right: 5,
                                                                    top: 9,
                                                                    zIndex: 10,
                                                                }}
                                                            >
                                                                {showPassword ? (
                                                                    <EyeOff
                                                                        size={
                                                                            18
                                                                        }
                                                                    />
                                                                ) : (
                                                                    <Eye
                                                                        size={
                                                                            18
                                                                        }
                                                                    />
                                                                )}
                                                            </button>
                                                        </div>
                                                    )}
                                                />
                                            </VStack>
                                            <VStack gap={1}>
                                                <Controller
                                                    control={control}
                                                    name="confirmPassword"
                                                    render={({
                                                        field,
                                                        fieldState,
                                                    }) => (
                                                        <div className="password-field">
                                                            <TextInput
                                                                {...field}
                                                                label="Confirm Password"
                                                                isLabelHidden
                                                                placeholder="Confirm your password"
                                                                type={
                                                                    showConfirmPassword
                                                                        ? "text"
                                                                        : "password"
                                                                }
                                                                size="lg"
                                                                startIcon={Lock}
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

                                                            <button
                                                                type="button"
                                                                onClick={() =>
                                                                    setShowConfirmPassword(
                                                                        (
                                                                            prev,
                                                                        ) =>
                                                                            !prev,
                                                                    )
                                                                }
                                                                aria-label={
                                                                    showConfirmPassword
                                                                        ? "Hide password"
                                                                        : "Show password"
                                                                }
                                                                style={{
                                                                    position:
                                                                        "absolute",
                                                                    right: 5,
                                                                    top: 9,
                                                                    zIndex: 10,
                                                                }}
                                                            >
                                                                {showConfirmPassword ? (
                                                                    <EyeOff
                                                                        size={
                                                                            18
                                                                        }
                                                                    />
                                                                ) : (
                                                                    <Eye
                                                                        size={
                                                                            18
                                                                        }
                                                                    />
                                                                )}
                                                            </button>
                                                        </div>
                                                    )}
                                                />
                                            </VStack>
                                        </VStack>
                                    )}

                                    <Button
                                        label="Sign Up"
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
