import "./Header.css";

interface HeaderProps {
  title?: string;
}

export function Header({ title = "Texto Padrão" }: HeaderProps) {
  return (
    <header>
        <h1>{title}</h1>
    </header>
  );
}