import { Container } from "./styles";

export function TransactionsTable() {
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Aluguel</td>
                        <td className="deposit">R$1100,00</td>
                        <td>Casa</td>
                        <td>17/02/2024</td>
                    </tr>
                    <tr>
                        <td>Desenvolvimento de Website</td>
                        <td className="withdraw"> -R$15000,00</td>
                        <td>Desenvolvimento</td>
                        <td>20/02/2024</td>
                    </tr>
                    </tbody>
            </table>
        </Container>
    );
}