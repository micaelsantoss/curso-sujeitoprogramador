import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Button } from "./index"

describe("Button component", () => {
    it("should call onClick prop on click", () => {
        const onClick = vi.fn();

        render(<Button onClick={onClick} disabled={true}>Botao testee</Button>);
        
        const button = screen.getByText("Botao testee");
        fireEvent.click(button);
        fireEvent.click(button);

        expect(onClick).toHaveBeenCalledTimes(2);// clicou 2 vezes

    })

    it("should render with pink background if disabled", () => {
        render( <Button onClick={() => {}} disabled={true}>Meu Botao</Button>)

        const button = screen.getByRole("button", { name: "Meu Botao"});

        expect(button).toHaveStyle("background-color: #fbfb");
    })
})