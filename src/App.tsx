import { Button } from "@astryxdesign/core/Button";
import { VStack } from "@astryxdesign/core/Layout";
import { Stack } from "@astryxdesign/core/Layout";

function App() {
    return (
        <Stack direction="vertical" gap={4} height="100vh">
            <VStack gap={2}>
                <Button label="Hello Astryx" onClick={() => alert("Hi!")} />
            </VStack>
        </Stack>
    );
}

export default App;
