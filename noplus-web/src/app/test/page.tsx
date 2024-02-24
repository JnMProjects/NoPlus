import { Container } from "@components/layout";
import { Button } from "@components/ui";

export default function test() {
    return (
        <Container main>
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
            <Container row>
                <Button>4</Button>
                <Button>5</Button>
                <Button>6</Button>
            </Container>
        </Container>
    );
}