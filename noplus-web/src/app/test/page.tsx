import { Button } from "@/components/ui";
import { Container } from "@/components/layout";

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
                <Container>
                    <Button>7</Button>
                    <Button>8</Button>
                    <Button>9</Button>
                    <Container row>
                        <Button>10</Button>
                        <Button>11</Button>
                        <Button>12</Button>
                    </Container>
                </Container>
            </Container>
        </Container>
    );
}