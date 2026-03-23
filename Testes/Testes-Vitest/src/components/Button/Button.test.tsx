import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Button } from "./index"

describe("Button component", () => {
    it("should call onClick prop on click", () => {
        const onClick = vi.fn();

        render(<Button onClick={onClick} disabled={true}>Botao testee</Button>);
        
        const button = screen.getByText("Botao testee");
        fireEvent.click(button);

        expect(onClick).toHaveBeenCalled();
    })
})