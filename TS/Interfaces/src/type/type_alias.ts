type Uuid = string | number | null;

function Acesso (id: Uuid, nome: string): void {
    console.log(`Acesso concedido a ${nome} com ID: ${id}`);
}

Acesso("123", "João");
Acesso(311, "Joana");


